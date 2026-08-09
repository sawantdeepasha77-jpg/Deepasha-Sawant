export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'BRAND STRATEGY' | 'SOCIAL MEDIA MARKETING' | 'LEAD GENERATION' | 'CONTENT STRATEGY' | 'CAMPAIGN STRATEGY';
  clientOrIndustry: string;
  role: string;
  timeline: string;
  summary: string;
  heroHeadline: string;
  keyStat?: {
    value: string;
    label: string;
  };
  context: string;
  challenge: string;
  insight: string;
  strategy: string;
  execution: string[];
  resultsAndImpact: string;
  keyLearning: string;
  placeholders: {
    id: string;
    label: string;
    type: 'campaign' | 'screenshot' | 'analytics' | 'before_after' | 'calendar';
    description: string;
    defaultImage?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  category: string;
  description: string;
  responsibilities: string[];
  keyHighlight?: string;
  caseStudySlug?: string;
}

export interface SkillItem {
  name: string;
  level: 'Core Expertise' | 'Strong Proficiency' | 'Working Knowledge' | 'Familiar';
  description?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Certification {
  title: string;
  institution: string;
  type: string;
  date?: string;
}

export interface BeyondInterest {
  title: string;
  subtitle: string;
  description: string;
  editorialNote: string;
}
