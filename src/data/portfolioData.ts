import {
  CapabilityItem,
  MetricItem,
  SpectrumRole,
  IntelligencePillar,
  AiPillar,
  ApproachStep,
  CareerStage
} from '../types';

export const HERO_DATA = {
  name: "Sathish Ganesh",
  title: "Talent Acquisition Leader",
  specializations: ["Talent Intelligence", "AI-Enabled Recruiting", "Hiring Operations & Scale"],
  headline: "Building Talent Functions That Scale Businesses.",
  subheadline: "16+ years of experience across Talent Acquisition, technology hiring, talent intelligence, recruitment strategy, employer branding and AI-enabled sourcing — helping organizations build stronger talent pipelines, improve hiring execution and scale teams effectively.",
  corePillars: [
    { label: "TA Strategy & Leadership", desc: "Enterprise operating models & governance" },
    { label: "Talent Intelligence", desc: "Market mapping & predictive talent analytics" },
    { label: "AI-Enabled Recruiting", desc: "Automating discovery while centering human connection" },
    { label: "High-Growth Scale", desc: "Offshore, onshore & cross-border team expansion" },
  ],
  email: "sathish.ganesh@hotmail.com",
  linkedinUrl: "https://www.linkedin.com/in/sathishganesh/",
};

export const WHAT_I_BRING_DATA: CapabilityItem[] = [
  {
    id: "strategic-leadership",
    number: "01",
    title: "Strategic TA Leadership",
    tagline: "Trusted Advisor & Workforce Strategist",
    description: "Building hiring strategies, operating models, processes, metrics and governance aligned with business requirements. Strategic partner to senior leaders for robust workforce planning.",
    keyHighlights: [
      "End-to-end recruitment operating models, capacity models & SLAs",
      "Executive stakeholder alignment & structured workforce planning",
      "Data-backed hiring governance, scorecard design & quality calibration",
      "Recruiter enablement, coaching & functional team scaling"
    ],
    toolkit: ["Capacity Planning", "Scorecard Design", "Stakeholder Governance", "Talent KPIs"],
    businessOutcomes: "Transforms hiring from a transactional ticketing queue into an agile, strategic competitive advantage for executive leadership.",
    iconName: "Compass"
  },
  {
    id: "talent-intelligence",
    number: "02",
    title: "Talent Intelligence",
    tagline: "Market Mapping & Competitive Research",
    description: "Strong capability in competitor mapping & talent intelligence using tools like Talent Neuron, LinkedIn Talent Insights, and Naukri Pulse to shape hiring strategies.",
    keyHighlights: [
      "Talent supply-demand density & compensation benchmarking",
      "Competitor org structure mapping & niche skill clustering",
      "Geographic talent hub viability & remote/hybrid strategy",
      "Predictive pipeline health modeling prior to requisition launch"
    ],
    toolkit: ["Talent Neuron", "LinkedIn Talent Insights", "Naukri Pulse", "Market Heatmaps"],
    businessOutcomes: "Eliminates guesswork, prevents hiring delays, and identifies high-density passive talent pools before kickoff.",
    iconName: "SearchCheck"
  },
  {
    id: "ai-recruiting",
    number: "03",
    title: "AI-Enabled Recruiting",
    tagline: "Modern Tech-Accelerated Sourcing",
    description: "Using AI and modern technology to accelerate research, sourcing, market mapping and recruiter productivity while keeping human relationships at the center.",
    keyHighlights: [
      "Prompt engineering for Boolean expansion & skill adjacency discovery",
      "AI-assisted market scanning & passive profile qualification",
      "Hyper-personalized, value-driven candidate outreach generation",
      "Automated pipeline triage, scheduling workflows & telemetry"
    ],
    toolkit: ["Generative AI Models", "Boolean Automation", "Talent Scrapers", "Workflow Accelerators"],
    businessOutcomes: "Multiplies recruiter sourcing speed by 3x–4x while elevating personalized candidate engagement quality.",
    iconName: "Cpu"
  },
  {
    id: "talent-attraction",
    number: "04",
    title: "Talent Attraction & Employer Branding",
    tagline: "EVP & Candidate Engagement",
    description: "Building employer branding, EVP and candidate engagement strategies that improve attraction and hiring outcomes in competitive markets.",
    keyHighlights: [
      "Compelling Employer Value Proposition (EVP) narrative framing",
      "High-touch candidate journey design from first touch to onboarding",
      "Diversity, equity, and inclusion (DEI) targeted attraction models",
      "Brand amplification across technical and professional communities"
    ],
    toolkit: ["EVP Architecture", "Candidate Journey Mapping", "Inclusive Sourcing", "Talent Branding"],
    businessOutcomes: "Reduces offer rejection rates and strengthens inbound organic brand pull across niche candidate communities.",
    iconName: "Sparkles"
  },
  {
    id: "hiring-execution",
    number: "05",
    title: "Hiring Strategy & Execution",
    tagline: "Full-Spectrum Cross-Functional Delivery",
    description: "Managing hiring across volume, lateral, specialist, technology, product, engineering, operations, sales and corporate functions.",
    keyHighlights: [
      "High-velocity volume hiring frameworks with strict quality bars",
      "Specialist & leadership executive search execution",
      "Global multi-regional hiring programs (US, Canada, APAC, Offshore)",
      "Early career & graduate hiring bootcamps and structured onboarding"
    ],
    toolkit: ["Volume Engines", "Niche Sourcing", "Global Delivery Models", "Bar Raiser Panels"],
    businessOutcomes: "Consistent, dependable hiring throughput delivered on time without compromising candidate quality or cultural bar.",
    iconName: "TrendingUp"
  },
  {
    id: "recruitment-transformation",
    number: "06",
    title: "Recruitment Transformation",
    tagline: "Process Optimization & Automation",
    description: "Improving processes, recruiter effectiveness, stakeholder governance, metrics, automation and candidate experience.",
    keyHighlights: [
      "ATS/CRM workflow optimization and pipeline hygiene standards",
      "Elimination of process friction points & candidate drop-off bottlenecks",
      "Recruiter scorecarding, capability matrices & agile sprints",
      "Comprehensive hiring analytics dashboards and cost-per-hire optimization"
    ],
    toolkit: ["Process Engineering", "ATS Optimization", "Funnel Analytics", "Agile TA"],
    businessOutcomes: "Drives measurable cost savings, accelerates time-to-fill, and establishes a scalable foundation for business expansion.",
    iconName: "Layers"
  }
];

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: "metric-ta-function",
    value: "Built TA Function",
    label: "End-to-End Function Architecture",
    description: "Established hiring strategies, processes, KPIs, scorecards, and onboarding frameworks from the ground up for a high-growth tech organization.",
    category: "Scale"
  },
  {
    id: "metric-cost-savings",
    value: "$18M",
    numericTarget: 18,
    prefix: "$",
    suffix: "M",
    label: "Recruitment Cost Savings",
    description: "Delivered $18M in recruitment cost savings through a strategic offshore hiring model and internal sourcing capability.",
    category: "Financial"
  },
  {
    id: "metric-annual-hires",
    value: "700–800",
    label: "Annual Hires Managed",
    description: "Annual hiring programs managed across multiple business functions, specialist domains, and high-volume talent segments.",
    category: "Growth"
  },
  {
    id: "metric-offer-dropoffs",
    value: "50% → 10%",
    label: "Offer Drop-Off Reduction",
    description: "Dramatically reduced offer drop-offs from 50% down to 10% through high-touch candidate engagement and hiring process alignment.",
    category: "Efficiency"
  },
  {
    id: "metric-diversity",
    value: "30%",
    numericTarget: 30,
    suffix: "%",
    label: "Diversity Hiring Improvement",
    description: "Improvement in diversity hiring outcomes through targeted sourcing channels and inclusive hiring practice governance.",
    category: "Diversity"
  },
  {
    id: "metric-graduate-hires",
    value: "3 Months",
    label: "Structured Graduate Hiring",
    description: "Built and executed a structured early-career hiring program, delivering 10+ graduate hires within three months.",
    category: "Early Careers"
  },
  {
    id: "metric-team-scale",
    value: "5 → 20",
    label: "Recruiter Team Scaled",
    description: "Scaled the US & Canada recruitment team from 5 to 20 recruiters, significantly expanding recruitment capacity to support business growth.",
    category: "Scale"
  }
];

