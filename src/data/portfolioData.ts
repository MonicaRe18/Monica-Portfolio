/**
 * Strict verified data for Monica Remon (Bilingual EN / AR)
 * With updated Opreix naming and expanded Technology & Platforms
 */

export interface BilingualText {
  en: string;
  ar: string;
}

export interface ProjectData {
  id: string;
  title: BilingualText;
  client: BilingualText;
  scope: BilingualText;
  categories: string[];
  categoriesAr: string[];
  contribution: BilingualText[];
  visualConcept: BilingualText;
  architectureDetails: {
    level: BilingualText;
    flow: { en: string; ar: string }[];
    governanceNote: BilingualText;
  };
}

export interface CareerStage {
  id: string;
  company: BilingualText;
  period: BilingualText;
  role?: BilingualText;
  isCurrent?: boolean;
  highlight?: boolean;
  scopePoints?: BilingualText[];
}

export interface CompetencyGroup {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  items: BilingualText[];
  description: BilingualText;
}

export interface PlatformItem {
  id: string;
  name: string;
  category: "erp" | "portal" | "ai" | "automation" | "integration";
  categoryLabel: BilingualText;
  description: BilingualText;
  logoType: string;
}

export const PORTFOLIO_INFO = {
  name: {
    en: "MONICA REMON",
    ar: "مونيكا ريمون",
  },
  role: {
    en: "Senior Business Systems Consultant & Team Lead",
    ar: "استشاري أول نظم أعمال وقائد فريق استشارات وظيفية",
  },
  platform: {
    en: "Microsoft Dynamics 365 Finance & Operations",
    ar: "مايكروسوفت دايناميكس 365 المالية والعمليات (D365 F&O)",
  },
  supportingLine: {
    en: "Functional Leadership • Business Analysis • ERP Solution Design • Solution Engineering",
    ar: "القيادة الوظيفية • تحليل الأعمال • تصميم حلول ERP • هندسة الحلول البرمجية",
  },
  contact: {
    email: "monikaremon39@gmail.com",
    phone: "01030610715",
    phoneFormatted: "+20 103 061 0715",
    linkedIn: "https://linkedin.com/in/mon-ica-60bab6324",
    linkedInHandle: "linkedin.com/in/mon-ica-60bab6324",
  },
  currentTenure: {
    company: {
      en: "Paradise Artificial Intelligence / Paradise AI Solutions",
      ar: "شركة بارادايس للذكاء الاصطناعي / بارادايس لحلول الذكاء الاصطناعي",
    },
    joinedDate: {
      en: "January 2023",
      ar: "يناير 2023",
    },
    status: {
      en: "Present",
      ar: "حتى الآن",
    },
    role: {
      en: "Senior Business Systems Consultant & Team Lead",
      ar: "استشاري أول نظم أعمال وقائد فريق",
    },
  },
};

