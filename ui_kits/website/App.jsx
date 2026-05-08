function App() {
  const [filter, setFilter] = React.useState("all");
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    const ids = ["research", "people", "publications", "projects", "join"];
    const onScroll = () => {
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < 140) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header active={active} />
      <main id="main">
        <Hero />
        <SignalBand />
        <NewsList />
        <ResearchGrid />
        <People />
        <Publications filter={filter} onFilter={setFilter} />
        <Projects />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
Object.assign(window, { App });
