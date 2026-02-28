"use client";

export default function TechLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <span
      className="tech tech-link"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      {children}
    </span>
  );
}
