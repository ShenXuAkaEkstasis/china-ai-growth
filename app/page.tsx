
const solutions = [
  {
    title: "China GTM Strategy",
    desc: "Market-entry diagnosis, ICP analysis, platform selection, pricing localization, and China launch roadmap for global AI products.",
  },
  {
    title: "AI Discovery & GEO",
    desc: "Position your AI product for search, LLM recommendations, AI-native discovery, and future agent-mediated decision environments.",
  },
  {
    title: "Growth Execution",
    desc: "Localized content testing, KOL outreach, Xiaohongshu / WeChat / Douyin pilots, tracking links, and campaign execution support.",
  },
  {
    title: "Market Intelligence",
    desc: "China AI landscape research, competitor mapping, user behavior insights, and structured opportunity reports.",
  },
];

const pricing = [
  {
    name: "Advisory",
    price: "$49/hr",
    desc: "Flexible China GTM and AI growth consulting.",
    items: ["Market entry Q&A", "Channel advice", "GEO / AI discovery review"],
  },
  {
    name: "Growth Test",
    price: "$300+",
    desc: "A lightweight validation package for early traction.",
    items: ["Tracking setup", "Content direction", "Initial growth test"],
  },
  {
    name: "Execution Sprint",
    price: "$2,000+",
    desc: "Structured GTM execution for AI products entering China.",
    items: ["GTM roadmap", "KOL / social execution", "Reporting & optimization"],
  },
];

const process = [
  "Diagnose market fit",
  "Define China entry path",
  "Launch controlled tests",
  "Optimize based on signals",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <div className="text-xl font-bold tracking-tight">Shen Xu</div>
          <div className="text-xs text-slate-500">AI Growth Consultant · China GTM</div>
        </div>

        <div className="hidden gap-8 text-sm text-slate-600 md:flex">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:shanehsu1013@gmail.com"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20"
        >
          Start a Project
        </a>
      </nav>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-[-180px] -z-10 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute right-[-160px] top-40 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-200/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              AI Growth · China GTM · GEO · Agentic Discovery
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              China growth strategy for global AI companies.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
              I help AI companies enter China, build early traction, improve AI-era discoverability,
              and turn market uncertainty into structured growth execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:shanehsu1013@gmail.com"
                className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Book a GTM Call
              </a>
              <a
                href="https://www.linkedin.com/in/shanehsu/"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View LinkedIn
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">150+</div>
                <p className="mt-1 text-sm text-slate-500">Brands served</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">AI</div>
                <p className="mt-1 text-sm text-slate-500">Growth focus</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">CN</div>
                <p className="mt-1 text-sm text-slate-500">Market expertise</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Operating System
            </p>

            <div className="mt-8 space-y-5">
              {[
                "China market entry diagnosis",
                "GEO and AI discovery positioning",
                "Localized channel testing",
                "Execution roadmap and reporting",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white group-hover:bg-blue-600">
                    {index + 1}
                  </div>
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
              <div className="text-sm text-white/60">Primary CTA</div>
              <div className="mt-2 text-2xl font-bold">Start with a market diagnosis</div>
              <a
                href="mailto:shanehsu1013@gmail.com"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950"
              >
                Contact Shen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Solutions
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Built for AI companies that need China traction, not generic marketing.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Process
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            A structured execution model from strategy to traction.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-8 text-4xl font-bold text-blue-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Clear entry points for consulting and execution.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-[1.75rem] border bg-white p-8 shadow-sm ${
                index === 1
                  ? "border-blue-300 shadow-xl shadow-blue-100"
                  : "border-slate-200"
              }`}
            >
              {index === 1 && (
                <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  Popular start
                </div>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <div className="mt-5 text-4xl font-bold">{plan.price}</div>
              <p className="mt-4 min-h-16 text-slate-600">{plan.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a
                href="mailto:shanehsu1013@gmail.com"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 font-semibold ${
                  index === 1
                    ? "bg-blue-600 text-white"
                    : "bg-slate-950 text-white"
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white shadow-2xl shadow-blue-200 md:p-14">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Ready to test your AI product in the China market?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Start with a focused GTM conversation, then move into a practical
            roadmap for discovery, traction, and execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:shanehsu1013@gmail.com"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700"
            >
              Book a GTM Call
            </a>
            <a
              href="https://www.linkedin.com/in/shanehsu/"
              className="rounded-full border border-white/40 px-8 py-4 text-lg font-semibold text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Shen Xu. AI Growth Consultant for Global AI Companies.</p>
          <p>shanehsu1013@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}