import { homedir } from "node:os";
import { join } from "node:path";

import { scanAgentInstructions } from "@/src/lib/instructions/scan-agent-instructions";
import type { InstructionSurface } from "@/src/types/instructions";

export async function scanOpenclawInstructions(
  openclawRootDir: string = join(homedir(), ".openclaw", "workspace")
): Promise<InstructionSurface> {
  return scanAgentInstructions("openclaw", openclawRootDir, {
    mainFileName: "AGENTS.md",
    idPrefix: "openclaw",
    title: "~/.openclaw/workspace/AGENTS.md",
    description: "OpenClaw 牛马仔的工作空间指令文件。",
    loadBehavior: "作为 OpenClaw 的启动指令，定义工作空间行为、工具和个性。"
  });
}
