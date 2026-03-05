function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg border-2 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 hover:scale-105">
      {skill}
    </span>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: 'Clinical Practice',
      skills: ['Patient Care', 'Evidence-Based Practice', 'Clinical Workflows', 'Health Education'],
    },
    {
      title: 'Research Analytics',
      skills: ['SPSS', 'Excel', 'R'],
    },
    {
      title: 'Machine Learning',
      skills: ['Supervised Learning (Classification and Regression', 'Random Forest, XGBoost', 'Scikit-learn', 'Flask Deployment'],
    },
    {
      title: 'Data Analytics',
      skills: ['SQL', 'Data Visualization (Excel/Python)', 'Dashboard Development'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
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
