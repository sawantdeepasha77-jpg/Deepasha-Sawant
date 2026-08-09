import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Calendar, Building2, Award, Briefcase, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="border-b border-[#58111A]/20 pb-12 mb-16">
          <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>PRACTICAL MARKETING CAREER TIMELINE</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#58111A] leading-tight">
            PRACTICAL <span className="italic font-serif-display text-[#1A1412] font-normal">EXPERIENCE.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-[#1A1412]/80 max-w-3xl font-sans-editorial leading-relaxed">
            Proven execution across entertainment, real estate, hospitality, and consumer furniture brands. Demonstrating strategic versatility under dynamic agency conditions.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l-2 border-[#58111A] ml-4 md:ml-8 pl-6 md:pl-12 space-y-16">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-[#58111A] border-4 border-[#FAF7F2] group-hover:bg-[#C88E8B] transition-colors"></div>

              <div className="bg-[#FFFDF9] border-2 border-[#58111A]/20 p-8 hover:border-[#58111A] transition-all duration-300 shadow-sm hover:shadow-md space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#58111A]/15 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-1">
                      0{idx + 1} &bull; {exp.category}
                    </span>
                    <h2 className="font-serif-editorial text-2xl md:text-3xl font-bold text-[#58111A]">
                      {exp.role}
                    </h2>
                    <p className="text-sm font-semibold text-[#1A1412] font-sans-editorial">
                      {exp.company} ({exp.location})
                    </p>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-widest bg-[#58111A] text-[#FAF7F2] px-3 py-1">
                    {exp.period}
                  </span>
                </div>

                {/* Key Highlight Banner if present */}
                {exp.keyHighlight && (
                  <div className="bg-[#58111A]/5 p-4 border-l-4 border-[#58111A]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#58111A] block mb-1">
                      KEY CONCRETE HIGHLIGHT
                    </span>
                    <p className="font-serif-editorial text-lg font-bold text-[#58111A]">
                      {exp.keyHighlight}
                    </p>
                  </div>
                )}

                <p className="text-sm text-[#1A1412]/80 font-sans-editorial leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#58111A] mb-2">
                    CORE RESPONSIBILITIES:
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-[#1A1412]/80 font-sans-editorial">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Link if available */}
                {exp.caseStudySlug && (
                  <div className="pt-4 border-t border-[#58111A]/10 flex justify-end">
                    <NavLink
                      to={`/case-studies/${exp.caseStudySlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#58111A] hover:text-[#3D0B12] transition-colors"
                    >
                      <span>VIEW DETAILED CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NavLink>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
