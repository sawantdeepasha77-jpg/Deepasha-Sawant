import React, { useState } from 'react';
import { Mail, Linkedin, Copy, CheckCircle2, Send, Sparkles, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactPageProps {
  onOpenResumeModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Internship Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} (${formData.inquiryType})`);
    const body = encodeURIComponent(
      `Hello Deepasha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'N/A'}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', organization: '', inquiryType: 'Internship Opportunity', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pt-28 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="border-b border-[#58111A]/20 pb-12 mb-16">
          <div className="flex items-center gap-2 text-[#C88E8B] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>LET'S CONNECT &bull; OPEN TO OPPORTUNITIES</span>
          </div>

          <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#58111A] leading-tight">
            LET'S TALK <span className="italic font-serif-display text-[#1A1412] font-normal">BRANDS.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-[#1A1412]/80 max-w-3xl font-sans-editorial leading-relaxed">
            Interested in discussing marketing strategy, brand management internships, social media projects, or potential creative collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left 5 Cols: Direct Contact Details & Opportunities List */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#58111A] text-[#FAF7F2] p-8 border-l-4 border-[#C88E8B] shadow-lg space-y-6">
              <h2 className="font-serif-editorial text-2xl md:text-3xl font-bold">
                DIRECT CONTACT
              </h2>

              <div className="space-y-4 text-xs font-sans-editorial">
                <div>
                  <span className="text-[10px] font-mono text-[#C88E8B] uppercase tracking-widest block font-bold mb-1">
                    EMAIL ADDRESS
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-[#3D0B12] p-3 border border-[#FAF7F2]/10">
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="font-mono text-sm truncate hover:text-[#C88E8B] text-[#FAF7F2] transition-colors flex items-center gap-2"
                      title="Send email to sawantdeepasha77@gmail.com"
                    >
                      <Mail className="w-4 h-4 text-[#C88E8B] shrink-0" />
                      <span>{personalInfo.contact.email}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 hover:bg-[#FAF7F2]/10 text-[#C88E8B] transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#FAF7F2]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-[10px] text-[#C88E8B] font-mono mt-1 block">
                      Email address copied to clipboard!
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#C88E8B] uppercase tracking-widest block font-bold mb-1">
                    LINKEDIN PROFILE
                  </span>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 bg-[#3D0B12] p-3 border border-[#FAF7F2]/10 hover:border-[#C88E8B] transition-colors"
                  >
                    <span className="font-mono text-sm truncate">{personalInfo.contact.linkedin}</span>
                    <Linkedin className="w-4 h-4 text-[#C88E8B]" />
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#C88E8B] uppercase tracking-widest block font-bold mb-1">
                    LOCATION
                  </span>
                  <p className="font-medium text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C88E8B]" />
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#FAF7F2]/15">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-3 bg-[#FAF7F2] text-[#58111A] hover:bg-[#C88E8B] text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>
              </div>
            </div>

            <div className="bg-[#FFFDF9] border border-[#58111A]/20 p-8 space-y-4">
              <h3 className="font-serif-editorial text-xl font-bold text-[#58111A]">
                TARGET OPPORTUNITIES
              </h3>
              <ul className="space-y-2 text-xs font-sans-editorial text-[#1A1412]/80">
                <li className="flex items-center gap-2">&bull; Marketing Internships</li>
                <li className="flex items-center gap-2">&bull; Brand Management Roles</li>
                <li className="flex items-center gap-2">&bull; Digital Marketing Opportunities</li>
                <li className="flex items-center gap-2">&bull; Social Media Marketing Positions</li>
                <li className="flex items-center gap-2">&bull; Freelance Brand Strategy &amp; Social Media</li>
              </ul>
            </div>

          </div>

          {/* Right 7 Cols: Interactive Message Builder */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border-2 border-[#58111A] p-8 md:p-10 shadow-xl space-y-6">
            <h2 className="font-serif-editorial text-3xl font-bold text-[#58111A]">
              SEND A MESSAGE
            </h2>

            {formSubmitted ? (
              <div className="bg-[#58111A] text-[#FAF7F2] p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#C88E8B] mx-auto" />
                <h3 className="font-serif-editorial text-2xl font-bold">MESSAGE RECEIVED</h3>
                <p className="text-xs font-sans-editorial text-[#FAF7F2]/80 max-w-md mx-auto">
                  Thank you for connecting! Deepasha will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans-editorial">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-[#58111A] mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] border border-[#58111A]/20 focus:border-[#58111A] outline-none text-[#1A1412]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-[#58111A] mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] border border-[#58111A]/20 focus:border-[#58111A] outline-none text-[#1A1412]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-[#58111A] mb-1">
                      ORGANIZATION / BRAND
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Creative Marketing Agency"
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] border border-[#58111A]/20 focus:border-[#58111A] outline-none text-[#1A1412]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-[#58111A] mb-1">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] border border-[#58111A]/20 focus:border-[#58111A] outline-none text-[#1A1412]"
                    >
                      <option value="Internship Opportunity">Marketing Internship / Role</option>
                      <option value="Brand Strategy Project">Brand Strategy Project</option>
                      <option value="Social Media Campaign">Social Media Campaign</option>
                      <option value="Freelance Collaboration">Freelance Collaboration</option>
                      <option value="General Connect">General Connection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-[#58111A] mb-1">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your brand, opportunity, or campaign requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FAF7F2] border border-[#58111A]/20 focus:border-[#58111A] outline-none text-[#1A1412]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#58111A] text-[#FAF7F2] hover:bg-[#3D0B12] text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND INQUIRY</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
