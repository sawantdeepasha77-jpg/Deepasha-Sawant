import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Linkedin, Download, ArrowUp, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#58111A] text-[#FAF7F2] pt-20 pb-12 border-t-2 border-[#3D0B12] relative overflow-hidden">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none editorial-grid-pattern"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grand Editorial CTA */}
        <div className="border-b border-[#FAF7F2]/15 pb-16 mb-16">
          <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>LET'S TALK BRANDS &bull; INTERNSHIPS &bull; COLLABORATIONS</span>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.05] max-w-4xl">
            LET'S BUILD SOMETHING PEOPLE <span className="italic font-serif-display text-[#C88E8B] font-normal">REMEMBER.</span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-[#FAF7F2]/80 max-w-2xl font-sans-editorial leading-relaxed">
            Open for Brand Management &amp; Marketing Strategy internships, digital marketing roles, social media strategy, and select freelance brand opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="px-6 py-3.5 bg-[#FAF7F2] text-[#58111A] text-xs font-bold uppercase tracking-widest hover:bg-[#C88E8B] hover:text-[#58111A] transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL DEEPASHA</span>
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-[#FAF7F2]/40 text-[#FAF7F2] text-xs font-bold uppercase tracking-widest hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="px-6 py-3.5 border border-[#C88E8B] text-[#C88E8B] text-xs font-bold uppercase tracking-widest hover:bg-[#C88E8B] hover:text-[#58111A] transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#FAF7F2]/10 text-xs font-sans-editorial">
          
          {/* Col 1: Identity */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-serif-editorial text-2xl font-bold tracking-tight text-[#FAF7F2]">
              {personalInfo.name}
            </h3>
            <p className="text-[#FAF7F2]/70 leading-relaxed">
              Brand Management + Marketing Strategy.
              Building meaningful narrative connections across digital platforms.
            </p>
          </div>

          {/* Col 2: Directory */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#C88E8B]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-[#FAF7F2]/80 font-medium">
              <li><NavLink to="/" className="hover:text-[#C88E8B] transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#C88E8B] transition-colors">About Deepasha</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-[#C88E8B] transition-colors">Marketing Case Studies</NavLink></li>
              <li><NavLink to="/skills" className="hover:text-[#C88E8B] transition-colors">Strategic Skills &amp; Tools</NavLink></li>
              <li><NavLink to="/experience" className="hover:text-[#C88E8B] transition-colors">Practical Experience</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#C88E8B] transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Case Studies */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#C88E8B]">
              FEATURED CASE STUDIES
            </h4>
            <ul className="space-y-2 text-[#FAF7F2]/80 font-medium">
              <li><NavLink to="/case-studies/maitra-entertainment" className="hover:text-[#C88E8B] transition-colors">01. Maitra Entertainment</NavLink></li>
              <li><NavLink to="/case-studies/steelman" className="hover:text-[#C88E8B] transition-colors">02. Steelman Furniture</NavLink></li>
              <li><NavLink to="/case-studies/real-estate" className="hover:text-[#C88E8B] transition-colors">03. Real Estate Lead Gen</NavLink></li>
              <li><NavLink to="/case-studies/restaurants" className="hover:text-[#C88E8B] transition-colors">04. Restaurant Marketing</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Target Opportunities */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#C88E8B]">
              OPEN TO
            </h4>
            <ul className="space-y-1.5 text-[#FAF7F2]/70 text-[11px]">
              <li>&bull; Marketing Internships</li>
              <li>&bull; Brand Management Roles</li>
              <li>&bull; Digital Strategy Positions</li>
              <li>&bull; Social Media Management</li>
              <li>&bull; Freelance Brand Strategy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 font-sans-editorial gap-4">
          <p>
            &copy; {new Date().getFullYear()} DEEPASHA SAWANT. Designed with editorial strategy &amp; precision.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAF7F2] transition-colors uppercase tracking-widest font-mono text-[10px] bg-[#3D0B12] px-3 py-1.5 border border-[#FAF7F2]/20"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
