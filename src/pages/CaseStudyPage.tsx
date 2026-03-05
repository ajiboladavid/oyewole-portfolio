import { useParams, useNavigate } from 'react-router-dom';

const caseStudyData: Record<string, {
  title: string;
  overview: string;
  problem: string;
  methodology: string;
  findings: string;
  implications: string;
  role: string;
  tools: { name: string; techniques: string[] }[];
  sample: string;
  design: string;
  tableImage: string;
}> = {
  'maternal-birth-complications': {
    title: 'Association Between Previous Maternal Birth Complications and Current Reproductive Health Status',
    sample: 'n = 95 | State General Hospital',
    design: 'Descriptive Cross-Sectional Analytical Study',
    tableImage: '/tables/maternal-birth-complications.png',
    overview: 'This study examined whether previous maternal birth complications are associated with current reproductive health status among women of childbearing age. The objective was to identify significant predictors and determine the independent influence of sociodemographic factors using multivariate statistical modeling.',
    problem: 'Maternal birth complications such as prolonged labour, postpartum hemorrhage, and eclampsia remain major contributors to poor reproductive health outcomes in low- and middle-income settings. However, limited evidence exists on how previous obstetric complications influence women\'s current reproductive health status and which sociodemographic factors independently predict these complications. Understanding these relationships is critical for targeted risk screening and preventive interventions.',
    methodology: 'A descriptive cross-sectional analytical design was used involving 95 women recruited from a secondary healthcare facility. Statistical analysis was conducted using SPSS and included bivariate analysis, chi-square test of independence, and binary logistic regression modeling. Logistic regression was applied to identify independent predictors while controlling for potential confounders. Odds ratios with 95% confidence intervals were reported.',
    findings: 'Among all previous birth complications examined, only prolonged labour showed a significant association with current reproductive health status. Women with a history of prolonged labour were more likely to report poorer reproductive health outcomes. Other complications including postpartum hemorrhage, eclampsia, obstructed labour, and cesarean section were not significantly associated.\n\nMultivariate logistic regression identified three key independent predictors. Income level significantly predicted postpartum hemorrhage occurrence. Parity was the strongest predictor of prolonged labour, with higher parity significantly increasing its likelihood. Employment status independently predicted cesarean section delivery. Regression models demonstrated moderate explanatory power (25–33%) with prediction accuracies above 70%.',
    implications: 'Women with a history of prolonged labour require closer reproductive health monitoring. Socioeconomic vulnerability through low income and unemployment may increase obstetric risk exposure. High-parity women should receive enhanced antenatal surveillance. These results support the need for risk-stratified antenatal screening protocols and targeted maternal health interventions in secondary healthcare settings.',
    role: 'Performed data coding and cleaning, variable recategorization, assumption testing, chi-square and logistic regression modeling, interpretation of multivariate outputs, and full statistical reporting for Chapters 4 and 5.',
    tools: [
      {
        name: 'SPSS',
        techniques: ['Chi-square test of independence', 'Binary logistic regression', 'Odds ratio interpretation', 'Multivariate adjustment', 'Statistical reporting (APA format)'],
      },
    ],
  },

  'mental-health-stigmatization': {
    title: 'Mental Health Literacy and Care Providers\' Attitudes as Correlates of Stigmatization in a Federal Neuropsychiatric Hospital',
    sample: 'n = 109 | Federal Neuropsychiatric Hospital',
    design: 'Descriptive Cross-Sectional Correlational Study',
    tableImage: '/tables/mental-health-stigmatization.png',
    overview: 'A descriptive cross-sectional correlational study conducted among 109 care providers in a Federal Neuropsychiatric Hospital to examine whether mental health literacy and provider attitudes are associated with stigmatization of patients with mental illness.',
    problem: 'Stigmatization within mental health facilities undermines therapeutic relationships, reduces care quality, and negatively affects patient recovery outcomes. While public stigma is widely studied, less attention is given to stigma among healthcare providers themselves. This study investigated whether care providers\' attitudes and mental health literacy significantly relate to stigmatization levels within a specialized psychiatric setting.',
    methodology: 'A descriptive cross-sectional correlational design was used with a sample size of 109 care providers. Statistical analysis included Spearman\'s Rank-Order Correlation, Linear Regression Analysis, and ANOVA for model significance testing. Data were coded, cleaned, and analyzed using SPSS, with Excel used for preliminary structuring and validation.',
    findings: 'A moderate negative correlation was found between provider attitudes and stigmatization (r = –0.360, p < 0.001). More positive attitudes were associated with lower levels of stigma. Regression analysis showed that attitudes explained 12.9% of the variance in stigmatization (R² = 0.129). The regression model was statistically significant (F = 15.890, p < 0.001). Attitudes significantly predicted stigmatization levels (β = –0.360, t = –3.986, p < 0.001). The null hypothesis was rejected.',
    implications: 'Attitude-focused interventions such as anti-stigma workshops, empathy training, and structured reflective practice could meaningfully reduce institutional stigma. Since attitudes explain a measurable proportion of stigma (12.9%), targeted professional development programs may produce observable behavioral change. Hospital management can integrate attitude assessment into staff appraisal and training frameworks. Findings support embedding stigma-reduction modules in continuing professional education for psychiatric care providers.',
    role: 'Designed the statistical analysis framework, performed data coding and cleaning, conducted correlation and regression analyses, interpreted statistical outputs, and translated statistical findings into actionable healthcare insights.',
    tools: [
      {
        name: 'SPSS',
        techniques: ['Spearman\'s Rank-Order Correlation', 'Linear Regression Modeling', 'ANOVA for model significance testing', 'Hypothesis testing framework'],
      },
      {
        name: 'Microsoft Excel',
        techniques: ['Data structuring', 'Preliminary validation'],
      },
    ],
  },

  'ai-clinical-reasoning': {
    title: 'Influence of Artificial Intelligence Tools on Clinical Reasoning Skills Among Nursing Students',
    sample: 'n = 135 | University Setting',
    design: 'Descriptive Cross-Sectional Correlational Study',
    tableImage: '/tables/ai-clinical-reasoning.png',
    overview: 'A descriptive cross-sectional correlational study conducted among 135 nursing students in a university setting to examine whether artificial intelligence (AI) tool usage is associated with clinical reasoning competence.',
    problem: 'AI tools are increasingly integrated into nursing education. However, concerns remain regarding whether reliance on AI enhances, undermines, or has no measurable effect on students\' clinical reasoning skills — a core competency in safe patient care. This study assessed whether AI tool usage significantly relates to clinical reasoning competence among undergraduate nursing students.',
    methodology: 'A descriptive cross-sectional correlational design was used with a sample size of 135 nursing students. The independent variable was AI tool usage and the dependent variable was clinical reasoning skills. Statistical analysis included Spearman\'s Rank-Order Correlation as the non-parametric association test with hypothesis testing at 0.05 significance level. Data were coded, cleaned, and analyzed using SPSS, with Excel used for preliminary data organization and validation.',
    findings: 'A weak positive correlation was observed between AI tool usage and clinical reasoning competence (ρ = 0.130). The relationship was not statistically significant (p = 0.133). The null hypothesis was accepted: AI tool usage was not significantly associated with clinical reasoning skills in this sample. While AI exposure showed a slight positive trend, it did not demonstrate measurable influence on students\' reasoning competence within this study context.',
    implications: 'AI usage alone may not automatically improve clinical reasoning; structured integration into curricula may be necessary. Institutions should focus on guided AI use, emphasizing reflective reasoning rather than passive dependency. Curriculum developers may consider embedding AI within case-based simulations where reasoning processes are explicitly assessed. The findings reduce concern that AI exposure inherently weakens reasoning competence, as no harmful association was detected. The study shifts the conversation from "Is AI harmful?" to "Under what conditions can AI meaningfully support reasoning development?"',
    role: 'Structured the statistical analysis plan, performed data coding and cleaning, conducted Spearman correlation analysis, interpreted statistical findings, translated statistical findings into actionable healthcare insights.',
    tools: [
      {
        name: 'SPSS',
        techniques: ['Spearman\'s Rank-Order Correlation', 'Hypothesis testing framework', 'Data cleaning and variable coding'],
      },
      {
        name: 'Microsoft Excel',
        techniques: ['Data entry validation', 'Data structuring'],
      },
    ],
  },

  'kangaroo-mother-care': {
    title: 'Knowledge and Attitude of Prenatal Women Towards Kangaroo Mother Care (KMC)',
    sample: 'n = 145 | Secondary Healthcare Facility',
    design: 'Descriptive Cross-Sectional Study',
    tableImage: '/tables/kangaroo-mother-care.png',
    overview: 'A descriptive cross-sectional study conducted among 145 prenatal women attending antenatal care in a Secondary Healthcare Facility to assess their knowledge and attitudes toward Kangaroo Mother Care (KMC).',
    problem: 'Kangaroo Mother Care is an evidence-based, low-cost intervention that improves neonatal survival, particularly for low-birth-weight infants. However, successful implementation depends largely on maternal knowledge and acceptance during the prenatal period. This study examined whether maternal knowledge significantly influences attitude toward KMC.',
    methodology: 'A descriptive cross-sectional design was used with a sample size of 145 prenatal women. The independent variable was knowledge of KMC and the dependent variable was attitude toward KMC. Statistical analysis included Chi-square test of association with significance level set at 0.05. Data were coded, categorized into knowledge and attitude levels, cleaned, and analyzed using SPSS. Excel supported preliminary data organization and validation.',
    findings: 'A statistically significant association was found between knowledge and attitude toward KMC (χ² = 20.904, p < 0.001). The null hypothesis was rejected. Prenatal women with higher knowledge of KMC were significantly more likely to demonstrate positive attitudes toward its practice. This suggests knowledge is a strong determinant of attitudinal disposition toward KMC adoption.',
    implications: 'Antenatal education programs should prioritize structured KMC awareness modules, as improving knowledge is likely to enhance acceptance. Secondary healthcare facilities can strengthen neonatal outcomes by integrating KMC education into routine ANC health talks. Policy-level maternal health strategies should focus on early prenatal sensitization rather than postpartum-only counseling. Since knowledge significantly shapes attitude, targeted health communication campaigns could increase real-world KMC uptake and improve neonatal survival rates.',
    role: 'Designed methodology and statistical framework. Conducted data coding, categorization, and cleaning. Performed Chi-square analysis. Interpreted findings and developed evidence-based recommendations.',
    tools: [
      {
        name: 'SPSS',
        techniques: ['Chi-square test of association', 'Variable categorization and recoding', 'Hypothesis testing framework'],
      },
      {
        name: 'Microsoft Excel',
        techniques: ['Data entry validation', 'Data structuring'],
      },
    ],
  },

  'mobile-health-applications': {
    title: 'Awareness, Usage, Influencing Factors, and Perceived Effectiveness of Mobile Health Applications Among Undergraduate Students',
    sample: 'n = 416 | University Setting',
    design: 'Descriptive Cross-Sectional Study',
    tableImage: '/tables/mobile-health-applications.png',
    overview: 'A descriptive cross-sectional study conducted among 416 undergraduate students at a University to assess awareness, usage patterns, influencing factors, and perceived effectiveness of mobile health (mHealth) applications, with specific emphasis on their impact on self-care practices.',
    problem: 'Mobile health applications are increasingly promoted as tools for improving self-care behaviors among young adults. However, empirical evidence on whether actual usage translates into measurable self-care improvement in university populations remains limited. This study evaluated whether mHealth application usage significantly improves self-care practices among undergraduate students.',
    methodology: 'A descriptive cross-sectional design was used with a sample size of 416 students. The independent variable was mHealth application usage (user vs. non-user) and the dependent variable was self-care improvement score. Statistical analysis included the Mann-Whitney U Test as the non-parametric group comparison method with significance level set at 0.05. Data were coded, cleaned, grouped, and analyzed using SPSS, with Excel supporting data validation and preliminary structuring.',
    findings: 'A statistically significant difference was observed between users and non-users of mHealth applications (U = 2,537.500, Z = –15.782, p < 0.001). The mean rank for users was 268.84, while non-users had a mean rank of 88.26. Students who used mobile health applications reported significantly greater improvements in self-care practices compared to non-users. The null hypothesis was rejected. mHealth application usage is significantly associated with improved self-care practices.',
    implications: 'Universities can integrate validated mHealth tools into student wellness programs to strengthen preventive health behaviors. Student affairs units may promote curated health apps as part of orientation or health awareness campaigns. The strong statistical separation between users and non-users suggests mHealth adoption could be leveraged as a low-cost behavioral intervention strategy. Policymakers in tertiary institutions may consider digital health literacy training to maximize responsible and effective app usage.',
    role: 'Structured the statistical analysis framework, performed data coding, cleaning, and grouping, conducted Mann-Whitney U analysis, interpreted statistical outputs, translated statistical findings into actionable healthcare insights. Translated statistical findings into institutional health strategy insights.',
    tools: [
      {
        name: 'SPSS',
        techniques: ['Mann-Whitney U Test', 'Variable recoding and grouping', 'Hypothesis testing framework'],
      },
      {
        name: 'Microsoft Excel',
        techniques: ['Data entry validation', 'Data structuring'],
      },
    ],
  },
};

