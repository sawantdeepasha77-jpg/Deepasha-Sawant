import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CASE STUDIES', path: '/case-studies' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'RESUME', path: '/resume' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#58111A]/15 py-3.5 shadow-sm'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Personal Brand Title */}
          <NavLink
            to="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Deepasha Sawant Homepage"
          >
            <span className="font-serif-editorial text-xl md:text-2xl font-bold tracking-tight text-[#58111A] group-hover:text-[#3D0B12] transition-colors leading-none">
              {personalInfo.name}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#1A1412]/60 font-sans-editorial font-semibold mt-1">
              Brands &bull; Strategy &bull; Impact
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase text-[#1A1412]/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 transition-colors hover:text-[#58111A] ${
                    isActive
                      ? 'text-[#58111A] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#58111A]'
                      : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#58111A] text-[#58111A] hover:bg-[#58111A] hover:text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#58111A] hover:bg-[#58111A]/10 rounded transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-[#58111A] text-[#FAF7F2] lg:hidden flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300">
          <div className="space-y-6">
            <p className="text-[10px] uppercase font-mono tracking-widest text-[#C88E8B] border-b border-[#3D0B12] pb-3">
              NAVIGATION DIRECTORY
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-serif-editorial text-3xl sm:text-4xl transition-all flex items-center justify-between ${
                      isActive ? 'text-[#C88E8B] font-bold italic' : 'text-[#FAF7F2] hover:text-[#C88E8B]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono opacity-50">0{index + 1}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#3D0B12] pt-6 space-y-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-3.5 bg-[#FAF7F2] text-[#58111A] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F2E3E2] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-sans-editorial text-[#FAF7F2]/70 pt-2">
              <span>Deepasha Sawant &copy; 2026</span>
              <span>Brand Management &bull; Strategy</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