export const VALUE_PILLARS = [
  {
    title: {
      en: "Understand the Business",
      ar: "فهم عميق لواقع الأعمال",
    },
    description: {
      en: "Deep dive into real-world operational workflows, institutional policies, and day-to-day pain points before proposing system structures.",
      ar: "دراسة دقيقة للإجراءات التشغيلية والسياسات المؤسسية قبل اقتراح أي هيكل تقني أو وظيفي.",
    },
  },
  {
    title: {
      en: "Design the Right Process",
      ar: "تصميم المسار الإجرائي الأمثل",
    },
    description: {
      en: "Harmonize complex standard operating procedures with Dynamics 365 standard capabilities to minimize friction and prevent over-engineering.",
      ar: "مواءمة إجراءات العمل التشغيلية مع معايير Dynamics 365 لمنع التعقيد وضمان الانسيابية.",
    },
  },
  {
    title: {
      en: "Build the Right Solution",
      ar: "بناء الحل التقني الدقيق",
    },
    description: {
      en: "Bridge functional business architecture with robust technical configurations, customizations, and seamless web/integration extensions.",
      ar: "الربط المحكم بين البنية الوظيفية والإعدادات الفنية، والامتدادات الرقمية والتكاملات البرمجية.",
    },
  },
  {
    title: {
      en: "Enable Sustainable Adoption",
      ar: "تمكين التبني المؤسسي المستدام",
    },
    description: {
      en: "Secure long-term transformation through rigorous UAT governance, structured stakeholder training, and continuous operational readiness.",
      ar: "ضمان نجاح التحول الرقمي عبر حوكمة اختبارات قبول المستخدم (UAT) والتدريب الميداني والجاهزية للتشغيل الحي.",
    },
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    id: "erp-dynamics",
    title: { en: "ERP & Dynamics", ar: "أنظمة ERP و Dynamics" },
    subtitle: { en: "Core Enterprise Platform", ar: "المنصة المؤسسية الأساسية" },
    description: {
      en: "Specialized in Microsoft Dynamics 365 Finance & Operations, driving cross-module implementations with deep functional HR focus.",
      ar: "تخصص عميق في Microsoft Dynamics 365 F&O مع قيادة مشاريع متكاملة عبر الموديولات والتركيز على الموارد البشرية.",
    },
    items: [
      { en: "Microsoft Dynamics 365 F&O", ar: "Microsoft Dynamics 365 F&O" },
      { en: "Human Resources", ar: "الموارد البشرية (Human Resources)" },
      { en: "Finance", ar: "المالية (Finance)" },
      { en: "Supply Chain", ar: "سلاسل الإمداد (Supply Chain)" },
      { en: "Cross-Module Solution Delivery", ar: "تسليم حلول شاملة عبر الموديولات" },
    ],
  },
  {
    id: "functional-leadership",
    title: { en: "Functional Leadership", ar: "القيادة الوظيفية" },
    subtitle: { en: "Team Supervision & Governance", ar: "إدارة الفرق والحوكمة" },
    description: {
      en: "Guiding functional consultants, orchestrating client workshops, aligning executive expectations, and ensuring design integrity.",
      ar: "توجيه الاستشاريين الوظيفيين، إدارة ورش العمل مع القيادات، وتأمين التوافق الكامل مع متطلبات المشروع.",
    },
    items: [
      { en: "Functional Consulting Leadership", ar: "قيادة الاستشارات الوظيفية" },
      { en: "Team Supervision", ar: "الإشراف على فرق العمل" },
      { en: "Solution Governance", ar: "حوكمة الحلول الرقمية" },
      { en: "Stakeholder Alignment", ar: "التوافق مع أصحاب المصلحة" },
      { en: "Functional Review", ar: "المراجعة الوظيفية والاعتماد" },
    ],
  },
  {
    id: "business-analysis",
    title: { en: "Business Analysis", ar: "تحليل الأعمال" },
    subtitle: { en: "Requirements to Solution Blueprint", ar: "من المتطلبات إلى المخطط الوظيفي" },
    description: {
      en: "Translating ambiguous public-sector and enterprise procedures into formal functional requirement documents and fit-gap matrices.",
      ar: "تحويل الإجراءات الحكومية والمؤسسية المعقدة إلى وثائق متطلبات وظيفية رسمية وتحليل الفجوات (Fit-Gap).",
    },
    items: [
      { en: "Requirements Elicitation", ar: "استخلاص المتطلبات" },
      { en: "Business Process Analysis", ar: "تحليل إجراءات الأعمال" },
      { en: "Process Mapping", ar: "رسم مسارات العمليات" },
      { en: "Fit-Gap Analysis", ar: "تحليل الفجوات والملاءمة (Fit-Gap)" },
      { en: "Functional Requirements", ar: "صياغة المتطلبات الوظيفية" },
      { en: "Customization Analysis", ar: "تحليل التخصيصات المطلوبة" },
    ],
  },
  {
    id: "enterprise-delivery",
    title: { en: "Enterprise Delivery", ar: "التسليم المؤسسي والتشغيل" },
    subtitle: { en: "Implementation to Operational Run", ar: "من التنفيذ إلى الإطلاق الحي" },
    description: {
      en: "Hands-on ownership of the entire rollout lifecycle from initial blueprinting through testing cycles to post-go-live operational support.",
      ar: "إشراف شامل على دورة حياة المشروع من التصميم المبدئي واختبارات القبول وحتى الدعم التشغيلي بعد الإطلاق.",
    },
    items: [
      { en: "Functional Design", ar: "التصميم الوظيفي (FDD)" },
      { en: "UAT (User Acceptance Testing)", ar: "اختبارات قبول المستخدمين (UAT)" },
      { en: "Training & Enablement", ar: "التدريب والتمكين المؤسسي" },
      { en: "Go-Live Readiness", ar: "جاهزية الإطلاق الحي (Go-Live)" },
      { en: "Operational Support", ar: "الدعم التشغيلي واستقرار النظام" },
    ],
  },
  {
    id: "digital-solutions",
    title: { en: "Digital Solutions", ar: "الحلول الرقمية وبوابات الويب" },
    subtitle: { en: "Front-End & Extended Systems", ar: "الواجهات الأمامية والأنظمة الموسعة" },
    description: {
      en: "Extending ERP reach through custom self-service interfaces, front-end solution design, and enterprise integration touchpoints.",
      ar: "توسيع نطاق نظام ERP عبر بوابات الخدمة الذاتية وتصميم الواجهات الأمامية والربط الإلكتروني.",
    },
    items: [
      { en: "ESS / MSS Solutions", ar: "حلول الخدمة الذاتية للموظفين والمديرين (ESS/MSS)" },
      { en: "Web Applications", ar: "تطبيقات الويب المخصصة" },
      { en: "Front-End Solutions", ar: "حلول وتصميم الواجهات الأمامية" },
      { en: "Dynamics 365 Integration", ar: "التكامل والربط مع Dynamics 365" },
    ],
  },
];

