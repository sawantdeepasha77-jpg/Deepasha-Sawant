import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, Mail, Linkedin, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData, certificationsData, skillCategoriesData } from '../data/portfolioData';

interface ResumePageProps {
  onOpenResumeModal: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onOpenResumeModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger modal download logic as well
    onOpenResumeModal();
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#58111A]/20 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#58111A]">
              DEEPASHA'S <span className="italic font-serif-display text-[#1A1412] font-normal">RESUME.</span>
            </h1>
          </div>

          <button
            onClick={handleDownload}
            className="px-6 py-3.5 bg-[#58111A] text-[#FAF7F2] hover:bg-[#3D0B12] text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shrink-0"
          >
            {downloaded ? <CheckCircle2 className="w-4 h-4 text-[#C88E8B]" /> : <Download className="w-4 h-4" />}
            <span>DOWNLOAD RESUME PDF</span>
          </button>
        </div>

        {/* Formatted Resume Preview Document */}
        <div className="bg-[#FFFDF9] border-2 border-[#58111A] p-8 md:p-12 shadow-xl space-y-10">
          
          {/* Header Block */}
          <div className="border-b border-[#58111A]/20 pb-8">
            <h2 className="font-serif-editorial text-4xl font-bold text-[#58111A] tracking-tight">
              DEEPASHA SAWANT
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#58111A] font-bold mt-1">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs font-sans-editorial text-[#1A1412]/80">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-1.5 font-medium hover:text-[#58111A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#58111A]" />
                {personalInfo.contact.email}
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium hover:text-[#58111A] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#58111A]" />
                LinkedIn
              </a>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#58111A]" />
                {personalInfo.contact.location}
              </span>
            </div>
          </div>

          {/* Core positioning */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-sm text-[#1A1412]/85 font-sans-editorial leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              EDUCATION
            </h3>
            <div className="border-l-2 border-[#58111A] pl-4 space-y-1">
              <div className="flex justify-between items-baseline flex-wrap">
                <h4 className="font-bold text-base text-[#58111A]">{personalInfo.education.degree}</h4>
                <span className="text-xs font-mono text-[#58111A]/80">{personalInfo.education.period}</span>
              </div>
              <p className="text-xs font-semibold text-[#1A1412]">
                {personalInfo.education.institution} ({personalInfo.education.affiliation})
              </p>
              <p className="text-xs text-[#1A1412]/75 font-sans-editorial">
                {personalInfo.education.summary}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              PRACTICAL MARKETING EXPERIENCE
            </h3>

            {experienceData.map((exp) => (
              <div key={exp.id} className="border-l-2 border-[#58111A]/40 pl-4 space-y-1">
                <div className="flex justify-between items-baseline flex-wrap">
                  <h4 className="font-bold text-base text-[#58111A]">{exp.role}</h4>
                  <span className="text-xs font-mono text-[#58111A]/80">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">{exp.company} &bull; {exp.location}</p>
                {exp.keyHighlight && (
                  <p className="text-xs font-bold text-[#58111A] bg-[#58111A]/5 p-2 mt-1">
                    Key Highlight: {exp.keyHighlight}
                  </p>
                )}
                <ul className="list-disc list-inside text-xs text-[#1A1412]/80 space-y-1 pt-1 font-sans-editorial">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills & Tools */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              SKILLS &amp; TOOLS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans-editorial">
              {skillCategoriesData.map((cat) => (
                <div key={cat.title} className="bg-[#FAF7F2] p-4 border border-[#58111A]/10 space-y-1">
                  <h4 className="font-bold text-[#58111A]">{cat.title}</h4>
                  <p className="text-[#1A1412]/80">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert, i) => (
                <div key={i} className="bg-[#FAF7F2] p-3 border border-[#58111A]/10">
                  <p className="font-bold text-[#58111A]">{cert.title}</p>
                  <p className="text-[#1A1412]/70 text-[11px]">{cert.institution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-[#58111A] text-[#FAF7F2] hover:bg-[#3D0B12] text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-xl"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME FORMAT</span>
          </button>
        </div>

      </div>
    </div>
  );
};
