import Link from "next/link";
import SectionHeading from "../components/section-heading";
import SiteShell from "../components/site-shell";
import { facilities, highlights, programs, quickFacts, updates } from "../lib/site-content";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-shell">
        <div className="hero-backdrop" />
        <div className="hero-overlay" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-10 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-center lg:px-10 lg:pt-12">
          <div className="hero-copy">
            <p className="hero-kicker">Kathmandu-32, Koteshwor</p>
            <h1 className="hero-title">Vaidik Vidyapeeth</h1>
            <p className="hero-text">
              A values-led school experience with clear academics, active learning, and a warm campus culture for
              growing learners.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/admissions" className="hero-primary">Start Admission Inquiry</Link>
              <Link href="/about" className="hero-secondary">Explore School Overview</Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <article key={fact.label} className="fact-card">
                  <div className="fact-value">{fact.value}</div>
                  <p className="fact-label">{fact.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-visual">
              <div className="hero-visual-copy">
                <p className="hero-visual-eyebrow">Learning Environment</p>
                <h3 className="hero-visual-title">Structured days, active classrooms, confident students</h3>
                <p className="hero-visual-text">
                  A school rhythm shaped by care, discipline, expression, and steady academic progress.
                </p>
              </div>
            </div>

            <div className="hero-highlight-grid">
              {highlights.map((item) => (
                <div key={item} className="highlight-row">
                  <span className="highlight-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Welcome"
            title="A calm, values-led school environment for curious learners."
            text="Vaidik Vidyapeeth brings together academic focus, cultural grounding, practical learning, and a caring school routine so students can grow with confidence."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="feature-card feature-card-strong">
              <p className="feature-label">Our Story</p>
              <h3 className="feature-title">Rooted in values, focused on growth</h3>
              <p className="feature-copy">
                The school environment supports discipline, respect, responsibility, and a love for learning.
              </p>
              <Link href="/about" className="inline-link mt-6">Visit About Page</Link>
            </article>

            <article className="feature-card">
              <p className="feature-label">Academics</p>
              <h3 className="feature-title">Clear programs and active classrooms</h3>
              <p className="feature-copy">
                Stage-based learning helps students build strong foundations and apply ideas with confidence.
              </p>
              <Link href="/academics" className="inline-link mt-6">View Academics</Link>
            </article>

            <article className="feature-card">
              <p className="feature-label">Admissions</p>
              <h3 className="feature-title">A welcoming path for families</h3>
              <p className="feature-copy">
                Families can visit the campus, understand the routine, and receive guidance on placement.
              </p>
              <Link href="/admissions" className="inline-link mt-6">Open Admissions</Link>
            </article>
          </div>

          <div className="campus-strip mt-12">
            <div className="campus-photo campus-photo-one">
              <span>Focused Classrooms</span>
            </div>
            <div className="campus-photo campus-photo-two">
              <span>Creative Expression</span>
            </div>
            <div className="campus-photo campus-photo-three">
              <span>Active School Life</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Academic Snapshot"
            title="Learning stages designed for steady academic progress."
            text="Each wing has its own rhythm, expectations, and opportunities for practice, presentation, and growth."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <p className="program-kicker">Academic Wing</p>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-copy">{program.text}</p>
                <div className="program-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.75fr)] lg:items-start lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Facilities Preview"
              title="Spaces that support study, creativity, and confident participation."
              text="The campus experience is shaped around classroom focus, activity-based learning, reading, movement, and expression."
            />

            <div className="mt-8 grid gap-4">
              {facilities.slice(0, 3).map((facility) => (
                <article key={facility.title} className="preview-row-card">
                  <div className="preview-row-dot" />
                  <div>
                    <h3 className="preview-row-title">{facility.title}</h3>
                    <p className="preview-row-copy">{facility.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link href="/facilities" className="hero-primary mt-8 inline-flex">See All Facilities</Link>
          </div>

          <div className="updates-panel">
            <p className="updates-panel-eyebrow">School Updates</p>
            <h3 className="updates-panel-title">Quick notes for families</h3>
            {updates.map((item) => (
              <article key={item.title} className="update-card">
                <div className="update-badge">{item.label}</div>
                <div>
                  <h3 className="update-title">{item.title}</h3>
                  <p className="update-copy">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
