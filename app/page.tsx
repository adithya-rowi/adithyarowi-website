import Link from "next/link"
import { musicSets, booksNow } from "@/lib/favs"

function lastUpdated() {
  const commit = process.env.COMMIT_REF || process.env.GIT_COMMIT || null
  const date = new Date()
  const formatted = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
  return { formatted, commit }
}

export default function Page() {
  const { formatted, commit } = lastUpdated()

  // helper to embed YouTube regardless of youtu.be or watch?v=
  const toEmbed = (url: string) =>
    url
      ? url
          .replace("youtu.be/", "www.youtube.com/embed/")
          .replace("watch?v=", "embed/")
          .split("?")[0]
      : ""

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <div className="mx-auto max-w-3xl px-5 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Adithya Nugraputra Rowi</h1>
          <p className="mt-3 text-base md:text-lg text-neutral-700">Multi-dimensional, like you.</p>
        </header>

        {/* Find me */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Find me</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://weless.substack.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Weless (Substack)</a></li>
            <li><a href="https://www.linkedin.com/in/adithya-n-rowi-a5a6a76/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">LinkedIn</a></li>
            <li><a href="https://x.com/adithyarowi" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Twitter / X</a></li>
            <li><a href="https://www.instagram.com/adithyarowi/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@enjoytheweless" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">YouTube</a></li>
            <li><a href="https://hawa.bearblog.dev/blog/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Pseudonym: Hawa (BearBlog)</a></li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <ul className="space-y-6">
            <li>
              <p className="font-medium">
                <a
                  href="https://www.mahfudmd-ai.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  MahfudMD-AI
                </a>{" "}
                — Site up, backend paused
              </p>
              <p className="text-neutral-800 text-sm mt-1">
                Chatbot using Mahfud MD’s YouTube content with{" "}
                <a href="https://www.ragie.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Ragie.AI</a>{" "}
                (RAG) and ChatGPT-4o (LLM) for conversation.
              </p>
            </li>

            <li>
              <p className="font-medium">Cyber Maturity Copilot (winner of Ensign AI Showdown 2025)</p>
              <p className="text-neutral-800 text-sm mt-1">
                Automates assessments using{" "}
                <a href="https://landing.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Landing.AI</a>{" "}
                (OCR),{" "}
                <a href="https://www.ragie.ai/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">Ragie.AI</a>{" "}
                (RAG), and DeepSeek (LLM) for faster, accurate analysis.
              </p>
            </li>
          </ul>
        </section>

        {/* Now playing & reading (below Projects) */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Now playing & reading</h2>

          {/* Music */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Music I keep looping</h3>
            <ul className="space-y-4">
              {musicSets.map((s) => (
                <li key={s.url} className="space-y-2">
                  <p className="font-medium">{s.title}</p>
                  {s.url && (
                    <div className="aspect-video w-full overflow-hidden rounded-md border border-neutral-200">
                      <iframe
                        className="h-full w-full"
                        src={toEmbed(s.url)}
                        title={s.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <p className="text-sm">
                    {s.url ? (
                      <>
                        <a className="underline underline-offset-4 hover:no-underline" href={s.url} target="_blank" rel="noreferrer">
                          YouTube link
                        </a>{" "}
                        <span className="text-neutral-600">— {s.note}</span>
                      </>
                    ) : (
                      <span className="text-neutral-600">{s.note}</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Books now */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Reading / listening now</h3>
            <ul className="space-y-3">
              {booksNow.map((b) => (
                <li key={b.title} className="border border-neutral-200 rounded-md p-3">
                  {b.url ? (
                    <p className="font-medium">
                      <a className="underline underline-offset-4 hover:no-underline" href={b.url} target="_blank" rel="noreferrer">
                        {b.title}
                      </a>
                    </p>
                  ) : (
                    <p className="font-medium">{b.title}</p>
                  )}
                  {b.note && <p className="text-neutral-700 text-sm mt-1">{b.note}</p>}
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-600 mt-2">I’ll keep this list fresh. Audiobooks count.</p>
          </div>
        </section>

        {/* Labs */}
        <section className="mb-12">
          <Link href="/labs" className="group">
            <h2 className="text-xl font-semibold mb-3 underline underline-offset-4 group-hover:no-underline cursor-pointer">
              Labs
            </h2>
          </Link>
          <p className="text-neutral-800 text-sm">
            New project: build a chatbot from YouTube links, so you can talk to whoever you admire.{" "}
            <Link href="/labs" className="underline underline-offset-4 hover:no-underline">Learn more</Link>
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-6 mt-6 border-t border-neutral-200 text-sm text-neutral-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p>Thanks for visiting.</p>
            <p className="text-neutral-500">
              Last updated: <span className="font-medium">{formatted}</span>
              {commit ? (
                <> · <a className="underline underline-offset-4 hover:no-underline" href={`https://github.com/adithya-rowi/adithyarowi-website/commit/${commit}`} target="_blank" rel="noreferrer">view commit</a></>
              ) : null}
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
