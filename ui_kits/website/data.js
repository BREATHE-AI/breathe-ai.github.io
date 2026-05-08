// Sample content. Edit freely; the components consume these arrays as-is.

window.NEWS = [
  {
    date: "May 2026",
    title: "BreathAI is now incorporated as an NTU lab",
    summary: "We have a charter, our first three members, and a public home. PhD admissions for the AY26/27 cycle open in September.",
  },
  {
    date: "Apr 2026",
    title: "First preprint: verifiable traces for tool-using agents",
    summary: "A framework for producing inspectable agent rollouts plus an audit metric, written up as our zero-th release.",
  },
  {
    date: "Mar 2026",
    title: "Recruiting two PhD students for AY26/27",
    summary: "Topics: agent learning, multilingual evaluation. Strong systems thinking required; prior NLP experience helpful but not a prerequisite.",
  },
];

window.PEOPLE = [
  {
    name: "Faculty",
    members: [
      {
        name: "Lab Director",
        initials: "B",
        role: "Principal Investigator",
        focus: "Language models, agents, evaluation, NLP systems.",
        links: [{ label: "Email", url: "mailto:breathai@ntu.edu.sg" }, { label: "Scholar", url: "#" }],
      },
    ],
  },
  {
    name: "Students & Researchers",
    members: [
      {
        name: "Member 02",
        initials: "P",
        role: "PhD · Incoming",
        focus: "Agent learning and tool-augmented reasoning.",
        links: [{ label: "Site", url: "#" }],
      },
      {
        name: "Member 03",
        initials: "R",
        role: "Research Assistant",
        focus: "Evaluation infrastructure and reproducible NLP systems.",
        links: [{ label: "GitHub", url: "#" }],
      },
      {
        name: "Open",
        initials: "·",
        role: "Visiting Scholar",
        focus: "Multilingual NLP, datasets, and language communities.",
        links: [],
      },
    ],
  },
];

window.PUBLICATIONS = [
  {
    year: 2026,
    title: "Verifiable traces for tool-using agents",
    authors: "BreathAI Lab",
    venue: "Preprint · arXiv:2605.00000",
    summary: "A framework for producing inspectable rollouts from agent runs, with a metric for trace fidelity and a 4k-task evaluation suite.",
    tags: ["agents", "eval"],
    links: [{ label: "PDF", url: "#" }, { label: "Code", url: "#" }],
  },
  {
    year: 2026,
    title: "Reasoning beyond chains: planning over evidence graphs",
    authors: "BreathAI Lab",
    venue: "Preprint · in submission",
    summary: "We replace linear chain-of-thought with a graph of evidence and operate on it with a small planning head, gaining accuracy without scaling the underlying LM.",
    tags: ["models"],
    links: [{ label: "PDF", url: "#" }],
  },
  {
    year: 2026,
    title: "An audit suite for multilingual instruction following",
    authors: "BreathAI Lab",
    venue: "Workshop · in review",
    summary: "Eleven Southeast-Asian languages, 1.2k human-rated rollouts, and the failure modes that English-only evals miss entirely.",
    tags: ["eval"],
    links: [{ label: "Page", url: "#" }],
  },
];

window.PROJECTS = [
  {
    name: "BreathAI Lab Website",
    status: "Active",
    description: "Public home for research, members, and open artifacts. The repository you are reading right now.",
    links: [{ label: "Repo", url: "https://github.com/breathai-lab" }],
  },
  {
    name: "Trace · agent evaluation stack",
    status: "Active",
    description: "Reproducible traces, metrics, and human-readable reports for tool-using agents. Public release planned Q3 2026.",
    links: [{ label: "Preview", url: "#" }],
  },
  {
    name: "Multilingual NLP Resources",
    status: "Planned",
    description: "An index of datasets, model cards, and resources connected to regional and multilingual NLP research.",
    links: [],
  },
];

window.RESEARCH = [
  {
    index: "A",
    title: "Language models that reason",
    body: "Training, adapting, and evaluating models for compositional reasoning, tool use, and dependable decision paths.",
    topics: "Reasoning · Tool use · RLHF/RLAIF",
  },
  {
    index: "B",
    title: "Agentic NLP systems",
    body: "Agents that can plan, communicate, recover from uncertainty, and operate across research, coding, and knowledge workflows.",
    topics: "Planning · Multi-agent · Coding agents",
  },
  {
    index: "C",
    title: "Evaluation and safety",
    body: "Benchmarks, audits, and human-centered methods that reveal model behaviour before it becomes product behaviour.",
    topics: "Audits · Benchmarks · Trace analysis",
  },
  {
    index: "D",
    title: "Multilingual intelligence",
    body: "Language technologies that move beyond English-centric assumptions and treat regional language communities seriously.",
    topics: "SEA languages · Datasets · Low-resource",
  },
];