export const HIRING_SPECTRUM_DATA: SpectrumRole[] = [
  {
    id: "campus",
    title: "Campus Hiring",
    category: "Early Careers",
    sourcingChannels: ["Targeted University Drives", "Hackathons & Coding Challenges", "Intern-to-FTE Conversion"],
    assessmentFramework: "Standardized Aptitude, Problem-Solving & Cultural Alignment Tests",
    turnaroundFocus: "Structured Cohorts (3-month rapid onboarding programs)",
    businessImpact: "Builds sustainable grassroots talent pipelines and strengthens long-term talent bench."
  },
  {
    id: "volume",
    title: "Volume Hiring",
    category: "Operational Scale",
    sourcingChannels: ["Database Mining", "Targeted Portals", "Niche Community Drives", "Employee Referrals"],
    assessmentFramework: "Automated Prescreening, Asynchronous Assessments & Batch Calibration",
    turnaroundFocus: "High Velocity (700–800 annual throughput)",
    businessImpact: "Supplies business units with consistent staffing while maintaining strict cost-per-hire control."
  },
  {
    id: "lateral",
    title: "Lateral Hiring",
    category: "Mid-Career Depth",
    sourcingChannels: ["Talent Intelligence Mapping", "Direct Outbound Sourcing", "Alumni Networks"],
    assessmentFramework: "Functional Competency Scorecards & Structured Behavioral Panels",
    turnaroundFocus: "Predictable 30–45 Day SLA Cycles",
    businessImpact: "Infuses immediate domain depth and domain-proven subject matter expertise."
  },
  {
    id: "specialist",
    title: "Specialist Hiring",
    category: "Niche Domain Expertise",
    sourcingChannels: ["Deep Web & Technical Repositories", "Subject-Matter Conferences", "Passive Talent Pipelines"],
    assessmentFramework: "Deep-Dive Technical Calibration & Case Scenario Defense",
    turnaroundFocus: "High Precision & Low Rejection Rates",
    businessImpact: "Solves rare, highly specialized capability bottlenecks that standard recruiting channels miss."
  },
  {
    id: "technology",
    title: "Technology Hiring",
    category: "Core Engineering",
    sourcingChannels: ["GitHub / Tech Forums", "Open Source Networks", "AI-Assisted Boolean Discovery"],
    assessmentFramework: "System Architecture, Coding Standards & Code Review Panels",
    turnaroundFocus: "Technical Quality Bar & Offer Conversion",
    businessImpact: "Scales foundational software engineering, infrastructure, and platform delivery teams."
  },
  {
    id: "product-engineering",
    title: "Product & Engineering",
    category: "Tech & Architecture",
    sourcingChannels: ["Direct Headhunting", "Product Communities", "Tech Talent Intelligence"],
    assessmentFramework: "Product Sense, Architecture Design & Cross-Functional Collaboration",
    turnaroundFocus: "High Cultural Alignment & Bar Raiser Governance",
    businessImpact: "Accelerates roadmap execution for core software, SaaS, and platform initiatives."
  },
  {
    id: "ai-digital",
    title: "AI & Digital",
    category: "Emerging Tech",
    sourcingChannels: ["AI Research Labs", "arXiv / Open Source AI Repositories", "Digital Transformation Hubs"],
    assessmentFramework: "Model Architecture, MLOps, Algorithm Optimization & Applied AI Evaluation",
    turnaroundFocus: "Competitive Positioning & EVP Advantage",
    businessImpact: "Equips the enterprise with cutting-edge artificial intelligence and automation competencies."
  },
  {
    id: "sales-ops",
    title: "Sales & Operations",
    category: "Revenue & Delivery",
    sourcingChannels: ["Targeted Competitor Mapping", "Sales Networks", "Operational Hubs"],
    assessmentFramework: "Quota Track Record, Territory Management & Process Rigor",
    turnaroundFocus: "Fast Time-to-Productivity",
    businessImpact: "Directly impacts revenue generation, client onboarding speed, and operational continuity."
  },
  {
    id: "corporate",
    title: "Corporate Functions",
    category: "Enterprise Backbone",
    sourcingChannels: ["Professional Networks", "Strategic Referrals", "Executive Talent Banks"],
    assessmentFramework: "Strategic Thinking, Compliance, Risk Governance & Financial Acumen",
    turnaroundFocus: "High Confidentiality & Stakeholder Alignment",
    businessImpact: "Strengthens finance, legal, human resources, and business operations foundations."
  },
  {
    id: "leadership",
    title: "Leadership & Critical Roles",
    category: "Executive Search",
    sourcingChannels: ["Discreet Executive Outreach", "Talent Intelligence Org Mapping", "Executive Referrals"],
    assessmentFramework: "Executive Competency Matrix, Leadership Vision & 360 Reference Audits",
    turnaroundFocus: "White-Glove Executive Candidate Experience",
    businessImpact: "Secures visionary leaders who define long-term business strategy and organizational culture."
  }
];

