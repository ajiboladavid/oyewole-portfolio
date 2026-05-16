import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Chronic Kidney Disease Prediction System',
    badge: 'ML · Healthcare',
    description:
      'ML-based clinical support system for early identification of CKD risk using supervised learning on patient health parameters.',
    tags: ['Pandas', 'Numpy', 'Scikit-learn', 'Random Forest', 'Flask'],
    links: [
      { label: 'Repository', href: 'https://github.com/ajiboladavid/ckd-prediction-api', icon: 'github', external: true },
      { label: 'Live Demo', href: 'https://ckdcheck.vercel.app', icon: 'external', external: true },
    ],
  },
  {
    title: 'Healthcare Research & Statistical Analysis',
    badge: 'Research',
    description:
      'SPSS-based statistical analysis and research methodology across healthcare domains — study design, hypothesis testing, evidence synthesis.',
    tags: ['SPSS', 'Hypothesis Testing', 'Research Design', 'Data Interpretation'],
    links: [
      { label: 'Case Studies', href: '/research', icon: 'external', external: false },
    ],
  },
  {
    title: 'Global Nursing Workforce Crisis Dashboard',
    badge: 'INW 2026',
    description:
      'Interactive dashboard visualizing the global nursing shortage using WHO data — country-level metrics, regional gaps, and projections.',
    tags: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'WHO Data'],
    links: [
      { label: 'Repository', href: 'https://github.com/ajiboladavid/nurses-workforce-dashboard', icon: 'github', external: true },
      { label: 'Scrollable', href: 'https://inw2026.streamlit.app', icon: 'external', external: true },
      { label: 'Compact', href: 'https://inw2026-dashboard.streamlit.app', icon: 'external', external: true },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-5" style={{ minWidth: 'max-content' }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-teal-900/40 bg-teal-950/20 hover:border-teal-700/60 transition-all duration-300 p-5"
                style={{ width: '320px' }}
              >
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                    <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-teal-950/50 text-teal-400 border border-teal-800/50 rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-teal-950/30 text-teal-300 border border-teal-800/40 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, i) =>
                    link.external ? (
                      
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-teal-700/50 text-teal-300 hover:bg-teal-900/30 transition-all duration-200"
                      >
                        {link.icon === 'github' ? <Github size={13} /> : <ExternalLink size={13} />}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={link.href}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-teal-700/50 text-teal-300 hover:bg-teal-900/30 transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}