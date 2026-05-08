function Hero() {
  const agenda = [
    ["01", "LLMs that reason", "Models with stronger planning, evidence use, and verifiable traces."],
    ["02", "Agents that work", "Tool-using systems for research, coding, knowledge, and collaboration."],
    ["03", "Evaluation with teeth", "Benchmarks and audits that reveal behaviour before deployment."],
    ["04", "Language beyond English", "Multilingual NLP grounded in regional communities and real use."],
  ];
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-copy">
        <span className="hero-status"><span className="dot"></span>Now hiring · 2 PhD positions for AY26/27</span>
        <p className="eyebrow">Nanyang Technological University · NLP · LLM Agents</p>
        <h1>BreathAI</h1>
        <p className="lede hero-lede">A new research lab for language intelligence, reasoning systems, and useful agents.</p>
        <p className="hero-text">BreathAI is being formed at NTU to pursue rigorous, open, and ambitious NLP research: from foundation models and evaluation to agentic systems that can collaborate, learn, and act with care.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#publications">Explore work</a>
          <a className="button button-quiet" href="#join">Join the lab →</a>
        </div>
      </div>
      <aside className="hero-agenda" aria-label="Research agenda">
        <div className="agenda-topline">
          <span>Research agenda</span>
          <span>NTU · Singapore</span>
        </div>
        <ol className="agenda-list">
          {agenda.map(([n, t, d]) => (
            <li key={n}>
              <span className="num">{n}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
Object.assign(window, { Hero });
