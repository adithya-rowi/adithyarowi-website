import type { Metadata } from "next";
import BiksCard from "./components/biks-card";

export const metadata: Metadata = {
  title: "Adithya Rowi",
  description: "I talk to AI and things happen. Jakarta.",
};

export default function Page() {
  return (
    <main className="page">
      {/* HEADER */}
      <header>
        <h1 className="name">Adithya Rowi</h1>
        <p className="tagline">I talk to AI and things happen. Jakarta.</p>
        <div className="header-links">
          <a href="mailto:adithyarowi@gmail.com">Email</a>
          <a href="https://github.com/adithya-rowi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://weless.substack.com/" target="_blank" rel="noreferrer">Substack</a>
          <a href="https://www.linkedin.com/in/adithya-n-rowi-a5a6a76/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/adithyarowi" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.instagram.com/adithyarowi/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@enjoytheweless" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://hawa.bearblog.dev/blog/" target="_blank" rel="noreferrer">Hawa</a>
        </div>
      </header>

      {/* PROJECTS */}
      <section>
        <div className="section-title">Projects</div>

        <BiksCard />

        <a className="project" href="https://loper.id/" target="_blank" rel="noreferrer">
          <div className="project-header">
            <span className="project-name">Loper</span>
            <span className="status status-building">Building</span>
          </div>
          <p className="project-desc">
            AI-powered news intelligence for Indonesian commissioners and board members.
            Personalized briefings that change decisions. 6-model AI council architecture.
          </p>
          <div className="project-tech">
            <span className="tech">Perplexity</span>
            <span className="tech">Gemini</span>
            <span className="tech">Grok</span>
            <span className="tech">DeepSeek</span>
            <span className="tech">GPT</span>
            <span className="tech">Claude</span>
          </div>
        </a>

        <a className="project" href="https://gusahab.com" target="_blank" rel="noreferrer">
          <div className="project-header">
            <span className="project-name">Gus Ahab AI</span>
            <span className="status status-live">Live</span>
          </div>
          <p className="project-desc">
            AI-powered Islamic Q&amp;A chatbot inspired by the teaching style of Gus Baha.
          </p>
          <div className="project-tech">
            <span className="tech">Ragie.AI</span>
            <span className="tech">RAG</span>
            <span className="tech">ChatGPT-4o</span>
          </div>
        </a>

        <a className="project" href="https://nambah.lol/" target="_blank" rel="noreferrer">
          <div className="project-header">
            <span className="project-name">Nambah</span>
            <span className="status status-live">Live</span>
          </div>
          <p className="project-desc">
            Private investment group for my inner circle. We save together, invest together, and
            holiday together. ~30% fund growth last year.
          </p>
          <div className="project-tech">
            <span className="tech">Replit</span>
            <span className="tech">Claude</span>
          </div>
        </a>

        <a className="project" href="https://www.mahfudmd-ai.dev/" target="_blank" rel="noreferrer">
          <div className="project-header">
            <span className="project-name">MahfudMD-AI</span>
            <span className="status status-paused">Paused</span>
          </div>
          <p className="project-desc">
            Chatbot built from Mahfud MD&apos;s YouTube content. Ask him anything.
          </p>
          <div className="project-tech">
            <span className="tech">Ragie.AI</span>
            <span className="tech">RAG</span>
            <span className="tech">GPT-4o</span>
          </div>
        </a>

        <div className="project project-no-link">
          <div className="project-header">
            <span className="project-name">Cyber Maturity Copilot</span>
            <span className="status status-winner">Winner — Ensign AI 2025</span>
          </div>
          <p className="project-desc">
            Automates cyber maturity assessments using OCR, RAG, and LLM for faster analysis.
          </p>
          <div className="project-tech">
            <span className="tech">Landing.AI</span>
            <span className="tech">Ragie.AI</span>
            <span className="tech">DeepSeek</span>
          </div>
        </div>
      </section>

      {/* NOW */}
      <section>
        <div className="section-title">Now</div>

        <div className="now-group">
          <div className="now-label">Listening</div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://youtu.be/o_N5JQYHJXk?si=4AdVglPRbJm3lLwc" target="_blank" rel="noreferrer">
                Fred again.. – Green Room Set (Rome)
              </a>
            </div>
            <div className="now-item-note">Party vibe I&apos;d go to. Turn it up.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Runnin-Down-Dream-Thrive-Career/dp/0593799666" target="_blank" rel="noreferrer">
                Runnin&apos; Down a Dream – Bill Gurley
              </a>
            </div>
            <div className="now-item-note">Smart VC, knew him from Tim Ferriss. Just curious.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Way-Excellence-Guide-Greatness-Satisfaction/dp/0063348853" target="_blank" rel="noreferrer">
                The Way of Excellence – Brad Stulberg
              </a>
            </div>
            <div className="now-item-note">Cal Newport and Steve Kerr praised it. Had to check it out.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Road-Ahead-Bill-Gates/dp/0140260404" target="_blank" rel="noreferrer">
                The Road Ahead – Bill Gates
              </a>
            </div>
            <div className="now-item-note">Someone recommended it, can&apos;t remember who lol.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Wisdom-Takes-Work-Repeat-Virtues/dp/0593191730" target="_blank" rel="noreferrer">
                Wisdom Takes Work
              </a>
            </div>
            <div className="now-item-note">Listening now.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B0FBCVCC7M" target="_blank" rel="noreferrer">
                The Almanack of Naval Ravikant
              </a>
            </div>
            <div className="now-item-note">Revisiting.</div>
          </div>
        </div>

        <div className="now-group">
          <div className="now-label">Reading</div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Inner-Game-Tennis-Classic-Performance/dp/0679778314" target="_blank" rel="noreferrer">
                The Inner Game of Tennis – W. Timothy Gallwey
              </a>
            </div>
            <div className="now-item-note">Training my mental game. I play padel now lol.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884" target="_blank" rel="noreferrer">
                High Output Management
              </a>
            </div>
            <div className="now-item-note">Try to be a great leader.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">
              <a href="https://www.amazon.com/Sense-Style-Thinking-Persons-Writing/dp/0143127799" target="_blank" rel="noreferrer">
                The Sense of Style
              </a>
            </div>
            <div className="now-item-note">For clearer writing.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">Syajaratul Ma&apos;arif — Syaikh al-&apos;Izz bin Abdus Salam</div>
            <div className="now-item-note">Learning from a wise person.</div>
          </div>
          <div className="now-item">
            <div className="now-item-title">Hayat dan Wasiat Abul Hasan asy-Syadzili</div>
            <div className="now-item-note">Learning to live closer to God.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="mailto:adithyarowi@gmail.com" className="footer-email">
          adithyarowi@gmail.com
        </a>
        <p className="footer-support">
          <a href="/support" className="support-link">Support my work</a>
        </p>
        <p className="footer-note">Thanks for visiting.</p>
      </footer>
    </main>
  );
}
