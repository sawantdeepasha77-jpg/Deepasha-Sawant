import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, Sparkles, Layers, Target, Users, TrendingUp, Award, Compass, Heart, Activity } from 'lucide-react';
import { personalInfo, caseStudiesData, experienceData, beyondInterestsData } from '../data/portfolioData';
import { EditorialPlaceholder } from '../components/EditorialPlaceholder';
import { IMAGES } from '../assets/images';

interface HomePageProps {
  onOpenResumeModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResumeModal }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412]">
      
      {/* ==========================================
          FULL EDITORIAL HERO
      ========================================== */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#58111A]/15 overflow-hidden">
        
        {/* Subtle Background Accent Lines & Maroon Block */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#58111A]/5 -z-10 hidden md:block"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#58111A]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Top Category Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#58111A] text-[#FAF7F2] text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88E8B] animate-pulse"></span>
            <span>{personalInfo.primaryFocus}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left 7 Cols: Typography & Editorial Identity */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Oversized Name Header */}
              <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-[#58111A] leading-[0.95]">
                DEEPASHA <br />
                <span className="italic font-serif-display font-normal text-[#1A1412]">SAWANT</span>
              </h1>

              {/* Position Subtitle */}
              <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#58111A]/90 border-l-2 border-[#58111A] pl-3 py-0.5">
                {personalInfo.title}
              </p>

              {/* Main Headline */}
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#1A1412] leading-snug pt-2">
                "{personalInfo.headline}"
              </p>

              {/* Tagline Paragraph */}
              <p className="text-sm sm:text-base text-[#1A1412]/80 max-w-xl font-sans-editorial leading-relaxed">
                {personalInfo.tagline}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <NavLink
                  to="/case-studies"
                  className="px-7 py-4 bg-[#58111A] hover:bg-[#3D0B12] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 shadow-lg group"
                >
                  <span>VIEW CASE STUDIES</span>
                  <ArrowRight className="w-4 h-4 text-[#C88E8B] group-hover:translate-x-1 transition-transform" />
                </NavLink>

                <button
                  onClick={onOpenResumeModal}
                  className="px-7 py-4 border-2 border-[#58111A] text-[#58111A] hover:bg-[#58111A] hover:text-[#FAF7F2] text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  DOWNLOAD RESUME
                </button>
              </div>

            </div>

            {/* Right 5 Cols: Editorial Personal Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-3 bg-[#FAF7F2] border-2 border-[#58111A] shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-[#58111A] text-[#FAF7F2] text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest z-20 shadow-md">
                  PORTRAIT &bull; DEEPASHA
                </div>
                
                <EditorialPlaceholder
                  label="DEEPASHA SAWANT"
                  type="portrait"
                  aspectRatio="portrait"
                  subtitle="A natural, editorial photograph of Deepasha Sawant"
                  defaultImage={IMAGES.aboutWhoIAm}
                />

                <div className="mt-3 pt-3 border-t border-[#58111A]/15 flex items-center justify-between text-[11px] font-sans-editorial text-[#1A1412]/70">
                  <span className="font-semibold text-[#58111A]">DEEPASHA SAWANT</span>
                  <span className="font-mono text-[10px]">MUMBAI &bull; 2026</span>
                </div>
              </div>

              {/* Layered Accent Box Behind Photo */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#58111A] -z-10 hidden sm:block"></div>
            </div>

          </div>

          {/* Subtle Scroll Indicator */}
          <div className="mt-16 pt-8 border-t border-[#58111A]/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#58111A]/70">
            <span className="flex items-center gap-2">
              <ArrowDownRight className="w-4 h-4 animate-bounce" />
              <span>SCROLL TO EXPLORE STRATEGY &amp; WORK</span>
            </span>
            <span className="hidden md:inline font-sans-editorial text-[#1A1412]/60">
              BRAND MANAGEMENT + MARKETING STRATEGY
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 1: A QUICK INTRO
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FFFDF9] border-b border-[#58111A]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
                01 &bull; INTRODUCTION
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#58111A] leading-tight">
                WHO IS <br />
                <span className="italic font-serif-display text-[#1A1412] font-normal">DEEPASHA?</span>
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base md:text-lg text-[#1A1412]/90 leading-relaxed font-sans-editorial">
              <p className="font-medium text-[#58111A] text-lg md:text-xl border-l-4 border-[#58111A] pl-5 py-1">
                "I'm a Digital Business student building my path in brand management, marketing strategy and social media. I enjoy understanding what makes people connect with brands and turning those observations into ideas, strategies and content."
              </p>

              <p>
                My approach combines strategic curiosity with hands-on execution. Whether analyzing a pricing objection for a furniture brand or curating 80+ influencers in 24 hours for a government project, I look at the business problem first, the audience motivation second, and the creative solution third.
              </p>

              <div className="pt-4 flex flex-wrap gap-8 text-xs font-mono uppercase tracking-wider text-[#58111A]">
                <div>
                  <span className="block text-[10px] text-[#1A1412]/50">DEGREE</span>
                  <span className="font-bold">BBA IN DIGITAL BUSINESS (2024–2027)</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#1A1412]/50">INSTITUTION</span>
                  <span className="font-bold">K.P.B. HINDUJA COLLEGE / IIDE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: WHAT I DO
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#58111A] text-[#FAF7F2] border-b border-[#3D0B12]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FAF7F2]/15 pb-8 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
                02 &bull; CAPABILITIES &amp; FOCUS
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF7F2]">
                WHAT I <span className="italic font-serif-display font-normal text-[#C88E8B]">DO.</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#FAF7F2]/80 max-w-md font-sans-editorial">
              Strategic thinking paired with practical digital marketing execution across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                01
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                BRAND MANAGEMENT
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                Defining brand positioning, identity consistency, consumer communication guidelines, and long-term value creation.
              </p>
            </div>

            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                02
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                MARKETING STRATEGY
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                Analyzing business barriers, identifying customer friction points, and reframing objections into new product/service opportunities.
              </p>
            </div>

            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                03
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                SOCIAL MEDIA MANAGEMENT
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                End-to-end publishing calendars, account management, posting schedules, and performance metric evaluation.
              </p>
            </div>

            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                04
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                CONTENT STRATEGY
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                Formulating distinct content pillars (Humor, Behind-The-Scenes, Product Walkthroughs) that build relatable brand personalities.
              </p>
            </div>

            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                05
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                INFLUENCER MARKETING
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                Fast-turnaround creator discovery, brand-safety vetting, and outreach coordination under high-pressure agency environments.
              </p>
            </div>

            <div className="p-8 bg-[#3D0B12]/80 border border-[#FAF7F2]/15 hover:border-[#C88E8B] transition-colors space-y-4">
              <div className="w-10 h-10 bg-[#C88E8B]/10 border border-[#C88E8B] text-[#C88E8B] flex items-center justify-center font-bold text-xs font-mono">
                06
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF7F2]">
                DIGITAL &amp; PAID SOCIAL
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans-editorial">
                Meta Ads Manager execution, audience demographic targeting, lead generation form funnels, and performance tracking.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: FEATURED CASE STUDIES
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#58111A]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#58111A]/15 pb-8 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
                03 &bull; PORTFOLIO PROJECTS
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#58111A]">
                FEATURED <span className="italic font-serif-display font-normal text-[#1A1412]">CASE STUDIES.</span>
              </h2>
            </div>

            <NavLink
              to="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#58111A] hover:text-[#3D0B12] transition-colors"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="group bg-[#FFFDF9] border border-[#58111A]/20 p-8 flex flex-col justify-between hover:border-[#58111A] hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-[#58111A]/70 uppercase font-bold tracking-widest border-b border-[#58111A]/10 pb-4 mb-6">
                    <span>{study.number} &bull; {study.category}</span>
                    <span>{study.clientOrIndustry}</span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl font-bold text-[#58111A] group-hover:text-[#3D0B12] transition-colors mb-2">
                    {study.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase text-[#1A1412]/60 font-mono tracking-wider mb-4">
                    ROLE: {study.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#1A1412]/80 leading-relaxed font-sans-editorial mb-6">
                    {study.summary}
                  </p>

                  {study.keyStat && (
                    <div className="bg-[#58111A]/5 p-4 border-l-2 border-[#58111A] mb-6">
                      <span className="text-base font-bold text-[#58111A] block font-serif-editorial">
                        {study.keyStat.value}
                      </span>
                      <span className="text-[11px] text-[#1A1412]/70 font-sans-editorial">
                        {study.keyStat.label}
                      </span>
                    </div>
                  )}

                  {/* Placeholder Preview */}
                  <EditorialPlaceholder
                    label={study.placeholders[0]?.label || "ADD CAMPAIGN VISUAL"}
                    type={study.placeholders[0]?.type || "campaign"}
                    aspectRatio="landscape"
                    className="mb-6"
                    defaultImage={study.placeholders[0]?.defaultImage}
                  />
                </div>

                <div className="pt-4 border-t border-[#58111A]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#58111A]/80 font-bold">
                    {study.timeline}
                  </span>
                  <NavLink
                    to={`/case-studies/${study.slug}`}
                    className="px-4 py-2 bg-[#58111A] text-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider hover:bg-[#3D0B12] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: EXPERIENCE SNAPSHOT
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FFFDF9] border-b border-[#58111A]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block">
              04 &bull; VERSATILITY IN EXECUTION
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#58111A]">
              EXPERIENCE SNAPSHOT
            </h2>
            <p className="font-serif-editorial text-2xl italic text-[#1A1412]/90">
              "Different industries. Different audiences. One strategic mindset."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FAF7F2] p-6 border-t-2 border-[#58111A] space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-[#58111A]">01 &bull; ENTERTAINMENT</span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A]">Maitra Entertainment</h3>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                High-volume social media execution, Meta Ads, and rapid influencer vetting under deadline pressure.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border-t-2 border-[#58111A] space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-[#58111A]">02 &bull; FURNITURE</span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A]">Steelman Furniture</h3>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Campaign strategy reframing high cupboard price barriers into an accessible repainting service line.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border-t-2 border-[#58111A] space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-[#58111A]">03 &bull; REAL ESTATE</span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A]">Real Estate Marketing</h3>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Organic channel management, publishing calendars, and performance lead generation pipelines across 2 accounts.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border-t-2 border-[#58111A] space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-[#58111A]">04 &bull; RESTAURANTS</span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A]">Restaurant Marketing</h3>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Designing relatable food content pillars for 3 main Ratnagiri restaurant brands to build local brand identity.
              </p>
            </div>

          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#58111A] text-[#58111A] hover:bg-[#58111A] hover:text-[#FAF7F2] text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>EXPLORE FULL CAREER TIMELINE</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5: A LITTLE ABOUT ME
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#58111A]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block">
                05 &bull; PHILOSOPHY &amp; APPROACH
              </span>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#58111A] leading-tight">
                A LITTLE ABOUT <br />
                <span className="italic font-serif-display text-[#1A1412] font-normal">MY THINKING.</span>
              </h2>

              <p className="text-base text-[#1A1412]/80 font-sans-editorial leading-relaxed">
                Great marketing isn't about shouting louder or copying trending viral sounds. It's about diagnosing the human emotion behind consumer decisions and bridging that with clear brand positioning.
              </p>

              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-[#58111A] pl-4">
                  <h4 className="font-bold text-sm text-[#58111A] uppercase tracking-wider">01. THE PROBLEM FIRST</h4>
                  <p className="text-xs text-[#1A1412]/70">Why aren't people buying? What is the unspoken barrier?</p>
                </div>
                <div className="border-l-2 border-[#58111A] pl-4">
                  <h4 className="font-bold text-sm text-[#58111A] uppercase tracking-wider">02. THE AUDIENCE MOTIVATION</h4>
                  <p className="text-xs text-[#1A1412]/70">What makes them pause their scroll and pay genuine attention?</p>
                </div>
                <div className="border-l-2 border-[#58111A] pl-4">
                  <h4 className="font-bold text-sm text-[#58111A] uppercase tracking-wider">03. THE CREATIVE EXECUTION</h4>
                  <p className="text-xs text-[#1A1412]/70">Delivering the strategy smoothly across digital touchpoints.</p>
                </div>
              </div>

              <div className="pt-4">
                <NavLink
                  to="/about"
                  className="px-6 py-3.5 bg-[#58111A] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest hover:bg-[#3D0B12] transition-colors inline-flex items-center gap-2"
                >
                  <span>READ FULL ABOUT PAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FFFDF9] border-2 border-[#58111A] p-8 shadow-xl space-y-6">
              <h3 className="font-serif-editorial text-2xl font-bold text-[#58111A] border-b border-[#58111A]/20 pb-4">
                CORE STRATEGIC VALUES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans-editorial">
                <div>
                  <span className="font-bold text-[#58111A] block text-sm mb-1">INTENTIONAL CREATIVITY</span>
                  <p className="text-[#1A1412]/70">Every piece of content must serve a clear stage in the customer decision funnel.</p>
                </div>
                <div>
                  <span className="font-bold text-[#58111A] block text-sm mb-1">ADAPTATIVE COMMUNICATION</span>
                  <p className="text-[#1A1412]/70">Flexing voice from formal government standards to casual local restaurant food humor.</p>
                </div>
                <div>
                  <span className="font-bold text-[#58111A] block text-sm mb-1">OPERATIONAL DISCIPLINE</span>
                  <p className="text-[#1A1412]/70">Maintaining strict calendar scheduling, influencer tracking, and reporting rigor.</p>
                </div>
                <div>
                  <span className="font-bold text-[#58111A] block text-sm mb-1">CONTINUOUS CURIOSITY</span>
                  <p className="text-[#1A1412]/70">Always studying emerging consumer behaviors, AI marketing tools, and platform shifts.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6: BEYOND MARKETING
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FFFDF9] border-b border-[#58111A]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#58111A]/15 pb-8 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
                06 &bull; PERSONAL PERSPECTIVE
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#58111A]">
                BEYOND <span className="italic font-serif-display font-normal text-[#1A1412]">MARKETING.</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#1A1412]/70 max-w-md font-sans-editorial">
              The personal disciplines, creative outlets, and mindsets that inform my professional focus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beyondInterestsData.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF7F2] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors space-y-3"
              >
                <span className="text-[10px] font-mono font-bold uppercase text-[#58111A]/70">
                  {item.editorialNote}
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#58111A]">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#1A1412]/80 uppercase font-mono tracking-wider">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#1A1412]/70 leading-relaxed font-sans-editorial pt-2 border-t border-[#58111A]/10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
