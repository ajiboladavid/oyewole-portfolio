import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Open to health tech contracts
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Interested in collaborating on research analytics, ML development, or clinical informatics projects?
          <br />
          Let's discuss how my expertise can support your health tech initiatives.
        </p>

        <div className="flex justify-center gap-4">
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
    </section>
  );
}