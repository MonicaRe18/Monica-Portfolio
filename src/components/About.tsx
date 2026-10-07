import React from "react";
import { Compass, ShieldCheck, GitMerge, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  const leadershipDimensions = [
    {
      title: {
        en: "Functional Leadership & Delivery",
        ar: "القيادة الوظيفية وإدارة التسليم",
      },
      description: {
        en: "Guiding multi-disciplinary functional teams through rigorous discovery, fit-gap analysis, and ERP configuration across complex organizational landscapes.",
        ar: "توجيه الفرق الوظيفية متعددة التخصصات عبر مراحل الاستكشاف، تحليل الفجوات، وتهيئة موديولات ERP في البيئات المعقدة.",
      },
      icon: Compass,
    },
    {
      title: {
        en: "HR Core & Cross-Module Expertise",
        ar: "تخصص الموارد البشرية والشمول الموديولي",
      },
      description: {
        en: "Deep functional specialization in Human Resources, while harmonizing cross-module integration across Finance, Operations, and public sector procedures.",
        ar: "تخصص وظيفي عميق في الموارد البشرية، مع مواءمة وتكامل متين عبر موديولات المالية والعمليات والإجراءات الحكومية.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Business-to-Technical Bridge",
        ar: "جسر الترجمة بين الأعمال والتقنية",
      },
      description: {
        en: "Translating intricate standard operating procedures into formal functional designs (FDDs) and implementation-ready technical specifications.",
        ar: "تحويل الإجراءات التشغيلية المعقدة إلى وثائق تصميم وظيفي (FDD) ومواصفات برمجية دقيقة قابلة للتنفيذ المباشر.",
      },
      icon: GitMerge,
    },
    {
      title: {
        en: "Solution Engineering & Web Integration",
        ar: "هندسة الحلول والربط الرقمي",
      },
      description: {
        en: "Expanding functional consulting boundaries through coding, custom front-end development, ESS/MSS portals, and Dynamics 365 integrations.",
        ar: "توسيع آفاق الاستشارات الوظيفية عبر البرمجة وتطوير الواجهات الأمامية وبوابات الخدمة الذاتية وتكاملات Dynamics 365.",
      },
      icon: Terminal,
    },
  ];

  return (
    <section id="about" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Professional Profile & Narrative", "الملف الشخصي والمسار الاستشاري")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t(
              "Bridging Enterprise Operations with Modern Digital Architecture",
              "الربط المحكم بين العمليات المؤسسية والمعمارية الرقمية الحديثة"
            )}
          </h2>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-100 font-medium leading-relaxed">
              {t(
                "Senior Business Systems Consultant, Functional Consultant Team Lead, and Business Analyst with comprehensive experience delivering Microsoft Dynamics 365 Finance & Operations in high-stakes environments.",
                "استشاري أول نظم أعمال وقائد فريق استشارات وظيفية ومحلل أعمال، تتمتع بخبرة واسعة في تسليم حلول Microsoft Dynamics 365 Finance & Operations في كبرى البيئات المؤسسية والحكومية."
              )}
            </p>

            <p>
              {t(
                "Since joining Paradise Artificial Intelligence / Paradise AI Solutions in January 2023, Monica has spearheaded and contributed to major government and enterprise digital transformation engagements across Egypt. Her work centers on turning complex public sector regulations and enterprise operating procedures into predictable, scalable, and audit-compliant ERP solutions.",
                "منذ انضمامها إلى شركة بارادايس للذكاء الاصطناعي في يناير 2023، قادت مونيكا وشاركت في كبرى مبادرات التحول الرقمي للقطاعين الحكومي والمؤسسي في مصر، حيث تركز على تحويل اللوائح والإجراءات المعقدة إلى حلول ERP قياسية، قابلة للتوسع، وخاضعة للتدقيق الكامل."
              )}
            </p>

            <p>
              {t(
                "While Human Resources forms her core functional specialization, her impact extends across broader cross-module Dynamics 365 delivery—orchestrating finance, operations, customs clearance, and regulatory administration.",
                "وفي حين تشكل الموارد البشرية (Human Resources) ركيزة تخصصها الوظيفي، يمتد أثرها عبر تسليم حلول متكاملة لـ Dynamics 365 تشمل المالية، العمليات، التخليص الجمركي، والإجراءات الرقابية."
              )}
            </p>

            <p>
              {t(
                "Recognizing that enterprise success requires more than off-the-shelf configuration, her professional progression expanded beyond traditional functional consulting into solution engineering, coding, custom web solutions, ESS/MSS portals, and robust Microsoft Dynamics 365 integration architectures.",
                "وإدراكاً منها بأن نجاح التحول الرقمي يتطلب ما هو أبعد من مجرد التهيئة التقليدية، امتد تطورها المهني ليشمل هندسة الحلول، البرمجة، تطوير تطبيقات الويب، بوابات الخدمة الذاتية (ESS/MSS)، ومعماريات التكامل المتطورة مع Dynamics 365."
              )}
            </p>

            {/* Quote / Principle */}
            <div className="p-5 rounded-lg bg-[#0e1628] border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#0078d4] border-y border-r rtl:border-r-0 rtl:border-l border-slate-800 my-6">
              <p className="text-sm italic text-slate-200">
                {t(
                  "“True digital transformation does not ask organizations to bend their core mission to fit standard software; it translates real operational reality into clear, controlled, and sustainable system architecture.”",
                  "«التحول الرقمي الحقيقي لا يفرض على المؤسسات تطويع أهدافها الجوهرية لتناسب قالباً برمجياً جاهزاً، بل يترجم واقع العمليات الفعلي إلى معمارية نظم واضحة، محكمة، ومستدامة.»"
                )}
              </p>
              <div className="mt-3 text-xs font-semibold text-slate-400">
                {t("Monica Remon — Leadership Philosophy", "مونيكا ريمون — فلسفة القيادة الاستشارية")}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Dimensions */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {leadershipDimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0b1222] border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0078d4]/10 border border-[#0078d4]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {dim.title[lang]}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {dim.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Summary Card */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-[#0e172a] border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white">
                  {t("Current Engagement:", "المنصب الحالي:")}
                </span>
                <span className="text-slate-400 block mt-0.5">
                  {t(
                    "Paradise Artificial Intelligence (Jan 2023 – Present)",
                    "شركة بارادايس للذكاء الاصطناعي (يناير 2023 – حتى الآن)"
                  )}
                </span>
              </div>
              <span className="text-emerald-400 font-medium">
                {t("Active Team Lead", "قائد فريق استشارات")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
