function SignalBand() {
  const items = [
    ["01", "Open by default", "Code, data, and reproducible artifacts whenever research permits."],
    ["02", "Systems with taste", "Models that work outside the paper setting and remain inspectable."],
    ["03", "Global language intelligence", "NLP that respects multilingual, multicultural, and local contexts."],
  ];
  return (
    <section className="signal-band" aria-label="Lab principles">
      {items.map(([n, t, d]) => (
        <div key={n}>
          <span className="signal-kicker">{n}</span>
          <strong>{t}</strong>
          <p>{d}</p>
        </div>
      ))}
    </section>
  );
}

function NewsList() {
  return (
    <section className="section two-column" id="news">
      <div className="section-intro">
        <p className="eyebrow">Now</p>
        <h2>Lab Notes</h2>
        <p>A lightweight channel for launch milestones, selected papers, software releases, and opportunities.</p>
      </div>
      <div className="news-list">
        {window.NEWS.map((n, i) => (
          <article className="news-item" key={i}>
            <time className="news-date">{n.date}</time>
            <div>
              <h3>{n.title}</h3>
              <p>{n.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchGrid() {
  return (
    <section className="section research-section" id="research">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Research</p>
          <h2>Built around questions, not buzzwords.</h2>
        </div>
      </div>
      <div className="research-grid">
        {window.RESEARCH.map((r) => (
          <article className="research-card" key={r.index}>
            <span className="card-index">{r.index}</span>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <p className="topics">{r.topics}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="section" id="people">
      <div className="section-heading">
        <div>
          <p className="eyebrow">People</p>
          <h2>A lab designed to compound talent.</h2>
        </div>
      </div>
      <div className="people-groups">
        {window.PEOPLE.map((g) => (
          <section className="people-group" key={g.name}>
            <h3>{g.name}</h3>
            <div className="people-grid">
              {g.members.map((p) => (
                <article className="person-card" key={p.name}>
                  <div className="person-photo">{p.initials}</div>
                  <span className="person-role">{p.role}</span>
                  <h3>{p.name}</h3>
                  <p>{p.focus}</p>
                  {p.links.length > 0 && (
                    <div className="link-row">
                      {p.links.map((l) => <a key={l.label} href={l.url}>{l.label}</a>)}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Publications({ filter, onFilter }) {
  const filters = [["all", "All"], ["models", "Models"], ["agents", "Agents"], ["eval", "Evaluation"]];
  const items = filter === "all" ? window.PUBLICATIONS : window.PUBLICATIONS.filter(p => p.tags.includes(filter));
  return (
    <section className="section publication-section" id="publications">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Publications</p>
          <h2>Papers and artifacts</h2>
        </div>
        <div className="filter-group" role="group" aria-label="Filters">
          {filters.map(([k, l]) => (
            <button key={k} className={"filter-button" + (filter === k ? " is-active" : "")} onClick={() => onFilter(k)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="publication-list">
        {items.map((p, i) => (
          <article className="publication-item" key={i}>
            <div className="publication-year">{p.year}</div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="publication-meta">{p.authors} · {p.venue}</div>
              {p.links.length > 0 && (
                <div className="link-row">
                  {p.links.map((l) => <a key={l.label} href={l.url}>{l.label} ↗</a>)}
                </div>
              )}
            </div>
            <div className="tag-list">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section two-column" id="projects">
      <div className="section-intro">
        <p className="eyebrow">Open Work</p>
        <h2>Repos should feel like research infrastructure.</h2>
        <p>BreathAI projects are organised so papers, code, demos, and datasets can be discovered from one place.</p>
      </div>
      <div className="project-list">
        {window.PROJECTS.map((p, i) => (
          <article className={"project-item" + (p.status === "Active" ? " is-active" : "")} key={i}>
            <span className="project-status">{p.status}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            {p.links.length > 0 && (
              <div className="link-row">
                {p.links.map((l) => <a key={l.label} href={l.url}>{l.label} ↗</a>)}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function JoinCTA() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return (
    <section className="join-section" id="join">
      <div>
        <p className="eyebrow">Join</p>
        <h2>Help build the lab from the first chapter.</h2>
        <p>We are interested in students and collaborators who care about clear thinking, strong systems, and research taste. PhD, research assistant, internship, and visiting roles can be listed here as the lab opens positions.</p>
        <p style={{ marginTop: "1.2rem" }}><a href="mailto:breathai@ntu.edu.sg" className="button button-primary">Contact BreathAI</a></p>
      </div>
      <form className="join-form" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
        <label>Subscribe to lab notes</label>
        {!done ? (
          <div className="input-row">
            <input type="email" placeholder="you@institute.edu" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Subscribe</button>
          </div>
        ) : (
          <span className="confirm-chip">✓ Subscribed · we'll be in touch.</span>
        )}
        <p className="alt">Or contact us directly at <a href="mailto:breathai@ntu.edu.sg">breathai@ntu.edu.sg</a>.</p>
      </form>
    </section>
  );
}

Object.assign(window, { SignalBand, NewsList, ResearchGrid, People, Publications, Projects, JoinCTA });
