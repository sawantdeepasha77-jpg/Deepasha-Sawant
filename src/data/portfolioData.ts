import { CaseStudy, ExperienceItem, SkillCategory, Certification, BeyondInterest } from '../types';
import maitraImg from '../assets/images/maitra-social-media.png';
import steelmanImg from '../assets/images/steelman-campaign-strategy.png';
import realestateImg from '../assets/images/realestate-lead-generation.png';
import restaurantImg from '../assets/images/restaurant-content-strategy.png';

export const personalInfo = {
  name: "DEEPASHA SAWANT",
  title: "DIGITAL MARKETER | BRAND MANAGEMENT | SOCIAL MEDIA",
  primaryFocus: "BRAND MANAGEMENT & MARKETING STRATEGY",
  tagline: "Architecting brand stories that bridge strategic insight with scroll-stopping cultural relevance.",
  headline: "Curious about brands. Obsessed with ideas. Driven by what makes audiences stop, engage, and connect.",
  shortBio: "I am a Digital Business student positioning myself at the intersection of brand management, marketing strategy, and social media execution. I look beyond vanity metrics to analyze business constraints, uncover human insights, and build end-to-end campaign strategies.",
  
  contact: {
    email: "sawantdeepasha77@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepasha-sawant-39198b2a8",
    location: "Mumbai, India",
    availability: "Available for Marketing Internships, Brand Roles, Digital Strategy & Freelance Projects"
  },

  education: {
    degree: "BBA in Digital Business",
    period: "2024 – 2027",
    institution: "K.P.B. Hinduja College of Commerce",
    affiliation: "Affiliated with IIDE (Indian Institute of Digital Education)",
    summary: "Focusing on digital marketing frameworks, consumer psychology, data analytics, brand communication, and e-commerce growth strategies."
  }
};

