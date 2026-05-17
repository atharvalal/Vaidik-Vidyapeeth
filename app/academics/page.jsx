import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import { learningFlow, programs } from "../../lib/site-content";

const academicDetails = [
  {
    title: "Language And Communication",
    text: "Reading, writing, speaking, and presentation are treated as central academic skills."
  },
  {
    title: "Mathematics And Reasoning",
    text: "Students build confidence through structured practice, application, and step-by-step clarity."
  },
  {
    title: "Science And Discovery",
    text: "Observation, explanation, and hands-on work help learners connect theory with reality."
  },
  {
    title: "Creative And Co-Curricular",
    text: "Arts, clubs, performances, and events strengthen expression, teamwork, and confidence."
  }
];

export default function AcademicsPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-cool">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-eyebrow">Academics</p>
            <h1 className="page-title">Academic foundations built through practice and confidence.</h1>
            <p className="page-copy">
              Learning at Vaidik Vidyapeeth moves from clear concepts to regular practice, active participation,
              and confident presentation.
            </p>
          </div>

          <div className="page-panel">
            <p className="feature-label">Academic Focus</p>
            <h3 className="feature-title">Progression, practice, and confidence</h3>
            <p className="feature-copy">
              Students are supported through age-appropriate expectations, purposeful activities, and steady feedback.
            </p>
            <Link href="/admissions" className="hero-primary mt-6 inline-flex">Start Admissions</Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Program Levels"
            title="Academic stages that parents can understand at a glance."
            text="Each program level supports a different stage of growth, from early readiness to independent learning."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <p className="program-kicker">Level</p>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-copy">{program.text}</p>
                <div className="program-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Learning Cycle"
            title="An academic rhythm that feels active and intentional."
            text="This section explains how students move from instruction to understanding."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {learningFlow.map((item, index) => (
              <article key={item.title} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Academic Areas"
            title="Learning areas that build skill, curiosity, and expression."
            text="The academic program balances language, reasoning, discovery, creativity, and communication."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {academicDetails.map((item) => (
              <article key={item.title} className="feature-card">
                <p className="feature-label">Focus Area</p>
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
