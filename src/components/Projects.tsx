import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-400 dark:hover:border-teal-600">
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Chronic Kidney Disease Prediction System
                </h3>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-semibold rounded-full">
                  Featured
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ML-based clinical support system designed to assist early identification
                of Chronic Kidney Disease risk. The system applies supervised learning techniques to patient health
                parameters, translating predictive modeling into an accessible clinical tool.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'Numpy', 'Scikit-learn', 'Random Forest', 'Flask'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/ajiboladavid/ckd-prediction-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-400 dark:hover:border-teal-600">
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Healthcare Research and Statistical Analysis
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
                  Featured
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive statistical analysis and research methodology work across healthcare domains.
                Specializing in SPSS-based analytics, study design, and evidence synthesis for clinical research.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Core Competencies:</h4>
                <div className="flex flex-wrap gap-2">
                  {['SPSS', 'Hypothesis Testing', 'Research Design', 'Data Interpretation'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/research"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={18} />
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
