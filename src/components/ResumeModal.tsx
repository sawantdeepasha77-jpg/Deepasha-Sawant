import React from 'react';
import { X, Download, Mail, Linkedin, FileText, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, caseStudiesData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Create a Blob with a clean formatted text/markdown version of the CV for immediate download
    const cvText = `
===================================================================
DEEPASHA SAWANT
DIGITAL MARKETER | BRAND MANAGEMENT | SOCIAL MEDIA
Email: ${personalInfo.contact.email}
LinkedIn: ${personalInfo.contact.linkedin}
Location: ${personalInfo.contact.location}
===================================================================

SUMMARY:
${personalInfo.shortBio}

EDUCATION:
${personalInfo.education.degree} (${personalInfo.education.period})
${personalInfo.education.institution} — ${personalInfo.education.affiliation}

EXPERIENCE:
1. Social Media Marketing Intern | Maitra Entertainment (March 2026 – July 2026)
   - Social media strategy, publishing calendars, Meta Ads, influencer marketing.
   - Achievement: Shortlisted 80+ influencers within 24 hours for a government project.

2. Social Media Strategist | Real Estate Accounts (2 Brands)
   - Managed content strategy, scheduling, lead generation funnels, and metrics tracking.

3. Social Media Marketing Intern | Restaurant Accounts (3 Ratnagiri Brands)
   - Formulated fun content pillars (Behind The Counter, Weekend Cravings) to elevate local brand engagement.

4. Brand Strategy Consultant | Steelman Furniture
   - Formulated 'Refresh Your Cupboard' refurbishment strategy to overcome pricing barriers.

CERTIFICATIONS:
${certificationsData.map(c => `- ${c.title} (${c.institution})`).join('\n')}

SKILLS:
- Brand Management & Marketing Strategy
- Social Media Strategy & Content Calendars
- Influencer Marketing & Meta Ads
- Canva, Excel, Meta Business Suite, ChatGPT, Claude, Gemini
===================================================================
    `;

    const blob = new Blob([cvText.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Deepasha_Sawant_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1412]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] text-[#1A1412] border-2 border-[#58111A] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#58111A] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#3D0B12]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C88E8B]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              RESUME PREVIEW &bull; DEEPASHA SAWANT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#FAF7F2]/10 rounded text-[#FAF7F2] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-sm leading-relaxed">
          
          {/* Header Info */}
          <div className="border-b border-[#58111A]/20 pb-6">
            <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold text-[#58111A] uppercase tracking-tight">
              DEEPASHA SAWANT
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#58111A]/80 font-bold mt-1">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs font-sans-editorial text-[#1A1412]/80">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-1.5 hover:text-[#58111A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#58111A]" />
                {personalInfo.contact.email}
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#58111A] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#58111A]" />
                LinkedIn Profile
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#58111A]" />
                {personalInfo.contact.location}
              </span>
            </div>
          </div>

          {/* Profile Statement */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-[#58111A] mb-2">
              PROFESSIONAL POSITIONING
            </h3>
            <p className="text-[#1A1412]/90 leading-relaxed font-sans-editorial">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-[#58111A] mb-4">
              PRACTICAL MARKETING EXPERIENCE
            </h3>
            <div className="space-y-5">
              
              <div className="border-l-2 border-[#58111A] pl-4 space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="font-bold text-base text-[#58111A]">Social Media Marketing Intern</h4>
                  <span className="text-xs font-mono text-[#58111A]/80">March 2026 – July 2026</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">Maitra Entertainment</p>
                <ul className="list-disc list-inside text-xs text-[#1A1412]/80 space-y-1 mt-1">
                  <li>Shortlisted 80+ influencers within 24 hours for a time-critical government project.</li>
                  <li>Drafted social media calendars, handled Meta Ads, and published content across channels.</li>
                </ul>
              </div>

              <div className="border-l-2 border-[#58111A]/40 pl-4 space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="font-bold text-base text-[#58111A]">Social Media Strategist</h4>
                  <span className="text-xs font-mono text-[#58111A]/80">Account Management</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">Real Estate Accounts (2 Brands)</p>
                <p className="text-xs text-[#1A1412]/80">
                  Managed social media strategy, content planning, lead generation forms, and weekly performance metrics.
                </p>
              </div>

              <div className="border-l-2 border-[#58111A]/40 pl-4 space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="font-bold text-base text-[#58111A]">Social Media Marketing Intern</h4>
                  <span className="text-xs font-mono text-[#58111A]/80">Internship Period</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">Ratnagiri Restaurants (3 Accounts)</p>
                <p className="text-xs text-[#1A1412]/80">
                  Formulated relatable food content pillars (Behind-The-Scenes, Local Cravings) to boost community engagement.
                </p>
              </div>

              <div className="border-l-2 border-[#58111A]/40 pl-4 space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="font-bold text-base text-[#58111A]">Campaign Strategist</h4>
                  <span className="text-xs font-mono text-[#58111A]/80">Strategy Concept</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">Steelman Furniture</p>
                <p className="text-xs text-[#1A1412]/80">
                  Devised 'Refresh Your Cupboard' repainting service concept to turn high product price barriers into accessible service sales.
                </p>
              </div>

            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-[#58111A] mb-3">
              EDUCATION
            </h3>
            <div className="border-l-2 border-[#C88E8B] pl-4">
              <h4 className="font-bold text-base text-[#58111A]">{personalInfo.education.degree}</h4>
              <p className="text-xs text-[#1A1412]/80 font-medium">
                {personalInfo.education.institution} ({personalInfo.education.affiliation})
              </p>
              <span className="text-xs font-mono text-[#58111A]/70">{personalInfo.education.period}</span>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold text-[#58111A] mb-3">
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((c, i) => (
                <div key={i} className="bg-[#58111A]/5 p-3 border border-[#58111A]/10">
                  <p className="font-bold text-[#58111A]">{c.title}</p>
                  <p className="text-[#1A1412]/70 text-[11px]">{c.institution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTA Bar */}
        <div className="bg-[#FAF7F2] border-t border-[#58111A]/20 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#1A1412]/70 font-sans-editorial">
            Need a PDF copy for your recruiting workflow? Click to generate and download instantly.
          </p>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-6 py-3 bg-[#58111A] hover:bg-[#3D0B12] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shrink-0"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#C88E8B]" />
                <span>Downloaded Resume!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
