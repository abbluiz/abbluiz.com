#!/usr/bin/env bash
# Recreate the local .claude/CLAUDE.md -> AGENTS.md symlink so Claude Code
# reads the same source-of-truth doc as humans. .claude/ is gitignored, so
# this has to be re-run on every fresh clone.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f AGENTS.md ] && [ ! -L AGENTS.md ]; then
  echo "AGENTS.md missing — nothing to link" >&2
  exit 1
fi

mkdir -p .claude

if [ -L .claude/CLAUDE.md ] && [ "$(readlink .claude/CLAUDE.md)" = "../AGENTS.md" ]; then
  echo ".claude/CLAUDE.md -> AGENTS.md already in place"
  exit 0
fi

rm -f .claude/CLAUDE.md
ln -s ../AGENTS.md .claude/CLAUDE.md
echo ".claude/CLAUDE.md -> AGENTS.md"
