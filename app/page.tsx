const milestones = [
  {
    title: "First spark",
    period: "November 2021",
    description:
      "Signed up for my first UI/UX course because curiosity kept me awake at night. I wanted to know why the products I loved felt so effortless.",
  },
  {
    title: "Immersive learning",
    period: "Deep-dive weeks",
    description:
      "Treated the course like a full-time job. Studied patterns, rebuilt interfaces, and learned the language of human-centered design.",
  },
  {
    title: "First internship",
    period: "2-month product design internship",
    description:
      "Joined a team to work on real briefs. Discovered how feedback loops, constraints, and collaboration shape great experiences.",
  },
  {
    title: "Confident designer",
    period: "Today",
    description:
      "Designing with purpose. Blending curiosity with process, translating stories into interfaces people enjoy using.",
  },
];

const focusAreas = [
  "UI systems",
  "UX strategy",
  "Design sprints",
  "Product thinking",
  "Wireframes",
  "User research",
  "Interaction design",
  "Design handoff",
];

const experienceHighlights = [
  {
    title: "Design intern",
    description: "Collaborated with founders to refine onboarding and dashboard flows for early users.",
    period: "2022",
  },
  {
    title: "Freelance collaborator",
    description: "Helped indie teams give their concepts a visual voice without losing the core story.",
    period: "2023",
  },
  {
    title: "Community mentor",
    description: "Ran weekly critique circles for new designers who were where I once was — curious and determined.",
    period: "Ongoing",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero section fade-in">
        <div className="hero-text">
          <span className="hero-badge">Rakib • Product Designer</span>
          <h1 className="hero-title">
            From curious mind <br /> to confident designer
          </h1>
          <p className="hero-subtitle">
            I&apos;m Rakib. I don&apos;t hide behind buzzwords — design pulled me in
            because I wanted to understand how real products earn trust. Since
            November 2021 I&apos;ve stayed obsessed with that question.
          </p>
          <div className="hero-cta">
            <a className="primary" href="#journey">
              Explore my journey
            </a>
            <a className="secondary" href="#work">
              See how I design
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-card">
            <div className="avatar">R</div>
            <h3>Rakib</h3>
            <p className="tagline">Curious learner • Deliberate builder</p>
            <blockquote>
              “Curiosity made me start. Intentional practice keeps me creating.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="journey" className="section fade-in">
        <h2>The story so far</h2>
        <p>
          My design path isn&apos;t accidental. It&apos;s a series of decisions made
          from a place of curiosity, discipline, and respect for the people who
          use the products I help build.
        </p>
        <div className="journey-grid">
          <div className="timeline">
            {milestones.map((milestone) => (
              <div key={milestone.title} className="timeline-step">
                <span>{milestone.period}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
          <div className="story-grid">
            <div className="story-card">
              <h3>Curiosity to craft</h3>
              <p>
                Back when UI/UX was just a whisper where I live, I leaned into
                the unknown. I consumed tutorials, took apart interfaces, and
                mapped every new idea I discovered. Curiosity was my engine.
              </p>
            </div>
            <div className="story-card">
              <h3>Learning by doing</h3>
              <p>
                During my 2-month internship, I stopped theorizing and started
                shipping. Real deadlines and feedback transformed the way I
                listened, iterated, and delivered.
              </p>
            </div>
            <div className="story-card">
              <h3>Confidence through clarity</h3>
              <p>
                I&apos;ve grown into a designer who connects the intention behind an
                idea with the interface the world sees. Confidence came from
                showing up — over and over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section fade-in">
        <div className="highlight-card">
          <div>
            <h3>How I design</h3>
            <p>
              I listen first, sketch fast, test early, and refine relentlessly.
              Every project starts with the story of the person using it and
              ends with a product that feels considered.
            </p>
          </div>
          <div>
            <div className="tag-grid">
              {focusAreas.map((area) => (
                <span className="tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <h2>Experience snapshots</h2>
        <div className="experience-stack">
          {experienceHighlights.map((item) => (
            <div key={item.title} className="experience-item">
              <span>{item.period}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section fade-in">
        <h2>What I&apos;m exploring next</h2>
        <p>
          I&apos;m digging deeper into motion systems, advanced prototyping, and how
          AI can partner with designers without replacing the human instinct for
          empathy. If you&apos;re building something thoughtful, I&apos;d love to be part
          of the team shaping it.
        </p>
      </section>

      <footer>
        Built with intention by Rakib. Always learning, always shipping.
      </footer>
    </main>
  );
}