export const TALENT_INTELLIGENCE_PILLARS: IntelligencePillar[] = [
  {
    id: "market-intel",
    title: "Market Intelligence",
    tagline: "Macro Supply, Demand & Cost Analysis",
    description: "Comprehensive evaluation of talent pools across geographic hubs, compensation bands, talent migration flows, and competitive availability before requisition kickoff.",
    metrics: [
      { label: "Supply vs Demand Index", value: "Real-time Ratio" },
      { label: "Compensation Calibration", value: "P25-P50-P75-P90" },
      { label: "Hub Viability", value: "Cost vs Depth Score" }
    ],
    deliverables: [
      "Geographic talent heatmaps comparing offshore, nearshore, and onshore viability",
      "Salary and total-rewards competitiveness benchmarking",
      "Skill scarcity indices to establish realistic SLA expectations"
    ]
  },
  {
    id: "talent-mapping",
    title: "Talent Mapping",
    tagline: "Org Depth & Skill Clustering",
    description: "Granular organizational mapping of target industry sectors, identifying reporting hierarchies, skill adjacencies, and passive candidate density without relying on active job boards.",
    metrics: [
      { label: "Passive Pool Coverage", value: "85%+" },
      { label: "Skill Adjacency Reach", value: "3x Breadth" },
      { label: "Org Depth Charting", value: "Tier 1-3 Mapping" }
    ],
    deliverables: [
      "Tiered target company landscape & department structure teardowns",
      "Skill taxonomy mapping to identify hidden adjacent candidate profiles",
      "Pre-vetted passive talent bench ready for strategic outreach"
    ]
  },
  {
    id: "sourcing-strategy",
    title: "Sourcing Strategy",
    tagline: "Targeted Outbound & Channel Optimization",
    description: "Designing hyper-targeted multi-channel engagement blueprints utilizing predictive sourcing tools, customized Boolean search architecture, and personalized messaging sequences.",
    metrics: [
      { label: "Outreach Response Rate", value: "42% Avg" },
      { label: "Sourcing Cycle Time", value: "-35% Faster" },
      { label: "Direct Sourcing Ratio", value: "80%+ In-house" }
    ],
    deliverables: [
      "Custom Boolean & search syntax libraries tailored to specialized roles",
      "Multi-touch value-driven outreach cadence designed for senior talent",
      "Direct sourcing playbooks that minimize external agency reliance"
    ]
  }
];

