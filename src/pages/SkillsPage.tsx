import React from 'react';
import { Sparkles, Award, CheckCircle2, Wrench, Brain, Target, Cpu } from 'lucide-react';
import { skillCategoriesData, certificationsData } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-[#58111A]/20 pb-12 mb-16">
          <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>STRATEGIC CAPABILITIES &amp; TOOLSET</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#58111A] leading-tight">
            SKILLS &amp; <span className="italic font-serif-display text-[#1A1412] font-normal">COMPETENCIES.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-[#1A1412]/80 max-w-3xl font-sans-editorial leading-relaxed">
            A balanced marketing toolkit bridging brand management strategy, social media execution, performance analytics, and modern AI tools.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-16">
          {skillCategoriesData.map((category, idx) => (
            <div key={category.title} className="bg-[#FFFDF9] border-2 border-[#58111A]/20 p-8 md:p-10 space-y-6">
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#58111A]/15 pb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#58111A] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">
                    {category.title}
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#58111A]/70 uppercase font-semibold">
                  {category.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-[#FAF7F2] border border-[#58111A]/15 hover:border-[#58111A] transition-all duration-200 space-y-2 group"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base text-[#58111A] group-hover:text-[#3D0B12] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#58111A]/10 text-[#58111A] px-2 py-0.5">
                        {skill.level}
                      </span>
                    </div>

                    {skill.description && (
                      <p className="text-xs text-[#1A1412]/75 font-sans-editorial leading-relaxed pt-1">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Certifications & Courses Section */}
        <div className="mt-20 pt-16 border-t-2 border-[#58111A]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
              CREDENTIALS &amp; CONTINUOUS LEARNING
            </span>
            <h2 className="font-serif-editorial text-4xl font-bold text-[#58111A]">
              CERTIFICATIONS &amp; COURSES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="bg-[#FFFDF9] border-2 border-[#58111A]/20 p-6 space-y-3 hover:border-[#58111A] transition-colors shadow-sm"
              >
                <div className="w-10 h-10 bg-[#58111A] text-[#FAF7F2] flex items-center justify-center rounded-none">
                  <Award className="w-5 h-5 text-[#C88E8B]" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#58111A]/70 block">
                  {cert.type}
                </span>
                <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#1A1412]/80 font-sans-editorial border-t border-[#58111A]/10 pt-2">
                  {cert.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
