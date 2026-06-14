"use client";

import type { BoardDisplayStatus } from "@/src/types/board";

type Props = {
  agentId: string;
  status: BoardDisplayStatus;
  size?: number;
  showName?: boolean;
};

const basePath = "/skills-hub";

const agentIcons: Record<string, string> = {
  claude: `${basePath}/icons/claude.svg`,
  codex: `${basePath}/icons/codex.svg`,
  cursor: `${basePath}/icons/cursor.svg`,
  trae: `${basePath}/icons/trae.svg`,
  hermes: `${basePath}/icons/hermes.svg`,
  codebuddy: `${basePath}/icons/codebuddy.svg`,
  antigravity: `${basePath}/icons/antigravity.svg`,
  opencode: `${basePath}/icons/opencode.svg`,
  openclaw: `${basePath}/icons/openclaw.svg`,
};

const agentNames: Record<string, string> = {
  claude: "Claude Code",
  codex: "Codex",
  cursor: "Cursor",
  trae: "Trae",
  hermes: "Hermes",
  codebuddy: "CodeBuddy",
  antigravity: "Antigravity",
  opencode: "OpenCode",
  openclaw: "OpenClaw",
};

const statusLabels: Record<BoardDisplayStatus, string> = {
  installed: "已安装",
  missing: "缺失",
  broken: "异常",
};

export function AgentIcon({ agentId, status, size = 16, showName = false }: Props) {
  const src = agentIcons[agentId];
  const name = agentNames[agentId] ?? agentId;

  return (
    <span
      className={`agent-icon agent-icon--${status}`}
      title={`${name} - ${statusLabels[status]}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: showName ? 4 : 0,
        width: showName ? "auto" : size + 4,
        height: size + 4,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={agentId}
          width={size}
          height={size}
          className="agent-icon-img"
        />
      ) : (
        <span
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: "var(--muted2)",
            fontSize: Math.round(size * 0.6),
            lineHeight: `${size}px`,
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            display: "block",
            flexShrink: 0,
          }}
        >
          {agentId.charAt(0).toUpperCase()}
        </span>
      )}
      {showName && (
        <span style={{ fontSize: Math.round(size * 0.75), color: "var(--fg2)" }}>
          {name}
        </span>
      )}
    </span>
  );
}
