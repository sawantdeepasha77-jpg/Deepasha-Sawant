import React from 'react';
import { NavLink } from 'react-router-dom';
import { Download, ArrowRight, Award, GraduationCap, Compass, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, certificationsData, beyondInterestsData } from '../data/portfolioData';
import { EditorialPlaceholder } from '../components/EditorialPlaceholder';

interface AboutPageProps {
  onOpenResumeModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResumeModal }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-[#58111A]/20 pb-12 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-3">
            ABOUT DEEPASHA SAWANT
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#58111A] leading-tight">
            STRATEGIC INTENT. <br />
            <span className="italic font-serif-display text-[#1A1412] font-normal">CREATIVE EXECUTION.</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-[#1A1412]/80 max-w-3xl font-sans-editorial leading-relaxed">
            Positioning myself as a future Brand Management &amp; Marketing Strategy professional, backed by hands-on digital marketing and social media experience.
          </p>
        </div>

        {/* Section: WHO I AM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-[#58111A]/15">
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#FFFDF9] border-2 border-[#58111A] shadow-xl">
              <EditorialPlaceholder
                label="DEEPASHA SAWANT"
                type="portrait"
                aspectRatio="portrait"
                subtitle="Editorial portrait of Deepasha Sawant"
                defaultImage="/images/about-who-i-am.png"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block">
              01 &bull; WHO I AM
            </span>

            <h2 className="font-serif-editorial text-3xl md:text-4xl font-bold text-[#58111A]">
              BRIDGING CONSUMER PSYCHOLOGY WITH DIGITAL AGILITY.
            </h2>

            <div className="space-y-4 text-sm md:text-base text-[#1A1412]/80 font-sans-editorial leading-relaxed">
              <p>
                I am currently pursuing my BBA in Digital Business (2024–2027) at K.P.B. Hinduja College of Commerce, affiliated with IIDE. My goal is to build brands that don't just win clicks, but earn genuine mindshare and customer loyalty.
              </p>
              <p>
                Having worked across fast-paced agency environments like Maitra Entertainment, real estate developments, and local dining brands, I've learned that effective marketing requires equal parts strategic discipline and cultural empathy.
              </p>
              <p className="font-semibold text-[#58111A] pt-2 border-l-2 border-[#58111A] pl-4">
                "I view social media, influencer outreach, and paid ads not as isolated tactics, but as vital touchpoints in a larger brand management ecosystem."
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3 bg-[#58111A] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest hover:bg-[#3D0B12] transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD FULL CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section: WHAT I'M INTERESTED IN */}
        <div className="py-20 border-b border-[#58111A]/15">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
              02 &bull; FOCUS AREAS
            </span>
            <h2 className="font-serif-editorial text-4xl font-bold text-[#58111A]">
              WHAT I'M INTERESTED IN.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Brand Management</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Architecting brand identity, brand equity, positioning frameworks, and consistent voice guidelines across platforms.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Marketing Strategy</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Uncovering core business bottlenecks, customer objections, and designing alternative campaign offerings to unlock growth.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Social Media Strategy</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Designing channel strategy, publishing cadence, community engagement, and viral short-form video content pillars.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Consumer Behaviour</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Studying why audiences scroll past generic ads versus what prompts them to click, share, and purchase.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Influencer &amp; Paid Social</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Curating brand-safe creator networks rapidly and leveraging Meta Ads to amplify high-converting organic content.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 hover:border-[#58111A] transition-colors">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A] mb-2">Creative Problem-Solving</h3>
              <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                Turning constraints (high pricing, tight deadlines, complex compliance) into compelling marketing opportunities.
              </p>
            </div>

          </div>
        </div>

        {/* Section: HOW I THINK */}
        <div className="py-20 border-b border-[#58111A]/15 bg-[#FFFDF9] p-8 md:p-12 my-12 border-2 border-[#58111A]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
            03 &bull; STRATEGIC FRAMEWORK
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#58111A] mb-8">
            HOW I APPROACH A BRAND CHALLENGE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-2xl font-serif-editorial font-bold text-[#58111A] border-b border-[#58111A]/20 pb-2">
                01. DIAGNOSE
              </div>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Analyze the underlying business problem, price friction, or perception barrier before writing a single line of copy.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-2xl font-serif-editorial font-bold text-[#58111A] border-b border-[#58111A]/20 pb-2">
                02. POSITION
              </div>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Identify the distinct angle, audience motivation, or content pillar that transforms a boring feature into an emotional hook.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-2xl font-serif-editorial font-bold text-[#58111A] border-b border-[#58111A]/20 pb-2">
                03. EXECUTE
              </div>
              <p className="text-xs text-[#1A1412]/80 leading-relaxed font-sans-editorial">
                Deploy publishing calendars, coordinate creators, manage Meta Ads, and optimize based on performance metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Section: MY JOURNEY (EDUCATION & CERTIFICATIONS) */}
        <div className="py-20 border-b border-[#58111A]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Education */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block">
                04 &bull; ACADEMIC FOUNDATION
              </span>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">
                EDUCATION
              </h2>

              <div className="bg-[#FFFDF9] p-6 border-l-4 border-[#58111A] space-y-3 shadow-sm">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-bold text-lg text-[#58111A]">{personalInfo.education.degree}</h3>
                  <span className="text-xs font-mono font-bold text-[#58111A]/80">{personalInfo.education.period}</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1412]">
                  {personalInfo.education.institution} ({personalInfo.education.affiliation})
                </p>
                <p className="text-xs text-[#1A1412]/75 leading-relaxed font-sans-editorial">
                  {personalInfo.education.summary}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block">
                05 &bull; CREDENTIALS
              </span>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">
                CERTIFICATIONS &amp; COURSES
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationsData.map((cert, index) => (
                  <div key={index} className="bg-[#FFFDF9] p-4 border border-[#58111A]/20">
                    <span className="text-[10px] font-mono text-[#58111A]/60 block font-bold">
                      {cert.type}
                    </span>
                    <h4 className="font-bold text-sm text-[#58111A] mt-1">{cert.title}</h4>
                    <p className="text-xs text-[#1A1412]/70 mt-1">{cert.institution}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section: BEYOND MARKETING */}
        <div className="py-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C88E8B] block mb-2">
              06 &bull; PERSONALITY &amp; PERSPECTIVE
            </span>
            <h2 className="font-serif-editorial text-4xl font-bold text-[#58111A]">
              BEYOND MARKETING.
            </h2>
            <p className="text-sm text-[#1A1412]/70 font-sans-editorial mt-2">
              The personal disciplines and creative passions that keep me grounded, sharp, and focused.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beyondInterestsData.map((item) => (
              <div key={item.title} className="bg-[#FFFDF9] p-6 border border-[#58111A]/20 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#58111A]/70 uppercase">
                  {item.editorialNote}
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#58111A]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1A1412]/70 leading-relaxed font-sans-editorial">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
