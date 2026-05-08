function Header({ active }) {
  const items = [
    ["Research", "research"],
    ["People", "people"],
    ["Publications", "publications"],
    ["Open Work", "projects"],
    ["Join", "join"],
  ];
  return (
    <header className="site-header">
      <a href="#top" className="brand-lockup" aria-label="BreathAI home">
        <img src="../../assets/breathai-mark.svg" width="30" height="30" alt="" />
        <span>BreathAI</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        {items.map(([label, id]) => (
          <a key={id} href={"#" + id} className={active === id ? "is-active" : ""}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand-block">
        <img src="../../assets/breathai-mark.svg" width="32" height="32" alt="" />
        <div>
          <strong>BreathAI</strong>
          <p>Language, reasoning, and agents at NTU.</p>
          <div className="colophon">© 2026 · Nanyang Technological University · Singapore</div>
        </div>
      </div>
      <div className="footer-links">
        <a href="https://github.com/breathai-lab">GitHub</a>
        <a href="mailto:breathai@ntu.edu.sg">Email</a>
        <a href="#">RSS</a>
        <a href="#top">Top ↑</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