export const caseStudiesData: CaseStudy[] = [
  {
    id: "maitra-entertainment",
    slug: "maitra-entertainment",
    number: "01",
    title: "MAITRA ENTERTAINMENT",
    subtitle: "High-Volume Influencer Curation & Paid Social Strategy for Government & Entertainment Initiatives",
    category: "SOCIAL MEDIA MARKETING",
    clientOrIndustry: "Entertainment & Public Sector Projects",
    role: "Social Media Marketing Intern",
    timeline: "March 2026 – July 2026",
    summary: "Executed end-to-end social media operations, structured influencer discovery pipelines under stringent deadlines, and managed Meta Ads campaigns with exposure to high-visibility government projects.",
    heroHeadline: "Rapid Influencer Mobilization & Social Execution at Scale",
    keyStat: {
      value: "80+ Influencers",
      label: "Shortlisted within 24 hours for a high-priority government project"
    },
    context: "During my 5-month internship at Maitra Entertainment, I operated in a fast-paced agency environment managing diverse entertainment and high-stakes government-related initiatives requiring high accuracy and tight turnarounds.",
    challenge: "Entertainment and government campaigns require strict communication alignment, high speed of execution, and rigorous curation. The primary operational bottleneck was rapidly identifying brand-safe, hyper-relevant influencers while maintaining structured publishing schedules across multiple active campaign funnels.",
    insight: "Influencer marketing succeeds not through superficial follower counts, but through swift alignment of creator tone, niche audience trust, and strict brand-safety guidelines — especially when representing public-facing civic projects.",
    strategy: "I streamlined the influencer outreach workflow into a structured multi-tiered audit system while establishing synchronized content calendars that mapped organic social posts directly to paid Meta Ad retargeting flows.",
    execution: [
      "Shortlisted 80+ qualified influencers within 24 hours to fulfill urgent government project specifications.",
      "Developed comprehensive 30-day social media content calendars with custom engagement pillars.",
      "Managed multi-platform publishing schedules ensuring 100% on-time delivery across active channels.",
      "Set up and monitored Meta Ads Manager campaigns to ensure target demographic reach.",
      "Compiled performance tracking reports analyzing reach, impression metrics, and engagement rates."
    ],
    resultsAndImpact: "Demonstrated rapid operational agility by delivering 80+ vetted creators in a single day for a time-critical government contract, maintaining steady engagement across client handles, and optimizing campaign workflow protocols.",
    keyLearning: "Speed without structure creates chaos. By building standardized creator vetting criteria, high-stress marketing initiatives can be executed with speed, precision, and complete brand safety.",
    placeholders: [
      {
        id: "maitra-influencer-sheet",
        label: "SOCIAL MEDIA MARKETING & INFLUENCER CURATION - MAITRA ENTERTAINMENT",
        type: "campaign",
        description: "Social media marketing execution & high-volume influencer campaign visual for Maitra Entertainment.",
        defaultImage: maitraImg
      }
    ]
  },
  {
    id: "steelman-furniture",
    slug: "steelman",
    number: "02",
    title: "STEELMAN FURNITURE",
    subtitle: "Turning a High Purchase Barrier into an Accessible Refurbishment Service Revenue Stream",
    category: "CAMPAIGN STRATEGY",
    clientOrIndustry: "Furniture & Home Goods / Manufacturing",
    role: "Brand Strategy & Campaign Consultant",
    timeline: "Campaign Strategy Concept",
    summary: "Re-engineered a core sales bottleneck by transforming a high-friction product price barrier into a low-barrier cupboard repainting and refurbishment offering.",
    heroHeadline: "Reframing Price Friction into a Customer Acquisition Funnel",
    context: "Steelman Furniture faced declining direct orders for new steel and wooden cupboards. High unit pricing created hesitation among cost-conscious home buyers, causing potential customers to delay or abandon their purchase decisions.",
    challenge: "Traditional promotional tactics (such as minor discounts) were failing to overcome the high upfront expenditure barrier of brand new furniture during tight economic cycles.",
    insight: "Customers didn't stop wanting updated, aesthetic, clean storage solutions — they simply resisted paying full retail price for an entirely new cupboard. Existing owners already possessed functional frames that simply looked outdated.",
    strategy: "Instead of pushing new unit sales at a loss or spamming discounts, create a 'Cupboard Refresh / Repainting & Refurbishment' service line. This positions Steelman Furniture as a complete home longevity partner while lowering the initial entry price point for customers.",
    execution: [
      "Formulated the strategic campaign framework: 'Give Your Old Cupboard a Brand New Identity'.",
      "Designed the dual-tiered customer offering: Full Purchase vs. Premium Refurbishment.",
      "Structured a digital campaign roadmap highlighting before/after visual transformation angles.",
      "Defined business logic to utilize existing factory painter capacity during low-demand manufacturing windows.",
      "Outlined lead generation funnels targeting homeowners looking for budget-friendly interior upgrades."
    ],
    resultsAndImpact: "Created a strategic framework that turns a purchase objection into a distinct, high-margin service line, building new customer touchpoints and fostering brand affinity among budget-conscious audiences.",
    keyLearning: "When price is a barrier, don't just discount the product — re-examine the customer's true job-to-be-done and innovate around an alternative service model.",
    placeholders: [
      {
        id: "steelman-campaign-flyer",
        label: "CAMPAIGN STRATEGY & REFURBISHMENT CONCEPT - STEELMAN FURNITURE",
        type: "campaign",
        description: "Repainting & Refurbishment Campaign Strategy visual for Steelman Furniture.",
        defaultImage: steelmanImg
      }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    number: "03",
    title: "REAL ESTATE MARKETING",
    subtitle: "Architecting Multi-Property Social Presence & Performance Lead Pipelines",
    category: "LEAD GENERATION",
    clientOrIndustry: "Real Estate & Residential Development",
    role: "Social Media & Lead Gen Strategist",
    timeline: "Account Management",
    summary: "Managed organic social channels and structured lead generation funnels for two real estate client accounts, translating property features into compelling digital narratives.",
    heroHeadline: "Building Digital Credibility & Buyer Inquiry Funnels",
    context: "Real estate investments involve high emotional and financial consideration. Managing social media for two distinct real estate accounts required balancing architectural storytelling, developer credibility, and direct lead acquisition.",
    challenge: "Distinguishing property listings in a saturated digital market where competitors rely on repetitive static floor plans and generic sales graphics.",
    insight: "High-value property buyers respond to lifestyle visualization and transparent developer updates rather than aggressive sales pitches. Social content must evoke trust before requesting contact details.",
    strategy: "Developed structured content funnels combining aspirational property walk-throughs, construction progress updates, locality highlights, and targeted lead generation ad campaigns.",
    execution: [
      "Curated dynamic monthly social media calendars across multiple residential project profiles.",
      "Designed content pillars focusing on Location Convenience, Floorplan Highlights, and Buyer Advice.",
      "Maintained strict posting cadences and synchronized listing launches with paid Meta lead ads.",
      "Monitored key digital metrics (reach, click-through rates, lead form completion rates).",
      "Optimized caption copy and call-to-actions to maximize direct inquiry form conversions."
    ],
    resultsAndImpact: "Maintained active digital presence across both client accounts, improving inquiry lead quality through informative pre-click content framing.",
    keyLearning: "In high-involvement purchases like real estate, content consistency builds the trust foundation required for high-converting lead generation.",
    placeholders: [
      {
        id: "realestate-lead-form",
        label: "REAL ESTATE MARKETING & LEAD GENERATION STRATEGY",
        type: "campaign",
        description: "Analytics & lead generation campaign creative strategy for Real Estate.",
        defaultImage: realestateImg
      }
    ]
  },
  {
    id: "restaurant-marketing",
    slug: "restaurants",
    number: "04",
    title: "RESTAURANT MARKETING",
    subtitle: "Building Relatable Food Content Pillars & Brand Personality in Ratnagiri",
    category: "CONTENT STRATEGY",
    clientOrIndustry: "Hospitality & Culinary Brands (Ratnagiri)",
    role: "Social Media Marketing Intern",
    timeline: "Internship Period",
    summary: "Elevated three prominent restaurant brands in Ratnagiri by replacing dry promotional posts with engaging, relatable food culture content pillars.",
    heroHeadline: "Transforming Dining Outlets into High-Engagement Digital Brands",
    context: "Handled end-to-end social media operations for three popular restaurants in Ratnagiri. Local dining establishments often struggle with social media because they focus purely on static food photographs without storytelling.",
    challenge: "Moving away from boring, repetitive dish posts to build a distinct brand personality for each restaurant while driving local foot traffic.",
    insight: "People don't just go out for food; they go out for experiences, cravings, and social connections. Content that captures humor, kitchen behind-the-scenes, and relatable dining moments drives organic shares and local viral reach.",
    strategy: "Formulated custom content pillars for each restaurant (e.g., Behind The Kitchen Counter, Weekend Cravings, Local Foodie Humor, Staff Highlights) to make the brands conversational and community-focused.",
    execution: [
      "Designed tailored content strategies and monthly calendars for 3 individual dining establishments.",
      "Conceptualized short-form video/Reels concepts highlighting fresh ingredients and signature recipes.",
      "Structured localized copy tone matching Ratnagiri's vibrant regional food culture.",
      "Scheduled posts during peak hunger decision hours (mid-afternoon and early weekend evenings).",
      "Tracked post engagement, comment sentiment, and audience growth patterns."
    ],
    resultsAndImpact: "Established vibrant, recognizable social identities for all 3 restaurants, transforming static menus into engaging local digital destinations.",
    keyLearning: "Great food marketing sells the experience around the plate. Personality and humor convert passive scrollers into active diners.",
    placeholders: [
      {
        id: "restaurant-pillars-graphic",
        label: "CONTENT STRATEGY & SOCIAL MEDIA - RESTAURANT MARKETING",
        type: "campaign",
        description: "Content strategy & brand positioning diagram for Ratnagiri dining establishments.",
        defaultImage: restaurantImg
      }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Social Media Marketing Intern",
    company: "Maitra Entertainment",
    location: "Mumbai, India",
    period: "March 2026 – July 2026",
    category: "Entertainment & Public Sector Projects",
    description: "Operated at the core of social media operations, influencer curation, and performance marketing across entertainment campaigns and government initiatives.",
    keyHighlight: "Shortlisted 80+ qualified influencers within 24 hours for a time-sensitive government project.",
    caseStudySlug: "maitra-entertainment",
    responsibilities: [
      "Drafted comprehensive social media strategy frameworks and monthly publishing calendars.",
      "Managed rapid-turnaround influencer identification and vetting databases.",
      "Executed Meta Ads Manager campaigns targeting specific geographic and interest demographics.",
      "Monitored multi-channel publishing workflows and analyzed end-of-campaign metric reports."
    ]
  },
  {
    id: "exp-2",
    role: "Social Media Strategist",
    company: "Real Estate Client Accounts (2 Brands)",
    location: "Mumbai, India",
    period: "Account Management",
    category: "Real Estate & Lead Generation",
    description: "Designed lead generation pipelines and structured architectural storytelling across two active property development accounts.",
    caseStudySlug: "real-estate",
    responsibilities: [
      "Crafted content calendars aligned with project launch milestones and buyer inquiries.",
      "Developed visual post assets and short-form video reels highlighting project USPs.",
      "Monitored social media metrics and lead form submission metrics to optimize post timing."
    ]
  },
  {
    id: "exp-3",
    role: "Social Media Marketing Intern",
    company: "Ratnagiri Restaurant Accounts (3 Establishments)",
    location: "Ratnagiri, India",
    period: "Internship Period",
    category: "Hospitality & Culinary Brands",
    description: "Transformed social media presence for 3 local dining outlets through relatable, humor-infused content pillars.",
    caseStudySlug: "restaurants",
    responsibilities: [
      "Built custom social media calendars tailored to regional food preferences and dining trends.",
      "Engineered high-engagement content pillars (Behind-The-Scenes, Local Cravings, Weekend Specials).",
      "Maintained consistent posting schedules timed around key meal decision windows."
    ]
  },
  {
    id: "exp-4",
    role: "Brand Strategy Consultant",
    company: "Steelman Furniture",
    location: "Project Strategy",
    period: "Campaign Concept",
    category: "Furniture & Brand Strategy",
    description: "Developed an alternative repainting service strategy to overcome high new-cupboard purchase friction.",
    caseStudySlug: "steelman",
    responsibilities: [
      "Analyzed pricing objections in the home furniture category.",
      "Formulated the 'Refresh Your Cupboard' strategic service framework.",
      "Structured messaging hierarchies balancing economical value with aesthetic transformation."
    ]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "BRAND & STRATEGY",
    subtitle: "Core analytical & conceptual positioning competencies",
    skills: [
      { name: "Brand Management", level: "Core Expertise", description: "Defining brand identity, positioning frameworks, and voice consistency." },
      { name: "Marketing Strategy", level: "Core Expertise", description: "Translating business constraints into actionable campaign blueprints." },
      { name: "Campaign Strategy", level: "Core Expertise", description: "Designing multi-touchpoint customer journey flows." },
      { name: "Creative Thinking", level: "Strong Proficiency", description: "Ideating unexpected campaign angles and content hooks." },
      { name: "Strategic Problem Solving", level: "Core Expertise", description: "Turning purchase objections into alternative business models." }
    ]
  },
  {
    title: "SOCIAL MEDIA & CONTENT",
    subtitle: "Engagement, community & creator execution",
    skills: [
      { name: "Social Media Strategy", level: "Core Expertise", description: "Building organic growth and engagement channels." },
      { name: "Content Planning & Calendars", level: "Core Expertise", description: "Structuring monthly publishing workflows." },
      { name: "Content Pillars Architecture", level: "Core Expertise", description: "Grouping brand stories into digestible themes." },
      { name: "Influencer Marketing", level: "Strong Proficiency", description: "Creator discovery, vetting, and campaign curation." },
      { name: "Community Engagement", level: "Strong Proficiency", description: "Fostering active audience interactions." }
    ]
  },
  {
    title: "DIGITAL & PERFORMANCE",
    subtitle: "Targeting, analytics & search fundamentals",
    skills: [
      { name: "Digital Marketing", level: "Strong Proficiency", description: "Holistic online brand communication channels." },
      { name: "Meta Ads & Paid Social", level: "Working Knowledge", description: "Campaign setup, demographic targeting, and budgeting." },
      { name: "Lead Generation", level: "Working Knowledge", description: "Building pre-click intent for high-involvement decisions." },
      { name: "SEO Basics", level: "Working Knowledge", description: "Keyword research, on-page, and off-page fundamentals." }
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    subtitle: "Modern software & AI stack",
    skills: [
      { name: "Meta Business Suite & Ads Manager", level: "Working Knowledge" },
      { name: "Canva", level: "Strong Proficiency" },
      { name: "Google Search Console", level: "Working Knowledge" },
      { name: "Mailchimp", level: "Familiar" },
      { name: "Ubersuggest", level: "Working Knowledge" },
      { name: "Microsoft Excel", level: "Strong Proficiency" },
      { name: "ChatGPT, Claude, Gemini", level: "Strong Proficiency" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Advanced Digital Marketing Course",
    institution: "Moving Digits Institute",
    type: "Professional Certification"
  },
  {
    title: "Advanced Excel",
    institution: "Keerti Institute",
    type: "Data & Spreadsheet Proficiency"
  },
  {
    title: "Generative AI",
    institution: "Microsoft",
    type: "AI Tools & Prompt Engineering"
  },
  {
    title: "Problem Solving & Innovation",
    institution: "Wadhwani Foundation",
    type: "Entrepreneurial Strategy"
  }
];

export const beyondInterestsData: BeyondInterest[] = [
  {
    title: "FITNESS",
    subtitle: "Discipline & High Performance",
    description: "Regular physical conditioning builds focus, mental endurance, and the consistency required for long-term goal execution.",
    editorialNote: "01 / ENDURANCE"
  },
  {
    title: "BAKING",
    subtitle: "Precision Meets Creativity",
    description: "Baking requires strict attention to ratios and chemistry paired with aesthetic presentation — much like balancing marketing metrics with creative storytelling.",
    editorialNote: "02 / CRAFT"
  },
  {
    title: "SPIRITUALITY",
    subtitle: "Perspective & Mindfulness",
    description: "Cultivating inner stillness provides clarity, sharp intuition, and a deeper empathetic understanding of human behavior and motivation.",
    editorialNote: "03 / MINDSET"
  },
  {
    title: "HORSE RIDING",
    subtitle: "Trust, Control & Balance",
    description: "Equestrian discipline teaches subtle communication, non-verbal leadership, and remaining composed under dynamic conditions.",
    editorialNote: "04 / HARMONY"
  }
];
