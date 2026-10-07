import React, { useState } from "react";
import { Check, ChevronRight, ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const BusinessAnalysisFramework: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const elevenSteps = [
    {
      id: "problem",
      step: "01",
      title: { en: "Business Problem", ar: "تحديد مشكلة الأعمال" },
      objective: {
        en: "Identify organizational bottlenecks, policy misalignments, and procedural inefficiencies.",
        ar: "تحديد نقاط الاختناق المؤسسي، فجوات السياسات، وأسباب تباطؤ العمليات التشغيلية.",
      },
      deliverable: { en: "Operational Pain Point Register", ar: "سجل التحديات التشغيلية" },
      details: {
        en: "Understanding the authentic institutional reality before assuming software changes.",
        ar: "الفهم المعمق لواقع المؤسسة الفعلي قبل افتراض أي حلول برمجية.",
      },
    },
    {
      id: "requirements",
      step: "02",
      title: { en: "Requirements Gathering", ar: "استخلاص المتطلبات" },
      objective: {
        en: "Conduct structured stakeholder elicitation across leadership, operators, and compliance officers.",
        ar: "إجراء مقابلات استخلاص المتطلبات مع القيادات والمشغلين ومسؤولي الامتثال.",
      },
      deliverable: { en: "Stakeholder Requirements Matrix", ar: "مصفوفة متطلبات أصحاب المصلحة" },
      details: {
        en: "Documenting verbatim statutory mandates and day-to-day administrative expectations.",
        ar: "توثيق الالتزامات النظامية واللوائح التنفيذية بدقة.",
      },
    },
    {
      id: "analysis",
      step: "03",
      title: { en: "Business Analysis", ar: "تحليل الأعمال المعمق" },
      objective: {
        en: "Structure requirements into formal functional rules, entity models, and role dependencies.",
        ar: "هيكلة المتطلبات إلى قواعد عمل وظيفية، نماذج كيانات، وعلاقات بين الأدوار.",
      },
      deliverable: { en: "Business Requirements Document (BRD)", ar: "وثيقة متطلبات الأعمال (BRD)" },
      details: {
        en: "Deconstructing ambiguity into mathematically verifiable business constraints.",
        ar: "تحويل العبارات الفضفاضة إلى محددات عمل رياضية وقانونية واضحة.",
      },
    },
    {
      id: "mapping",
      step: "04",
      title: { en: "Process Mapping", ar: "رسم مسارات العمليات" },
      objective: {
        en: "Produce end-to-end swimlane workflow diagrams detailing handoffs and decision checkpoints.",
        ar: "رسم مسارات العمل التفاعلية (Swimlane) الموضحة لنقاط التسليم ومحطات اتخاذ القرار.",
      },
      deliverable: { en: "As-Is & To-Be Process Blueprints", ar: "مخططات الوضع الحالي والمستقبلي" },
      details: {
        en: "Eliminating procedural loops and standardizing approvals before system modeling.",
        ar: "إلغاء التكرار الإجرائي وتوحيد الموافقات قبل الانتقال للتهيئة.",
      },
    },
    {
      id: "fitgap",
      step: "05",
      title: { en: "Fit-Gap Analysis", ar: "تحليل الفجوات (Fit-Gap)" },
      objective: {
        en: "Benchmark every mapped requirement directly against native Microsoft Dynamics 365 features.",
        ar: "مقارنة كل متطلب تشغيلي مع الإمكانات القياسية لنظام Microsoft Dynamics 365.",
      },
      deliverable: { en: "Standard vs Custom Fit Matrix", ar: "مصفوفة القياسي مقابل المخصص" },
      details: {
        en: "Preserving standard ERP upgradeability while scoping necessary extensions.",
        ar: "الحفاظ على قابلية ترقية النظام القياسي مع حصر الامتدادات الضرورية فقط.",
      },
    },
    {
      id: "design",
      step: "06",
      title: { en: "Solution Design", ar: "تصميم الحل الوظيفي" },
      objective: {
        en: "Author comprehensive Functional Design Documents (FDD) specifying schema extensions and UI flows.",
        ar: "صياغة وثائق التصميم الوظيفي (FDD) المحددة لهياكل الجداول وتدفقات الواجهات.",
      },
      deliverable: { en: "Functional Design Document (FDD)", ar: "وثائق التصميم الوظيفي (FDD)" },
      details: {
        en: "The master architectural blueprint bridging business governance with engineering.",
        ar: "المخطط المعماري الحاسم الذي يربط حوكمة الأعمال بالتنفيذ البرمجي.",
      },
    },
    {
      id: "dynamics",
      step: "07",
      title: { en: "Dynamics 365", ar: "تهيئة دايناميكس 365" },
      objective: {
        en: "Implement standard parameter configurations, journals, security roles, and native workflow hierarchies.",
        ar: "تهيئة المعاملات القياسية، الدفاتر، صلاحيات الأدوار، وهياكل دورات العمل في D365.",
      },
      deliverable: { en: "Core System Configuration Base", ar: "قاعدة الإعدادات القياسية لـ D365" },
      details: {
        en: "Deep setup in Human Resources, Finance, and Supply Chain core registries.",
        ar: "إعداد موديولات الموارد البشرية والمالية وسلاسل الإمداد المركزية.",
      },
    },
    {
      id: "customization",
      step: "08",
      title: { en: "Customization / Web Solution", ar: "التخصيص والحلول الرقمية" },
      objective: {
        en: "Engineer tailored operational forms, portal logic, or platforms such as Opreix and ESS/MSS.",
        ar: "تطوير النماذج المخصصة وبوابات الويب مثل Opreix وبوابات الخدمة الذاتية (ESS/MSS).",
      },
      deliverable: { en: "Tailored Web & Front-End Extensions", ar: "الواجهات والبوابات الرقمية المخصصة" },
      details: {
        en: "Delivering intuitive front-end user experience directly addressing client-specific workflows.",
        ar: "توفير تجربة مستخدم مبسطة تلبي الإجراءات الاستثنائية للعميل.",
      },
    },
    {
      id: "integration",
      step: "09",
      title: { en: "Integration", ar: "التكامل والربط المؤسسي" },
      objective: {
        en: "Establish secure data exchange layers, webhooks, and REST/iPaaS conduits connecting external portals.",
        ar: "بناء قنوات الربط الآمن، أحداث Webhooks، ومسارات iPaaS لربط البوابات بـ ERP.",
      },
      deliverable: { en: "Bi-Directional Integration Pipes", ar: "قنوات التزامن ثنائية الاتجاه" },
      details: {
        en: "Automating transaction posting and maintaining ledger data fidelity in real time.",
        ar: "أتمتة ترحيل المعاملات وحفظ تطابق البيانات مع السجلات المالية لحظياً.",
      },
    },
    {
      id: "uat",
      step: "10",
      title: { en: "UAT (User Acceptance)", ar: "اختبارات قبول المستخدمين" },
      objective: {
        en: "Execute formal business scenario scripts with government and enterprise key users.",
        ar: "تنفيذ سيناريوهات الاختبارات الحية مع المستخدمين الرئيسيين في الجهة.",
      },
      deliverable: { en: "Signed UAT Sign-Off & Defect Log", ar: "محاضر اعتماد UAT وسجل المعالجة" },
      details: {
        en: "Rigorous verification ensuring end users validate true day-to-day scenarios.",
        ar: "تحقق عملي صارم يضمن قبول المستخدمين للمنظومة قبل إطلاقها.",
      },
    },
    {
      id: "golive",
      step: "11",
      title: { en: "Go-Live & Adoption", ar: "الإطلاق الحي والاستدامة" },
      objective: {
        en: "Coordinate cutover runbooks, legacy data migration verification, and provide hypercare support.",
        ar: "إدارة خطة الانتقال، تدقيق هجرة البيانات التاريخية، وتوفير الرعاية الفائقة.",
      },
      deliverable: { en: "Production Stability & Handover", ar: "استقرار التشغيل والتسليم الرسمي" },
      details: {
        en: "Guiding staff through sustainable organizational transformation from Day One.",
        ar: "قيادة التبني المؤسسي السلس وضمان استقرار العمليات من اليوم الأول.",
      },
    },
  ];

  const current = elevenSteps[activeStep];

  return (
    <section id="methodology" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("End-to-End Methodology", "منهجية العمل المتكاملة")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "How Monica Solves Business Problems",
              "كيف تقود مونيكا رحلة معالجة مشاكل الأعمال"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "A progressive 11-stage journey from identifying operational pain points to live enterprise cutover, uniting business analysis, Dynamics 365, and custom web engineering.",
              "مسار تدريجي من 11 مرحلة يبدأ بتشخيص التحديات التشغيلية وصولاً للإطلاق الحي، جامعاً بين تحليل الأعمال، نواة Dynamics 365، وهندسة حلول الويب."
            )}
          </p>
        </div>

        {/* 11-Step Connected Timeline Ribbon */}
        <div className="mb-10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 no-scrollbar">
            {elevenSteps.map((s, idx) => {
              const isSelected = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-2 rounded-xl text-left rtl:text-right border transition-all shrink-0 flex items-center gap-2.5 ${
                    isSelected
                      ? "bg-[#0078d4] border-[#0078d4] text-white shadow-lg shadow-[#0078d4]/20 scale-105 z-10"
                      : isPast
                      ? "bg-[#0c162c] border-slate-700/80 text-slate-300"
                      : "bg-[#080d19] border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-white" : "text-[#38bdf8]"}`}>
                    {s.step}
                  </span>
                  <span className="text-xs font-bold whitespace-nowrap">
                    {s.title[lang]}
                  </span>
                  {idx < elevenSteps.length - 1 && (
                    <span className="text-slate-600 text-[10px] ltr:ml-1 rtl:mr-1">
                      {isRtl ? "←" : "→"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Visual Stage Deep-Dive Card */}
        <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Backing */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#0078d4]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Stage Objective & Deliverable */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2">
                <span>{t("Stage", "المرحلة")} {current.step} {t("of 11", "من 11")}</span>
                <span>·</span>
                <span>{t("Enterprise Lifecycle", "دورة حياة المشروع")}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {current.title[lang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-6">
                {current.objective[lang]}
              </p>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800 flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t("Key Formal Output:", "المخرج الوظيفي الرسمي:")}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {current.deliverable[lang]}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {current.details[lang]}
              </p>
            </div>

            {/* Right Column: Progressive Flow Visualizer */}
            <div className="lg:col-span-5 bg-[#080d19]/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between h-full min-h-[260px]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  {t("Sequential Pipeline Position", "الموقع في المسار الإجرائي")}
                </span>

                {/* Micro Steps Visualizer */}
                <div className="space-y-1.5">
                  {elevenSteps.slice(Math.max(0, activeStep - 1), Math.min(elevenSteps.length, activeStep + 3)).map((item, i) => {
                    const isCur = item.id === current.id;
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                          isCur
                            ? "bg-[#142340] text-white font-bold border border-[#0078d4]/60"
                            : "text-slate-400 bg-slate-900/40"
                        }`}
                      >
                        <span className="font-mono text-[11px] text-[#38bdf8]">{item.step}</span>
                        <span>{item.title[lang]}</span>
                        <span className="text-[10px] opacity-70">
                          {isCur ? "● Active" : "○"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  {t("← Previous Stage", "← المرحلة السابقة")}
                </button>

                <button
                  type="button"
                  disabled={activeStep === elevenSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(elevenSteps.length - 1, prev + 1))}
                  className="text-xs font-semibold text-[#38bdf8] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  {t("Next Stage →", "المرحلة التالية →")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
