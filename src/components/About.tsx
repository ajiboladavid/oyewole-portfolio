export function About() {
  return (
    <section id="about" className="section-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — bio */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I work at the intersection of clinical practice, research analytics, and health
              technology — combining frontline nursing experience with data-driven problem solving.
            </p>
            <p>
              My clinical background lets me approach healthcare data with practical context,
              not purely technical abstraction. I understand what the numbers mean at the bedside.
            </p>
            <p>
              As a research analyst, I use SPSS and Excel to analyze and interpret healthcare
              research data, building analytical frameworks aligned with real-world care challenges.
            </p>
            <p>
              In machine learning, my focus is applied modeling for healthcare. I build supervised
              learning systems that translate ML techniques into usable decision-support tools —
              including a Chronic Kidney Disease prediction system.
            </p>
            <p>
              I am currently expanding into SQL and dashboard development, making healthcare data
              more accessible, interpretable, and actionable.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Clinical Background', value: 'BNSc · RN · RM', icon: '🏥' },
              { label: 'ML Focus', value: 'Healthcare AI', icon: '🧠' },
              { label: 'Analytic Tools', value: 'SPSS · Excel', icon: '📊' },
              { label: 'Research Projects', value: '80+ Projects', icon: '📚' },
              { label: 'Tech Stack', value: 'Python · Flask', icon: '⚙️' },
              { label: 'Currently Learning', value: 'SQL · Dashboards', icon: '📈' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-teal-900/40 bg-teal-950/20 p-4 space-y-1"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-xs text-teal-400 uppercase tracking-widest font-medium">
                  {item.label}
                </p>
                <p className="text-sm text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}