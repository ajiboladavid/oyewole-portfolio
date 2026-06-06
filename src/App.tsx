import { Analytics } from '@vercel/analytics/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider } from './context/ThemeContext';
import { ResearchPage } from './pages/ResearchPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollToTop />
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:id" element={<CaseStudyPage />} />
        </Routes>
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;