function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-teal-950/30 text-teal-300 rounded-full border border-teal-800/50 hover:border-teal-500 hover:text-teal-200 transition-all duration-200">
      {skill}
    </span>
  );
}

export function Skills() {
  const skillCategories = [
    {
      icon: '🏥',
      title: 'Clinical Practice',
      skills: ['Patient Care', 'Evidence-Based Practice', 'Clinical Workflows', 'Health Education'],
    },
    {
      icon: '📊',
      title: 'Research Analytics',
      skills: ['SPSS', 'Excel', 'R'],
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      skills: ['Classification & Regression', 'Random Forest · XGBoost', 'Scikit-learn', 'Flask Deployment'],
    },
    {
      icon: '📈',
      title: 'Data Analytics',
      skills: ['SQL', 'Data Visualization', 'Excel · Python', 'Dashboard Development'],
    },
  ];

  return (
    <section id="skills" className="section-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-teal-900/40 bg-teal-950/20 hover:border-teal-700/60 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{category.icon}</div>
              <h3 className="text-base font-semibold text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBadge key={skillIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}