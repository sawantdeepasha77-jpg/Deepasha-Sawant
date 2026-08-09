import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData';
import { EditorialPlaceholder } from '../components/EditorialPlaceholder';

export const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'BRAND STRATEGY',
    'SOCIAL MEDIA MARKETING',
    'LEAD GENERATION',
    'CONTENT STRATEGY',
    'CAMPAIGN STRATEGY'
  ];

  const filteredStudies = selectedCategory === 'ALL'
    ? caseStudiesData
    : caseStudiesData.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="border-b border-[#58111A]/20 pb-12 mb-12">
          <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>CREATIVE MARKETING &amp; STRATEGY PORTFOLIO</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#58111A] leading-tight">
            CASE <span className="italic font-serif-display text-[#1A1412] font-normal">STUDIES.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-[#1A1412]/80 max-w-3xl font-sans-editorial leading-relaxed">
            Real-world practical experience translating business challenges into clear brand stories, influencer campaigns, lead generation funnels, and relatable social content pillars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#58111A]/10 text-xs font-mono font-bold uppercase tracking-wider">
          <span className="text-[#58111A]/60 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> FILTER BY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#58111A] text-[#FAF7F2] border-[#58111A]'
                  : 'bg-[#FFFDF9] text-[#1A1412]/80 border-[#58111A]/20 hover:border-[#58111A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#FFFDF9] border-2 border-[#58111A]/20 p-8 flex flex-col justify-between hover:border-[#58111A] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                
                {/* Meta Header */}
                <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-[#58111A] border-b border-[#58111A]/15 pb-4">
                  <span className="bg-[#58111A] text-[#FAF7F2] px-2.5 py-1">
                    {study.number} &bull; {study.category}
                  </span>
                  <span className="text-[#1A1412]/60">{study.timeline}</span>
                </div>

                {/* Title */}
                <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold text-[#58111A] leading-tight">
                  {study.title}
                </h2>

                <p className="text-xs font-semibold uppercase font-mono tracking-wider text-[#1A1412]/70">
                  INDUSTRY: {study.clientOrIndustry} &bull; ROLE: {study.role}
                </p>

                <p className="text-sm text-[#1A1412]/80 font-sans-editorial leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Stat if present */}
                {study.keyStat && (
                  <div className="bg-[#58111A]/5 p-4 border-l-4 border-[#58111A]">
                    <span className="font-serif-editorial text-lg font-bold text-[#58111A] block">
                      {study.keyStat.value}
                    </span>
                    <span className="text-xs text-[#1A1412]/75 font-sans-editorial">
                      {study.keyStat.label}
                    </span>
                  </div>
                )}

                {/* First Placeholder Preview */}
                <EditorialPlaceholder
                  label={study.placeholders[0]?.label || "ADD CAMPAIGN VISUAL"}
                  type={study.placeholders[0]?.type || "campaign"}
                  aspectRatio="landscape"
                  defaultImage={study.placeholders[0]?.defaultImage}
                />

              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-[#58111A]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-[#1A1412]/60 font-semibold uppercase">
                  COMPLETE STRATEGY STORY
                </span>
                <NavLink
                  to={`/case-studies/${study.slug}`}
                  className="px-5 py-2.5 bg-[#58111A] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest hover:bg-[#3D0B12] transition-colors inline-flex items-center gap-2"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