const sectionKeys = [
  { key: 'overview', heading: 'Project Overview' },
  { key: 'problem', heading: 'The Problem' },
  { key: 'methodology', heading: 'Data & Methodology' },
  { key: 'findings', heading: 'Key Findings' },
  { key: 'implications', heading: 'Practical Implications' },
  { key: 'role', heading: 'My Role' },
];

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const study = id ? caseStudyData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-xl mb-4">Case study not found.</p>
          <button
            onClick={() => navigate('/research')}
            className="text-teal-600 dark:text-teal-400 hover:underline"
          >
            ← Back to Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate('/research')}
          className="text-teal-600 dark:text-teal-400 hover:underline text-sm mb-8 inline-block"
        >
          ← Back to Research
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full">
              {study.sample}
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {study.design}
            </span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">
              Statistical Analyst
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {sectionKeys.map(({ key, heading }) => (
            <div key={key} className="border-l-4 border-teal-400 dark:border-teal-600 pl-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {heading}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {study[key as keyof typeof study] as string}
              </p>

              {/* Results table image under Key Findings */}
              {key === 'findings' && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Inferential Statistics Output:
                  </p>
                  <img
                    src={study.tableImage}
                    alt="Inferential statistics results table"
                    className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md w-full"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Tools & Techniques - structured display */}
          <div className="border-l-4 border-teal-400 dark:border-teal-600 pl-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Techniques Used
            </h2>
            <div className="space-y-4">
              {study.tools.map((tool, idx) => (
                <div key={idx}>
                  <p className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-2">
                    {tool.name}
                  </p>
                  <ul className="space-y-1">
                    {tool.techniques.map((technique, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom back button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate('/research')}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            ← Back to Research
          </button>
        </div>

      </div>
    </div>
  );
}