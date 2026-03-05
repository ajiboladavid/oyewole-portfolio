import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in">

          {/* Profile Photo - Left Side */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex-shrink-0 w-36 md:w-48 h-48 md:h-60 rounded-lg overflow-hidden border-2 border-teal-400 dark:border-teal-600 shadow-lg bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Oyewole Ajibola"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML =
                    '<span class="text-5xl text-teal-500">OA</span>';
                }}
              />
            </div>
            <p className="text-lg font-medium text-teal-600 dark:text-teal-400 text-center">
              RN. RM. BNSc.
            </p>
          </div>

          {/* Right Side Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-300 leading-tight">
              OYEWOLE AJIBOLA
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-base md:text-xl text-teal-600 dark:text-teal-400 font-medium">
              <span>Registered Nurse</span>
              <span className="text-gray-400">|</span>
              <span>Research Analyst</span>
              <span className="text-gray-400">|</span>
              <span>ML Developer</span>
            </div>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Building at the intersection of healthcare and data.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="mailto:oyewole8009@gmail.com"
                className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/ajiboladavid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/oyewole-ajibola-b459113a0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}