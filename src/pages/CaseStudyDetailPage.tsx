import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Building2, User, Calendar, Target, Lightbulb, Zap, Award } from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData';
import { EditorialPlaceholder } from '../components/EditorialPlaceholder';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const study = caseStudiesData.find(s => s.slug === slug || s.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-36 pb-20 text-center px-6">
        <h1 className="font-serif-editorial text-4xl font-bold text-[#58111A]">CASE STUDY NOT FOUND</h1>
        <p className="text-sm font-sans-editorial mt-2 text-[#1A1412]/70">The requested case study page does not exist.</p>
        <NavLink
          to="/case-studies"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#58111A] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </NavLink>
      </div>
    );
  }

  // Find index for next/prev navigation
  const currentIndex = caseStudiesData.findIndex(s => s.slug === study.slug);
  const prevStudy = caseStudiesData[(currentIndex - 1 + caseStudiesData.length) % caseStudiesData.length];
  const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <NavLink
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A] hover:text-[#3D0B12] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO CASE STUDIES DIRECTORY</span>
        </NavLink>

        {/* Case Study Hero Header */}
        <div className="border-b-2 border-[#58111A] pb-12 mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
            <span className="bg-[#58111A] text-[#FAF7F2] px-3 py-1">
              {study.number} &bull; {study.category}
            </span>
            <span>{study.clientOrIndustry}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#58111A] leading-[1.05]">
            {study.title}
          </h1>

          <p className="font-serif-editorial text-xl sm:text-2xl text-[#1A1412] italic font-normal">
            "{study.subtitle}"
          </p>

          {/* Quick Context Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-[#58111A]/15 text-xs font-sans-editorial">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1412]/50 block">MY ROLE</span>
              <span className="font-bold text-[#58111A]">{study.role}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1412]/50 block">TIMELINE</span>
              <span className="font-bold text-[#58111A]">{study.timeline}</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1412]/50 block">INDUSTRY</span>
              <span className="font-bold text-[#58111A]">{study.clientOrIndustry}</span>
            </div>
          </div>
        </div>

        {/* Key Achievement Banner if present */}
        {study.keyStat && (
          <div className="bg-[#58111A] text-[#FAF7F2] p-8 mb-16 border-l-8 border-[#C88E8B] shadow-lg">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C88E8B] font-bold block mb-2">
              KEY ACHIEVEMENT HIGHLIGHT
            </span>
            <p className="font-serif-editorial text-3xl sm:text-4xl font-bold leading-tight">
              {study.keyStat.value}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-sans-editorial mt-2">
              {study.keyStat.label}
            </p>
          </div>
        )}

        {/* Strategic Storytelling Breakdown */}
        <div className="space-y-16">
          
          {/* 1. THE BRAND & CONTEXT */}
          <section className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 md:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              <Building2 className="w-4 h-4 text-[#C88E8B]" />
              <span>01 &bull; THE BRAND &amp; CONTEXT</span>
            </div>
            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">CONTEXT &amp; BACKGROUND</h2>
            <p className="text-sm md:text-base text-[#1A1412]/85 font-sans-editorial leading-relaxed">
              {study.context}
            </p>
          </section>

          {/* 2. THE CHALLENGE */}
          <section className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 md:p-10 space-y-4 border-l-4 border-l-[#58111A]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              <Target className="w-4 h-4 text-[#C88E8B]" />
              <span>02 &bull; THE CHALLENGE</span>
            </div>
            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">THE BUSINESS PROBLEM</h2>
            <p className="text-sm md:text-base text-[#1A1412]/85 font-sans-editorial leading-relaxed">
              {study.challenge}
            </p>
          </section>

          {/* 3. MY ROLE */}
          <section className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 md:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              <User className="w-4 h-4 text-[#C88E8B]" />
              <span>03 &bull; MY ROLE</span>
            </div>
            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">{study.role}</h2>
            <p className="text-sm text-[#1A1412]/80 font-sans-editorial leading-relaxed">
              I assumed direct responsibility for structuring the strategic angle, managing social media channels, curating creator discovery, and tracking engagement metrics.
            </p>
          </section>

          {/* 4. THE INSIGHT & STRATEGY */}
          <section className="bg-[#58111A] text-[#FAF7F2] p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B]">
              <Lightbulb className="w-4 h-4" />
              <span>04 &bull; STRATEGIC INSIGHT &amp; DIRECTION</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#C88E8B] font-bold">THE CORE INSIGHT</h3>
              <p className="font-serif-editorial text-2xl sm:text-3xl font-bold italic leading-snug">
                "{study.insight}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#FAF7F2]/15 space-y-2">
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#C88E8B] font-bold">THE STRATEGIC SOLUTION</h3>
              <p className="text-sm md:text-base text-[#FAF7F2]/90 font-sans-editorial leading-relaxed">
                {study.strategy}
              </p>
            </div>
          </section>

          {/* 5. WHAT I EXECUTED */}
          <section className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 md:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              <Zap className="w-4 h-4 text-[#C88E8B]" />
              <span>05 &bull; WHAT I EXECUTED</span>
            </div>

            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">TACTICAL IMPLEMENTATION</h2>

            <ul className="space-y-3 font-sans-editorial text-sm text-[#1A1412]/85">
              {study.execution.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#FAF7F2] p-4 border border-[#58111A]/10">
                  <span className="w-6 h-6 rounded-full bg-[#58111A] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. THE RESULT / IMPACT */}
          <section className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 md:p-10 space-y-4 border-l-4 border-l-[#C88E8B]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              <Award className="w-4 h-4 text-[#C88E8B]" />
              <span>06 &bull; RESULT &amp; IMPACT</span>
            </div>

            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">OUTCOME &amp; DELIVERABLES</h2>
            <p className="text-sm md:text-base text-[#1A1412]/85 font-sans-editorial leading-relaxed">
              {study.resultsAndImpact}
            </p>
          </section>

          {/* 7. KEY LEARNING */}
          <section className="bg-[#FAF7F2] border-2 border-[#58111A] p-8 md:p-10 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#58111A]">
              07 &bull; KEY STRATEGIC LEARNING
            </span>
            <p className="font-serif-editorial text-xl md:text-2xl font-bold text-[#58111A] leading-snug">
              "{study.keyLearning}"
            </p>
          </section>

          {/* 8. VISUAL EVIDENCE */}
          <section className="space-y-6 pt-6">
            <div className="border-b border-[#58111A]/20 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-1">
                08 &bull; CAMPAIGN CREATIVE &amp; DOCUMENTATION
              </span>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">VISUAL EVIDENCE</h2>
            </div>

            <div className="max-w-4xl">
              {study.placeholders.map((ph) => (
                <div key={ph.id} className="space-y-2">
                  <EditorialPlaceholder
                    label={ph.label}
                    type={ph.type}
                    subtitle={ph.description}
                    defaultImage={ph.defaultImage}
                  />
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Case Study Switcher Footer */}
        <div className="mt-20 pt-12 border-t-2 border-[#58111A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <NavLink
            to={`/case-studies/${prevStudy.slug}`}
            className="p-4 border border-[#58111A] text-[#58111A] hover:bg-[#58111A] hover:text-[#FAF7F2] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS: {prevStudy.title}</span>
          </NavLink>

          <NavLink
            to={`/case-studies/${nextStudy.slug}`}
            className="p-4 bg-[#58111A] text-[#FAF7F2] hover:bg-[#3D0B12] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <span>NEXT: {nextStudy.title}</span>
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

      </div>
    </div>
  );
};
