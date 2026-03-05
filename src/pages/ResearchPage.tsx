import { Link, useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 'maternal-birth-complications',
    shortTitle: 'Maternal Birth Complications Study',
    summary: 'Examining whether previous obstetric complications predict current reproductive health status among women of childbearing age.',
    methods: ['Binary Logistic Regression', 'Chi-Square Analysis', 'Bivariate Analysis'],
    sample: 'n = 95 | State General Hospital',
  },
  {
    id: 'mental-health-stigmatization',
    shortTitle: 'Mental Health Stigmatization Study',
    summary: 'Assessing whether care provider attitudes and mental health literacy correlate with stigmatization in a psychiatric facility.',
    methods: ['Linear Regression', 'Spearman Correlation', 'ANOVA'],
    sample: 'n = 109 | Federal Neuropsychiatric Hospital',
  },
  {
    id: 'ai-clinical-reasoning',
    shortTitle: 'AI & Clinical Reasoning Study',
    summary: 'Investigating whether AI tool usage is associated with clinical reasoning competence among nursing students.',
    methods: ['Spearman Correlation', 'Hypothesis Testing'],
    sample: 'n = 135 | University Setting',
  },
  {
    id: 'kangaroo-mother-care',
    shortTitle: 'Kangaroo Mother Care Study',
    summary: 'Assessing whether maternal knowledge of KMC significantly influences attitude toward its adoption among prenatal women.',
    methods: ['Chi-Square Analysis', 'Variable Categorization'],
    sample: 'n = 145 | Secondary Healthcare Facility',
  },
  {
    id: 'mobile-health-applications',
    shortTitle: 'Mobile Health Applications Study',
    summary: 'Evaluating whether mHealth application usage significantly improves self-care practices among undergraduate students.',
    methods: ['Mann-Whitney U Test', 'Group Comparison', 'Hypothesis Testing'],
    sample: 'n = 416 | University Setting',
  },
];

export function ResearchPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="text-teal-600 dark:text-teal-400 hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Portfolio
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Healthcare Research & Analytical Case Studies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Applied statistical research translating data into actionable clinical insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-transparent hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {study.shortTitle}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {study.sample}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {study.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.methods.map((method, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/research/${study.id}`}
                className="mt-2 text-teal-600 dark:text-teal-400 font-medium text-sm hover:underline text-left inline-block"
              >
                View Case Study →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}