export const AI_RECRUITMENT_PILLARS: AiPillar[] = [
  {
    id: "ai-research",
    title: "Research",
    tagline: "AI-Assisted Market Research",
    description: "Rapidly synthesizes industry trends, competitor movements, compensation fluctuations, and emerging tech stacks using specialized LLMs and data parsers.",
    aiWorkflow: "Automates market briefings, company profile digests, and tech stack skill breakdowns in minutes instead of days.",
    humanElement: "Interprets business context, validates credibility, and translates research into strategic executive briefing decks.",
    productivityMultiplier: "4x Speed"
  },
  {
    id: "ai-mapping",
    title: "Mapping",
    tagline: "Faster Talent & Skill Mapping",
    description: "Identifies non-obvious skill adjacencies, cross-industry equivalents, and semantic skill graphs across global talent databases.",
    aiWorkflow: "Generates semantic skill graph expansions (e.g. mapping legacy distributed systems skills to modern cloud/AI infra).",
    humanElement: "Determines cultural fit, organizational adaptability, and true depth of hands-on technical ownership.",
    productivityMultiplier: "3.5x Coverage"
  },
  {
    id: "ai-sourcing",
    title: "Sourcing",
    tagline: "Improved Search & Discovery",
    description: "Constructs complex multi-tiered Boolean syntax, scrapes niche repositories, and uncovers passive candidate footprints across developer platforms.",
    aiWorkflow: "Dynamically builds refined search strings across GitHub, technical papers, patents, and community directories.",
    humanElement: "Conducts personalized, nuanced first-touch outreach that speaks directly to a candidate's actual contributions.",
    productivityMultiplier: "3x Throughput"
  },
  {
    id: "ai-engagement",
    title: "Candidate Engagement",
    tagline: "Personalized Candidate Communication",
    description: "Drafts tailored, highly contextual value propositions connecting an open role's mission to a candidate's specific background.",
    aiWorkflow: "Analyzes candidate public work to draft tailored conversation starters and value-aligned messaging angles.",
    humanElement: "Leads authentic, empathetic dialogue, addresses life circumstances, and builds lasting professional rapport.",
    productivityMultiplier: "2.5x Response"
  },
  {
    id: "ai-decision",
    title: "Decision Support",
    tagline: "Combining Data, Tech & Recruiter Judgment",
    description: "Aggregates pipeline telemetry, funnel pass-through ratios, and scorecard calibrations to guide hiring managers.",
    aiWorkflow: "Synthesizes interview feedback notes to highlight potential biases, scorecard discrepancies, and funnel bottlenecks.",
    humanElement: "Facilitates debrief discussions, resolves conflicting feedback, and coaches leaders on hiring bar consistency.",
    productivityMultiplier: "2x Alignment"
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    stepNumber: "01",
    title: "Market Intel",
    subtitle: "Understand the Market First",
    shortDesc: "Every search begins with market intelligence, competitor mapping, talent availability, and organizational context.",
    detailedInsight: "Before opening requisitions or writing job descriptions, I conduct rigorous market research. We evaluate talent supply-demand ratios, salary expectations, competitor hiring trends, and regional availability to set realistic SLAs and strategic positioning.",
    artifactsProduced: ["Market Availability Report", "Compensation Benchmark Matrix", "Competitor Talent Map"],
    executionKey: "Market Intel"
  },
  {
    stepNumber: "02",
    title: "Deep Sourcing + AI",
    subtitle: "Tech-Augmented Discovery",
    shortDesc: "Leverage AI-assisted search, Boolean architectures, and deep web mapping to uncover high-impact passive talent.",
    detailedInsight: "Top-tier talent is rarely browsing job boards. By combining deep-web sourcing across open source repositories, niche communities, and custom Boolean syntax with AI-driven taxonomy expansion, we discover passive candidates faster while preserving high-touch human personalization.",
    artifactsProduced: ["AI & Semantic Sourcing Workflows", "Custom Boolean Architecture", "Passive Candidate Longlist", "Talent Community Pipelines"],
    executionKey: "Deep Sourcing + AI"
  },
  {
    stepNumber: "03",
    title: "Engagement",
    subtitle: "Create Genuine Interest",
    shortDesc: "Personalized, value-driven outreach designed to create meaningful conversations.",
    detailedInsight: "Generic template messages yield poor response rates. I formulate hyper-personalized, value-proposition-led outreach highlighting the strategic challenge, career trajectory, and technical autonomy of the opportunity.",
    artifactsProduced: ["Role EVP Narrative", "Contextualized Outreach Sequences", "Candidate Value Briefs"],
    executionKey: "Engagement"
  },
  {
    stepNumber: "04",
    title: "Trust & Credibility",
    subtitle: "Advise Senior Leaders",
    shortDesc: "Build trust through insight, transparency, professionalism, and strong candidate relationships.",
    detailedInsight: "Acting as a trusted strategic advisor, I align hiring managers, interview panels, and executive leaders on standard evaluation criteria. Through transparency and market realism, we create mutual trust that keeps candidates engaged throughout.",
    artifactsProduced: ["Standardized Interview Scorecards", "Calibration Benchmarks", "Bar Raiser Guidelines"],
    executionKey: "Trust & Credibility"
  },
  {
    stepNumber: "05",
    title: "Execution",
    subtitle: "Disciplined Search Management",
    shortDesc: "Structured pipelines, stakeholder alignment, consistent follow-ups, and data-driven decision-making.",
    detailedInsight: "Recruitment excellence requires operational discipline. I manage pipeline throughput with tight feedback loops, daily candidate touchpoints, structured debriefs, and proactive offer pre-closing to maintain the 50% → 10% drop-off reduction.",
    artifactsProduced: ["Pipeline Velocity Dashboard", "Debrief Decision Matrix", "Offer Pre-Closing Checklist"],
    executionKey: "Execution"
  }
];

