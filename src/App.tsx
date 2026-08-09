import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

// Helper component to scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1412] font-sans-editorial">
        
        {/* Navigation Header */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/resume" element={<ResumePage onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="/contact" element={<ContactPage onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Global Interactive Resume Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
