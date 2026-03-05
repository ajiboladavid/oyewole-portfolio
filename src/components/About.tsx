export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I work at the intersection of clinical practice, research analytics, and health technology,
            combining frontline healthcare experience with data-driven problem solving.
          </p>

          <p>
            My background in nursing informs my analytical work, allowing me to approach healthcare data
            with practical clinical context rather than purely technical abstraction.
          </p>

          <p>
            As a research analyst, I use SPSS and Excel to analyze and interprete 
            healthcare research data. My clinical foundation strengthens the use of analytical 
            frameworks aligned with real-world care challenges.
          </p>

          <p>
            In machine learning, my work centers on applied modeling and practical healthcare applications. 
            I develop and implement supervised learning systems, translating machine learning techniques 
            into usable decision-support tools. Projects include applications such as the 
            Chronic Kidney Disease Prediction system.
          </p>

          <p>
            I am currently expanding into SQL and dashboard development, building systems that make
            healthcare data more accessible, interpretable, and actionable.
          </p>
        </div>
      </div>
    </section >
  );
}
