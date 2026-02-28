"use client";

export default function BiksCard() {
  return (
    <a className="project" href="https://biks.ai/" target="_blank" rel="noreferrer">
      <div className="project-header">
        <span className="project-name">Biks AI</span>
        <span className="status status-live">Live</span>
      </div>
      <p className="project-desc">
        AI translation layer for Indonesian SMEs. Voice note your business problem via WhatsApp
        or Telegram — agents build a working prototype in minutes.{" "}
        <span
          className="project-collab"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open("https://www.ngurahlinggih.com/", "_blank");
          }}
        >
          with <span className="collab-link">Ngurah</span>
        </span>
      </p>
      <div className="project-tech">
        <span className="tech">OpenClaw</span>
        <span className="tech">Claude</span>
        <span className="tech">Replit</span>
        <span className="tech">Telegram</span>
        <span className="tech">WhatsApp</span>
      </div>
    </a>
  );
}