export const CAREER_STAGES: CareerStage[] = [
  {
    id: "vodafone",
    company: { en: "Vodafone Egypt", ar: "فودافون مصر" },
    period: { en: "Oct 31, 2018 – Jan 2019", ar: "31 أكتوبر 2018 – يناير 2019" },
  },
  {
    id: "telecom-egypt",
    company: { en: "Telecom Egypt", ar: "المصرية للاتصالات (WE)" },
    period: { en: "Jun 23, 2019 – Dec 2022", ar: "23 يونيو 2019 – ديسمبر 2022" },
  },
  {
    id: "paradise-ai",
    company: {
      en: "Paradise Artificial Intelligence / Paradise AI Solutions",
      ar: "شركة بارادايس للذكاء الاصطناعي / بارادايس لحلول الذكاء الاصطناعي",
    },
    period: { en: "Jan 2023 – Present", ar: "يناير 2023 – حتى الآن" },
    role: {
      en: "Senior Business Systems Consultant & Team Lead",
      ar: "استشاري أول نظم أعمال وقائد فريق",
    },
    isCurrent: true,
    highlight: true,
    scopePoints: [
      {
        en: "Leading and coordinating Dynamics 365 F&O functional consultants",
        ar: "قيادة وتنسيق عمل استشاريي Dynamics 365 F&O الوظيفيين",
      },
      {
        en: "Business analysis and process mapping for enterprise clients",
        ar: "تحليل الأعمال ورسم مسارات العمليات لعملاء القطاع الحكومي والمؤسسات",
      },
      {
        en: "ERP configuration, functional design, and testing governance",
        ar: "إعداد وتهيئة النظام والتصميم الوظيفي وإدارة اختبارات القبول",
      },
      {
        en: "Comprehensive documentation and stakeholder alignment",
        ar: "التوثيق الوظيفي الشامل والتوافق الاستراتيجي مع الإدارات المعنية",
      },
      {
        en: "Human Resources functional specialization and cross-module delivery",
        ar: "تخصص وظيفي في الموارد البشرية مع تسليم حلول شاملة عبر موديولات ERP",
      },
      {
        en: "Customization requirements analysis and functional specifications",
        ar: "تحليل متطلبات التخصيص وصياغة المواصفات الوظيفية التفصيلية",
      },
      {
        en: "User Acceptance Testing (UAT) planning and execution",
        ar: "تخطيط وتنفيذ اختبارات قبول المستخدمين (UAT) بنجاح",
      },
      {
        en: "Production readiness assessment and cutover coordination",
        ar: "تقييم الجاهزية التشغيلية وإدارة الانتقال للبيئة الإنتاجية الحية",
      },
      {
        en: "Functional-to-technical coordination across engineering teams",
        ar: "التنسيق الدقيق والربط الفعال بين الفرق الوظيفية وفرق البرمجة والتطوير",
      },
      {
        en: "Solution engineering and web application development",
        ar: "هندسة الحلول وتطوير تطبيقات الويب المكملة للأنظمة",
      },
      {
        en: "Dynamics 365 enterprise system integration architecture",
        ar: "معمارية الربط والتكامل المؤسسي مع Microsoft Dynamics 365",
      },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "port-said-gov",
    title: { en: "Port Said Governorate", ar: "محافظة بورسعيد" },
    client: { en: "Government Operations", ar: "العمليات الحكومية" },
    scope: {
      en: "Microsoft Dynamics 365 F&O • Public Sector Enterprise Operations",
      ar: "نظام مايكروسوفت دايناميكس 365 F&O • العمليات الإدارية والمؤسسية للقطاع العام",
    },
    categories: ["Government", "Dynamics 365", "Business Analysis", "HR"],
    categoriesAr: ["حكومي", "Dynamics 365", "تحليل أعمال", "موارد بشرية"],
    visualConcept: {
      en: "Government + ERP Process Architecture",
      ar: "معمارية إجراءات العمل الحكومي وربطها بنظام ERP",
    },
    contribution: [
      {
        en: "Functional analysis and solution support for public-sector processes.",
        ar: "التحليل الوظيفي ودعم الحلول للإجراءات التشغيلية في القطاع العام.",
      },
      {
        en: "Participation in HR and cross-functional ERP requirements.",
        ar: "المشاركة المباشرة في متطلبات الموارد البشرية ومتطلبات ERP التكاملية.",
      },
      {
        en: "Bridged government departmental operating procedures with standardized Dynamics 365 functionality.",
        ar: "مواءمة إجراءات الإدارات الحكومية مع المعايير القياسية لنظام Dynamics 365.",
      },
    ],
    architectureDetails: {
      level: { en: "Public Sector Enterprise", ar: "المؤسسات الحكومية الكبرى" },
      flow: [
        { en: "Governorate Departments", ar: "إدارات المحافظة" },
        { en: "Process Harmonization", ar: "توحيد ومواءمة الإجراءات" },
        { en: "D365 F&O Core", ar: "نواة D365 F&O" },
        { en: "Public Sector Compliance", ar: "الامتثال والتشغيل الحكومي" },
      ],
      governanceNote: {
        en: "Structured government process standardization aligned with public administration compliance.",
        ar: "توحيد قياسي للإجراءات الحكومية بالتوافق مع اللوائح الإدارية الرسمية.",
      },
    },
  },
  {
    id: "freezone-customs",
    title: { en: "Freezone Port Said Customs", ar: "جمارك المنطقة الحرة ببورسعيد" },
    client: { en: "Customs Operations", ar: "عمليات الجمارك" },
    scope: {
      en: "Customs Operations & Trade Flow Procedures",
      ar: "الإجراءات الجمركية ومسارات حركة البضائع والاستيراد والتصدير",
    },
    categories: ["Government", "Business Analysis", "Custom Solutions"],
    categoriesAr: ["حكومي", "تحليل أعمال", "حلول مخصصة"],
    visualConcept: {
      en: "Process Flow • Import/Export Procedures • Approval Workflow",
      ar: "مسار العمليات • إجراءات الاستيراد والتصدير • دورات الموافقات",
    },
    contribution: [
      {
        en: "Detailed analysis of customs-related procedures.",
        ar: "تحليل دقيق للإجراءات التشغيلية والأنشطة المرتبطة بالجمارك.",
      },
      {
        en: "Translated operational processes into system requirements and customized business flows.",
        ar: "ترجمة مسارات العمل التشغيلية إلى متطلبات تقنية ودورات عمل مخصصة داخل النظام.",
      },
      {
        en: "Mapped approval workflows and procedural checkpoints for clearance processes.",
        ar: "تحديد مسارات الموافقات ونقاط التحقق الإجرائية للإفراج الجمركي.",
      },
    ],
    architectureDetails: {
      level: { en: "Customs & Trade Governance", ar: "حوكمة العمليات الجمركية والتجارية" },
      flow: [
        { en: "Declaration Entry", ar: "إدخال البيانات الجمركية" },
        { en: "Customs Rules Engine", ar: "محرك القواعد الجمركية" },
        { en: "Multi-Tier Approvals", ar: "الموافقات متعددة المستويات" },
        { en: "Clearance Execution", ar: "إتمام الإفراج الجمركي" },
      ],
      governanceNote: {
        en: "Precision clearance tracking and structured approval checkpoints.",
        ar: "تتبع دقيق لإجراءات التخليص مع نقاط تدقيق وموافقات صارمة.",
      },
    },
  },
  {
    id: "fra-regulatory",
    title: { en: "Financial Regulatory Authority", ar: "الهيئة العامة للرقابة المالية (FRA)" },
    client: { en: "Regulatory Operations", ar: "العمليات الرقابية والإدارية" },
    scope: {
      en: "Regulated Enterprise & Administrative Operations",
      ar: "العمليات الإدارية والتشغيلية الخاضعة للضوابط الرقابية والحوكمة",
    },
    categories: ["Government", "Dynamics 365", "Business Analysis"],
    categoriesAr: ["حكومي", "Dynamics 365", "تحليل أعمال"],
    visualConcept: {
      en: "Governance • Structured Workflows • Enterprise Controls",
      ar: "الحوكمة • مسارات العمل المنظمة • الضوابط الرقابية المؤسسية",
    },
    contribution: [
      {
        en: "Business analysis and Dynamics 365 solution delivery for regulated operational and administrative processes.",
        ar: "تحليل الأعمال وتسليم حلول Dynamics 365 للإجراءات التشغيلية والإدارية الرقابية.",
      },
      {
        en: "Defined governance rules, audit trails, and policy-driven approval hierarchies.",
        ar: "تحديد قواعد الحوكمة وسجلات التدقيق ومستويات الموافقة المعتمدة على السياسات.",
      },
      {
        en: "Ensured regulatory compliance controls were embedded within standard system workflows.",
        ar: "دمج الضوابط الرقابية الصارمة داخل دورات العمل في النظام.",
      },
    ],
    architectureDetails: {
      level: { en: "Regulated Operations", ar: "البيئات الرقابية عالية الحوكمة" },
      flow: [
        { en: "Administrative Request", ar: "الطلب الإداري" },
        { en: "Compliance Audit Logic", ar: "قواعد الامتثال الرقابي" },
        { en: "D365 Workflow Execution", ar: "تنفيذ الدورة في D365" },
        { en: "Audit Registry", ar: "سجل التدقيق والمطابقة" },
      ],
      governanceNote: {
        en: "Airtight administrative compliance framework with full auditability.",
        ar: "إطار عمل إداري ورقابي محكم يتميز بقابلية التدقيق الشاملة.",
      },
    },
  },
  {
    id: "moss-solidarity",
    title: { en: "Ministry of Social Solidarity", ar: "وزارة التضامن الاجتماعي" },
    client: { en: "Social Care Management", ar: "إدارة الرعاية الاجتماعية" },
    scope: {
      en: "Social Care Management & Citizen Services",
      ar: "إدارة منظومة الرعاية الاجتماعية والخدمات الموجهة للمواطنين",
    },
    categories: ["Government", "Dynamics 365", "Business Analysis", "Custom Solutions"],
    categoriesAr: ["حكومي", "Dynamics 365", "تحليل أعمال", "حلول مخصصة"],
    visualConcept: {
      en: "Citizen Services → Process Mapping → ERP → Decision Architecture",
      ar: "خدمات المواطنين ← مسار الإجراءات ← نظام ERP ← اتخاذ القرار",
    },
    contribution: [
      {
        en: "Analyzed social-care management procedures.",
        ar: "تحليل إجراءات ومنظومة إدارة الرعاية الاجتماعية بالتفصيل.",
      },
      {
        en: "Supported customized workflows and integrated enterprise solutions aligned with organizational requirements.",
        ar: "دعم دورات العمل المخصصة والحلول المؤسسية المتكاملة المتوافقة مع متطلبات الوزارة.",
      },
      {
        en: "Designed systematic paths from citizen request submission to operational decisioning.",
        ar: "تصميم مسارات منظمة تبدأ من تقديم الطلب حتى اتخاذ القرار وصرف الدعم.",
      },
    ],
    architectureDetails: {
      level: { en: "Citizen Welfare Architecture", ar: "منظومة الرعاية والخدمات العامة" },
      flow: [
        { en: "Citizen Intake", ar: "استقبال الطلب" },
        { en: "Eligibility Validation", ar: "التحقق من الاستحقاق" },
        { en: "ERP Case Processing", ar: "معالجة الحالة في ERP" },
        { en: "Decision / Allocation", ar: "القرار والصرف" },
      ],
      governanceNote: {
        en: "Human-centered social assistance workflow with transparent case tracking.",
        ar: "مسار رعاية اجتماعية شفاف يضمن تتبع الحالات بدقة متناهية.",
      },
    },
  },
  {
    id: "new-valley-gov",
    title: { en: "New Valley Governorate", ar: "محافظة الوادي الجديد" },
    client: { en: "Multi-Module Government Enterprise", ar: "منظومة المحافظة المتكاملة" },
    scope: {
      en: "Complete Multi-Module Solution + Front-End Integration",
      ar: "حل متكامل وشامل متعدد الموديولات مع واجهات أمامية مخصصة",
    },
    categories: ["Government", "Dynamics 365", "Business Analysis", "Custom Solutions", "Integration", "Web Solutions"],
    categoriesAr: ["حكومي", "Dynamics 365", "تحليل أعمال", "حلول مخصصة", "تكامل", "حلول ويب"],
    visualConcept: {
      en: "Multi-Module Enterprise Architecture & Custom Front-End",
      ar: "معمارية مؤسسية متعددة الموديولات مع واجهات استخدام أمامية",
    },
    contribution: [
      {
        en: "End-to-end solution delivery across multiple modules.",
        ar: "تسليم حل شامل ومتكامل عبر موديولات متعددة من البداية للنهاية.",
      },
      {
        en: "Responsibilities included: business analysis, solution design, customized procedures.",
        ar: "شملت المسؤوليات: تحليل الأعمال، تصميم الحلول، وصياغة الإجراءات المخصصة.",
      },
      {
        en: "Architected front-end components and defined cross-system integration requirements.",
        ar: "بناء وتصميم مكونات الواجهات الأمامية وتحديد متطلبات التكامل والربط مع الأنظمة.",
      },
    ],
    architectureDetails: {
      level: { en: "Flagship Comprehensive Solution", ar: "أحد أوسع المشاريع تكاملاً وشمولاً" },
      flow: [
        { en: "Governorate Portals", ar: "بوابات المحافظة" },
        { en: "Front-End UI Modules", ar: "الواجهات الأمامية المخصصة" },
        { en: "Integration Middle-tier", ar: "طبقة التكامل والوسيط" },
        { en: "D365 Enterprise Backbone", ar: "عمود ERP الفقري D365" },
      ],
      governanceNote: {
        en: "Monica's most comprehensive engagement combining analysis, ERP core, and front-end solutions.",
        ar: "مشروع رائد جمع بين تحليل الأعمال المعمق ونواة ERP والواجهات الأمامية.",
      },
    },
  },
];

export const ALL_TECHNOLOGIES_AND_PLATFORMS: PlatformItem[] = [
  // ERP & Enterprise Backbone
  {
    id: "d365-fo",
    name: "Microsoft Dynamics 365 F&O",
    category: "erp",
    categoryLabel: { en: "ERP Platform", ar: "نظام ERP" },
    description: {
      en: "HR, Finance, Supply Chain, and Cross-Module Delivery",
      ar: "الموارد البشرية، المالية، سلاسل الإمداد، والتسليم عبر الموديولات",
    },
    logoType: "dynamics",
  },
  {
    id: "ess-mss",
    name: "ESS / MSS Solutions",
    category: "portal",
    categoryLabel: { en: "Self-Service", ar: "الخدمة الذاتية" },
    description: {
      en: "Employee & Manager Self-Service web portal architectures",
      ar: "بوابات الخدمة الذاتية للموظفين والمديرين خارج واجهة ERP الأساسية",
    },
    logoType: "portal",
  },
  {
    id: "enterprise-web",
    name: "Enterprise Web & Front-End Solutions",
    category: "portal",
    categoryLabel: { en: "Web Architecture", ar: "معمارية الويب" },
    description: {
      en: "Modern operational front-end interfaces for enterprise users",
      ar: "تطوير وبناء واجهات مستخدم مخصصة للعمليات التشغيلية",
    },
    logoType: "web",
  },
  {
    id: "opreix",
    name: "Opreix Platform",
    category: "portal",
    categoryLabel: { en: "Enterprise System", ar: "منظومة عمليات" },
    description: {
      en: "Enterprise operations management unifying HR, Payroll, Tasks, and Projects",
      ar: "منظومة إدارة العمليات المؤسسية الموحدة للموارد البشرية والمهام والمشاريع",
    },
    logoType: "opreix",
  },
  {
    id: "investor-portals",
    name: "Investor & Service Portals",
    category: "portal",
    categoryLabel: { en: "Public Services", ar: "بوابات الخدمات" },
    description: {
      en: "Public-facing service request and stakeholder portals",
      ar: "بوابات الخدمات ومعاملات المستثمرين والمواطنين",
    },
    logoType: "portal",
  },
  {
    id: "back-office",
    name: "Back-Office Applications",
    category: "portal",
    categoryLabel: { en: "Operations", ar: "التشغيل الإداري" },
    description: {
      en: "Internal administrative systems and approval control hubs",
      ar: "تطبيقات الإدارة الخلفية ومراكز تدقيق واعتماد المعاملات",
    },
    logoType: "backoffice",
  },

  // AI & Automation
  {
    id: "ai-workflows",
    name: "AI Agent Workflows",
    category: "ai",
    categoryLabel: { en: "AI Automation", ar: "وكلاء الذكاء الاصطناعي" },
    description: {
      en: "Autonomous multi-agent workflows and process orchestration",
      ar: "مسارات عمل وكلاء الذكاء الاصطناعي وأتمتة المهام المعقدة",
    },
    logoType: "ai-agent",
  },
  {
    id: "openai",
    name: "OpenAI ChatGPT",
    category: "ai",
    categoryLabel: { en: "AI Model", ar: "نموذج ذكاء اصطناعي" },
    description: {
      en: "Prompt engineering, analysis synthesis, and document drafting",
      ar: "صياغة وتلخيص وثائق التحليل والمستندات المؤسسية",
    },
    logoType: "openai",
  },
  {
    id: "ms-copilot",
    name: "Microsoft Copilot",
    category: "ai",
    categoryLabel: { en: "Enterprise AI", ar: "ذكاء اصطناعي مؤسسي" },
    description: {
      en: "Microsoft ecosystem intelligence across D365 & 365 apps",
      ar: "تطبيقات الذكاء الاصطناعي في بيئة مايكروسوفت وDynamics",
    },
    logoType: "copilot",
  },
  {
    id: "gemini",
    name: "Google AI (Gemini)",
    category: "ai",
    categoryLabel: { en: "AI Model", ar: "نموذج ذكاء اصطناعي" },
    description: {
      en: "Multimodal analysis, reasoning, and enterprise insights",
      ar: "الاستدلال والتحليل متعدد الوسائط واستخراج الرؤى المؤسسية",
    },
    logoType: "gemini",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "ai",
    categoryLabel: { en: "Code Assistant", ar: "مساعد تطوير" },
    description: {
      en: "Engineering acceleration for front-end and integration code",
      ar: "تسريع تطوير حلول الواجهات الأمامية والأكواد البرمجية",
    },
    logoType: "github-copilot",
  },
  {
    id: "claude",
    name: "Claude",
    category: "ai",
    categoryLabel: { en: "AI Model", ar: "نموذج ذكاء اصطناعي" },
    description: {
      en: "Deep analytical synthesis and complex requirement processing",
      ar: "التحليل الاستراتيجي العميق ومراجعة المتطلبات المعقدة",
    },
    logoType: "claude",
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "ai",
    categoryLabel: { en: "AI Code Editor", ar: "محرر برمجة ذكي" },
    description: {
      en: "AI-first development environment for rapid solution engineering",
      ar: "بيئة البرمجة المعززة بالذكاء الاصطناعي لبناء الحلول بسرعة ودقة",
    },
    logoType: "cursor",
  },
  {
    id: "gamma-ai",
    name: "Gamma AI",
    category: "ai",
    categoryLabel: { en: "Visual Synthesis", ar: "عروض مرئية" },
    description: {
      en: "Executive presentations and architectural visual blueprints",
      ar: "تصميم العروض التنفيذية والمخططات التوضيحية لأصحاب القرار",
    },
    logoType: "gamma",
  },
  {
    id: "napkin-ai",
    name: "Napkin AI",
    category: "ai",
    categoryLabel: { en: "Visual Explanations", ar: "توليد الرسوم البيانية" },
    description: {
      en: "Transforming functional text into visual business diagrams",
      ar: "تحويل النصوص والمتطلبات الوظيفية إلى رسوم ومخططات بيانية",
    },
    logoType: "napkin",
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "ai",
    categoryLabel: { en: "Knowledge Grounding", ar: "قاعدة المعرفة" },
    description: {
      en: "Source-grounded synthesis of enterprise policy manuals",
      ar: "تحليل وتأصيل اللوائح والكتيبات التشغيلية المعتمدة",
    },
    logoType: "notebooklm",
  },
  {
    id: "clipchamp",
    name: "Clipchamp",
    category: "ai",
    categoryLabel: { en: "Media / Training", ar: "وسائط وتدريب" },
    description: {
      en: "System walkthrough videos and user training materials",
      ar: "إنتاج شروحات النظام ومواد تدريب المستخدمين المسجلة",
    },
    logoType: "clipchamp",
  },

  // Integration & Automation
  {
    id: "make-com",
    name: "Make.com",
    category: "automation",
    categoryLabel: { en: "iPaaS Automation", ar: "أتمتة التكاملات" },
    description: {
      en: "Visual orchestration connecting enterprise web applications",
      ar: "بناء مسارات التكامل والأتمتة المرئية بين التطبيقات",
    },
    logoType: "make",
  },
  {
    id: "n8n",
    name: "n8n",
    category: "automation",
    categoryLabel: { en: "Workflow Engine", ar: "محرك مسارات العمل" },
    description: {
      en: "Node-based automated workflows and webhook routing",
      ar: "مسارات عمل آلية مفتوحة وتوجيه الأحداث (Webhooks) المتقدم",
    },
    logoType: "n8n",
  },
  {
    id: "code-node",
    name: "Code Node & Output Parser",
    category: "automation",
    categoryLabel: { en: "Data Transformation", ar: "معالجة البيانات" },
    description: {
      en: "Custom data transformation logic and structured JSON parsing",
      ar: "تحويل ومطابقة هياكل البيانات والـ JSON المنسق بدقة",
    },
    logoType: "code-node",
  },
  {
    id: "webhooks",
    name: "Webhooks",
    category: "integration",
    categoryLabel: { en: "Real-Time Sync", ar: "التزامن الفوري" },
    description: {
      en: "Event-driven architecture for instantaneous system notifications",
      ar: "معمارية معتمدة على الأحداث للتحديث الفوري للحالات والبيانات",
    },
    logoType: "webhooks",
  },
  {
    id: "ms-outlook",
    name: "Microsoft Outlook",
    category: "integration",
    categoryLabel: { en: "Enterprise Messaging", ar: "البريد المؤسسي" },
    description: {
      en: "Automated notifications, actionable approval emails, and alerts",
      ar: "الإشعارات الآلية ورسائل الموافقات والاعتمادات التفاعلية",
    },
    logoType: "outlook",
  },
  {
    id: "d365-integrations",
    name: "Dynamics 365 Integrations",
    category: "integration",
    categoryLabel: { en: "ERP Connectors", ar: "تكاملات D365" },
    description: {
      en: "Bi-directional master data mapping and transaction posting",
      ar: "المزامنة ثنائية الاتجاه وتحديث السجلات في الدفاتر المالية",
    },
    logoType: "dynamics",
  },
  {
    id: "erd-drawio",
    name: "Map Integrations, ERD & draw.io",
    category: "integration",
    categoryLabel: { en: "System Architecture", ar: "مخططات المعمارية" },
    description: {
      en: "Entity relationship diagrams, process maps, and architecture charts",
      ar: "مخططات علاقات الكيانات (ERD) وخرائط العمليات في draw.io",
    },
    logoType: "drawio",
  },
  {
    id: "human-approvals",
    name: "Human Approval Workflows",
    category: "automation",
    categoryLabel: { en: "Governance", ar: "حوكمة الموافقات" },
    description: {
      en: "Human-in-the-loop validation checkpoints before ERP execution",
      ar: "نقاط المراجعة والاعتماد البشري قبل ترحيل المعاملات لـ ERP",
    },
    logoType: "approvals",
  },
];
