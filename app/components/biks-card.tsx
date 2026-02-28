"use client";

export default function BiksCard() {
  function openLink(e: React.MouseEvent, url: string) {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a className="project" href="https://biks.ai/" target="_blank" rel="noreferrer">
      <div className="project-row">
        <span className="project-name">Biks AI</span>
        <span className="project-status">Live</span>
      </div>
      <p className="project-desc">
        AI translation layer for Indonesian SMEs. Voice note your problem — agents build a prototype in minutes.{" "}
        <span
          className="collab"
          onClick={(e) => openLink(e, "https://www.ngurahlinggih.com/")}
        >
          with <span className="collab-link">Ngurah</span>
        </span>
      </p>
      <p className="project-meta">
        <span className="collab-link" onClick={(e) => openLink(e, "https://openclaw.com")}>OpenClaw</span>
        {" · "}
        <span className="collab-link" onClick={(e) => openLink(e, "https://claude.ai")}>Claude</span>
        {" · "}
        <span className="collab-link" onClick={(e) => openLink(e, "https://replit.com")}>Replit</span>
        {" · "}Telegram · WhatsApp
      </p>
    </a>
  );
}