export const CAREER_EVOLUTION_DATA: CareerStage[] = [
  {
    stageNumber: "01",
    title: "Technology Foundation",
    timeframe: "Technical Roots",
    focusArea: "Engineering & Technical Understanding",
    summary: "Started career in technology and engineering roles, building an in-depth understanding of technical skills, architectures, software engineering lifecycles, and technology environments.",
    progressionMetrics: {
      scope: "Individual Technical Contributor",
      complexity: "Engineering systems & codebases",
      leadership: "Technical problem-solving",
      businessImpact: "Core technical delivery & technology fluency"
    },
    keyMilestones: [
      "Deep immersion in programming languages, databases, and systems architectures",
      "Hands-on grasp of engineering team dynamics, developer pain points, and technical workflows",
      "Built the foundational credibility required to assess complex technical skills accurately"
    ]
  },
  {
    stageNumber: "02",
    title: "Recruitment & Search",
    timeframe: "Technical Search Mastery",
    focusArea: "Global Sourcing & Executive Search",
    summary: "Transitioned into technical recruitment and leadership hiring, working across global markets and building deep expertise in identifying, qualifying, and engaging hard-to-find talent.",
    progressionMetrics: {
      scope: "Global Market Requisitions (US, Canada, APAC)",
      complexity: "Niche specialist & leadership search",
      leadership: "Candidate advisory & sourcing strategy",
      businessImpact: "Consistent high-precision technical placements"
    },
    keyMilestones: [
      "Mastery of advanced Boolean search, candidate profiling, and passive candidate engagement",
      "Navigated competitive cross-border talent markets across the US and international regions",
      "Cultivated a reputation for closing critical, highly specialized engineering requisitions"
    ]
  },
  {
    stageNumber: "03",
    title: "Strategic Talent Acquisition",
    timeframe: "Broadened TA Architecture",
    focusArea: "Multi-Segment Hiring & Operations",
    summary: "Expanded into technology, leadership, volume hiring, employer branding, talent intelligence, diversity hiring, and comprehensive workforce strategy across business functions.",
    progressionMetrics: {
      scope: "Full-Spectrum Hiring (Volume to Executive)",
      complexity: "Multi-functional talent programs & diversity frameworks",
      leadership: "Cross-functional stakeholder management",
      businessImpact: "700–800 annual hiring programs with 30% diversity gains"
    },
    keyMilestones: [
      "Designed and executed large-scale hiring programs across technology, product, and operations",
      "Introduced market intelligence-backed sourcing models using specialized intelligence platforms",
      "Pioneered diversity hiring frameworks and early-career graduate recruitment bootcamps"
    ]
  },
  {
    stageNumber: "04",
    title: "TA Leadership & Transformation",
    timeframe: "Executive TA Leadership",
    focusArea: "Function Building & Global Scaling",
    summary: "Progressed into building Talent Acquisition functions, scaling recruitment teams, establishing hiring frameworks, implementing AI-enabled recruitment, and partnering with senior leadership.",
    progressionMetrics: {
      scope: "Global TA Function & Recruiter Teams (5 → 20)",
      complexity: "Enterprise transformation & offshore models",
      leadership: "Executive Leadership & Board-level Partner",
      businessImpact: "$18M cost savings & 50% → 10% drop-off reduction"
    },
    keyMilestones: [
      "Built complete Talent Acquisition function from the ground up (processes, scorecards, KPIs)",
      "Scaled international recruitment organization from 5 to 20 recruiters",
      "Architected strategic offshore hiring model delivering $18M in total cost savings",
      "Spearheaded modern AI-enabled sourcing adoption, boosting recruiter capacity"
    ]
  }
];
