/**
 * Destructive command patterns — anything matching these routes through HITL.
 */
export const DESTRUCTIVE_PATTERNS: Array<{ pattern: RegExp; reason: string }> = [
  // Filesystem destruction
  { pattern: /\brm\b/, reason: "File/directory deletion" },
  { pattern: /\brmdir\b/, reason: "Directory deletion" },
  { pattern: /\bunlink\b/, reason: "File unlink" },

  // Force / no-preserve
  { pattern: /\b--force\b/, reason: "Force flag detected" },
  { pattern: /\b-f\b(?!\w)/, reason: "Force flag (-f) detected" },
  { pattern: /\b--no-preserve\b/, reason: "No-preserve flag" },

  // Dangerous paths
  { pattern: /\brm\s+.*\//, reason: "Deletion with absolute path" },
  { pattern: /\bchmod\s+/, reason: "Permission change" },
  { pattern: /\bchown\s+/, reason: "Ownership change" },

  // Database
  { pattern: /\bDROP\s+(TABLE|DATABASE|INDEX)/i, reason: "SQL DROP statement" },
  { pattern: /\bTRUNCATE\b/i, reason: "SQL TRUNCATE statement" },
  { pattern: /\bDELETE\s+FROM\b/i, reason: "SQL DELETE without WHERE" },

  // Git destruction
  { pattern: /\bgit\s+push\s+.*--force/, reason: "Force push" },
  { pattern: /\bgit\s+reset\s+--hard/, reason: "Hard reset" },
  { pattern: /\bgit\s+clean\b/, reason: "Git clean (removes untracked files)" },
  { pattern: /\bgit\s+branch\s+-[dD]\b/, reason: "Branch deletion" },

  // System
  { pattern: /\bsudo\b/, reason: "Superuser execution" },
  { pattern: /\bmkfs\b/, reason: "Filesystem formatting" },
  { pattern: /\bdd\b/, reason: "Low-level disk copy" },

  // Network / destructive writes
  { pattern: /\bcurl\b.*\|\s*(bash|sh)/, reason: "Pipe remote script to shell" },
  { pattern: /\bwget\b.*\|\s*(bash|sh)/, reason: "Pipe remote script to shell" },
]

/**
 * Check if a command is destructive.
 * Returns null if safe, or the reason if destructive.
 */
export function detectDestructive(command: string): string | null {
  for (const { pattern, reason } of DESTRUCTIVE_PATTERNS) {
    if (pattern.test(command)) {
      return reason
    }
  }
  return null
}

/**
 * Heuristic: check if a tool call's arguments contain destructive commands.
 */
export function isDestructiveTool(
  toolName: string,
  args: Record<string, unknown>
): { destructive: boolean; reason?: string } {
  // Shell / exec tools — check the command
  const shellTools = ["bash", "shell", "exec", "run_command", "execute", "terminal"]
  if (shellTools.includes(toolName.toLowerCase())) {
    const cmd =
      (args.command as string) ||
      (args.cmd as string) ||
      (args.script as string) ||
      ""
    const reason = detectDestructive(cmd)
    if (reason) return { destructive: true, reason }
  }

  // File edit tools — check for write/delete on sensitive paths
  const fileTools = ["edit", "write", "delete_file", "remove"]
  if (fileTools.includes(toolName.toLowerCase())) {
    const path = (args.path as string) || (args.filePath as string) || ""
    // Destructive if writing to system paths or deleting
    if (toolName.toLowerCase() === "delete_file" || toolName.toLowerCase() === "remove") {
      return { destructive: true, reason: "File deletion" }
    }
    // Writing to sensitive locations
    const sensitive = [/^\/etc\//, /^\/usr\//, /^\/var\//, /^\/bin\//, /^\/sbin\//]
    for (const p of sensitive) {
      if (p.test(path)) {
        return { destructive: true, reason: `Write to system path: ${path}` }
      }
    }
  }

  return { destructive: false }
}
