import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const SolutionEngineeringJourney: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const progression = [
    {
      step: "01",
      title: { en: "Functional Consulting", ar: "الاستشارات الوظيفية" },
      description: {
        en: "Deep configuration and process alignment within Microsoft Dynamics 365 F&O modules.",
        ar: "التهيئة القياسية العميقة ومواءمة إجراءات العمل داخل موديولات Microsoft Dynamics 365 F&O.",
      },
      impact: {
        en: "Ensures out-of-the-box Microsoft Dynamics 365 functionality is leveraged first, maintaining clean upgrade paths.",
        ar: "ضمان الاستفادة القصوى من المعايير القياسية لنظام D365 للحفاظ على استقرار التحديثات المستقبلية.",
      },
    },
    {
      step: "02",
      title: { en: "Business Analysis", ar: "تحليل الأعمال" },
      description: {
        en: "Formal discovery, stakeholder elicitation, and rigorous requirement documentation.",
        ar: "جلسات الاستكشاف الرسمية، استخلاص متطلبات أصحاب المصلحة، والتوثيق الوظيفي الدقيق.",
      },
      impact: {
        en: "Rigorous gap identification preventing costly operational misunderstandings before any code or config is created.",
        ar: "تحديد الفجوات بدقة لمنع الأخطاء التشغيلية المكلفة قبل الشروع في أي إعداد أو برمجة.",
      },
    },
    {
      step: "03",
      title: { en: "ERP Solution Design", ar: "تصميم حلول ERP" },
      description: {
        en: "Architecting holistic systems that adhere to enterprise governance and operational reality.",
        ar: "بناء معمارية نظم شاملة تلتزم بالحوكمة المؤسسية وتلائم الواقع التشغيلي.",
      },
      impact: {
        en: "Architects multi-module data flow so HR, Finance, and operations converse effortlessly without isolated silos.",
        ar: "تنسيق تدفق البيانات عبر الموديولات لتعمل الموارد البشرية والمالية معاً دون جزر منعزلة.",
      },
    },
    {
      step: "04",
      title: { en: "Functional-to-Technical Translation", ar: "الترجمة بين الوظيفي والتقني" },
      description: {
        en: "Bridging the critical gap between executive stakeholders and technical developers.",
        ar: "سد الفجوة الجوهرية بين أصحاب القرار وفرق البرمجة والتطوير.",
      },
      impact: {
        en: "Eliminates miscommunication between business units and development teams with airtight functional specifications.",
        ar: "القضاء على سوء الفهم بين إدارات الأعمال وفرق التطوير عبر مواصفات وظيفية محكمة.",
      },
    },
    {
      step: "05",
      title: { en: "Front-End / Web Solutions", ar: "حلول الويب والواجهات الأمامية" },
      description: {
        en: "Designing modern, intuitive web interfaces that demystify complex enterprise systems.",
        ar: "تصميم وبناء واجهات ويب تفاعلية وسلسة تبسط التفاعل مع النظم المؤسسية.",
      },
      impact: {
        en: "Provides accessible self-service interfaces that eliminate employee intimidation when interacting with complex enterprise systems.",
        ar: "توفير بوابات استخدام مريحة تزيل الرهبة والتعقيد عند تفاعل الموظفين مع الأنظمة المركزية.",
      },
    },
    {
      step: "06",
      title: { en: "Solution Engineering", ar: "هندسة الحلول المتكاملة" },
      description: {
        en: "Hands-on delivery and engineering of working software tailored to client business needs.",
        ar: "المشاركة الميدانية في بناء وهندسة البرمجيات العملية الملائمة لاحتياجات العملاء.",
      },
      impact: {
        en: "Combines analytical rigor with practical implementation, reducing delivery cycles and ensuring technical fidelity.",
        ar: "الدمج بين التحليل المنهجي والتنفيذ العملي، مما يقلص فترات التسليم ويضمن دقة المخرجات.",
      },
    },
    {
      step: "07",
      title: { en: "Enterprise Integration", ar: "التكامل والربط المؤسسي" },
      description: {
        en: "Connecting external systems, custom portals, and core ERP into a unified operational fabric.",
        ar: "ربط الأنظمة الخارجية والبوابات المخصصة بنواة ERP في نسيج تشغيلي موحد.",
      },
      impact: {
        en: "Synthesizes external portals and third-party systems directly into the ERP core for real-time operational harmony.",
        ar: "دمج البوابات الخارجية والأنظمة الطرفية مع ERP لإحداث التناغم التشغيلي اللحظي.",
      },
    },
  ];

  return (
    <section className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Professional Evolution & Solution Capability", "مسار التطور المهني والقدرات الاستشارية")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("From Business Process to Working Solution", "من إجراءات الأعمال إلى الحل البرمجي المتكامل")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "Monica's trajectory expanded from deep functional configuration to full-spectrum solution engineering, mastering both the organizational “why” and the technical “how”.",
              "تطور مسار مونيكا من التهيئة الوظيفية العميقة إلى هندسة الحلول الشاملة، ممتلكةً الرؤية المؤسسية للهدف والإتقان الفني للتنفيذ."
            )}
          </p>
        </div>

        {/* Interactive Progression Chain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stepped Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {progression.map((item, idx) => {
              const isSelected = activeStep === idx;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left rtl:text-right p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#0078d4] border-[#0078d4] text-white shadow-lg shadow-[#0078d4]/20"
                      : "bg-[#0b1222] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="text-sm font-semibold tracking-tight">
                      {item.title[lang]}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-white translate-x-1 rtl:-translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400"
                    } ${isRtl ? "rotate-180" : ""}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Display */}
          <div className="lg:col-span-7 bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                  <span>{t("Progression Stage", "المرحلة")}</span>
                  <span>·</span>
                  <span>
                    {progression[activeStep].step} {t("of 07", "من 07")}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  {t("Solution Engineering Track", "مسار هندسة الحلول")}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                {progression[activeStep].title[lang]}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {progression[activeStep].description[lang]}
              </p>

              {/* Contextual Value Matrix */}
              <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80">
                <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2">
                  {t("Transformation Impact:", "أثر التحول والقيمة المضافة:")}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {progression[activeStep].impact[lang]}
                </p>
              </div>
            </div>

            {/* Step Controls */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                {t("← Previous Stage", "← المرحلة السابقة")}
              </button>

              <div className="flex gap-1.5">
                {progression.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeStep ? "w-6 bg-[#0078d4]" : "bg-slate-700"
                    }`}
                    aria-label={`Jump to stage ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={activeStep === progression.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(progression.length - 1, prev + 1))}
                className="text-xs font-semibold text-[#38bdf8] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                {t("Next Stage →", "المرحلة التالية →")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
