import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import { quickFacts, schoolValues } from "../../lib/site-content";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-eyebrow">About Vaidik Vidyapeeth</p>
            <h1 className="page-title">A school story built around values, discipline, and steady growth.</h1>
            <p className="page-copy">
              Vaidik Vidyapeeth is shaped by a simple belief: children learn best when academic expectations,
              care, and character-building work together every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/academics" className="hero-primary">Explore Academics</Link>
              <Link href="/contact" className="hero-secondary">Book A Visit</Link>
            </div>
          </div>

          <div className="page-panel">
            <p className="feature-label">School Character</p>
            <h3 className="feature-title">Warm in atmosphere, clear in expectations</h3>
            <p className="feature-copy">
              Students are guided through routines that help them feel supported, responsible, and ready to participate.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="mini-stat-card">
                  <p className="mini-stat-value">{fact.value}</p>
                  <p className="mini-stat-label">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <SectionHeading
            eyebrow="Identity"
            title="A school culture where care and discipline move together."
            text="The school story is centered on trust, visible routines, clear communication, and steady progress for every learner."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="feature-card feature-card-strong">
              <p className="feature-label">Mission</p>
              <h3 className="feature-title">To nurture capable, confident, and respectful learners.</h3>
              <p className="feature-copy">
                Students should grow academically while also developing responsibility, communication, and character.
              </p>
            </article>

            <article className="feature-card">
              <p className="feature-label">Vision</p>
              <h3 className="feature-title">To remain rooted while preparing students for change.</h3>
              <p className="feature-copy">
                The school aims to blend values-based learning with the skills and mindset needed in a modern world.
              </p>
            </article>

            <article className="feature-card sm:col-span-2">
              <p className="feature-label">School Promise</p>
              <h3 className="feature-title">Care, clarity, and visible progress in everyday school life.</h3>
              <p className="feature-copy">
                Parents should feel that expectations are clear, communication is open, and student growth is observable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Core Values"
            title="Three themes that define the school experience."
            text="These values guide classroom behavior, parent communication, co-curricular life, and the daily rhythm of the school."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {schoolValues.map((item) => (
              <article key={item.title} className="feature-card">
                <p className="feature-label">Value</p>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
