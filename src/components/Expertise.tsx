import React, { useState } from "react";
import { Database, Users, LineChart, Rocket, MonitorSmartphone, CheckCircle } from "lucide-react";
import { COMPETENCY_GROUPS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export const Expertise: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState<string>("erp-dynamics");

  const iconsMap: Record<string, React.ElementType> = {
    "erp-dynamics": Database,
    "functional-leadership": Users,
    "business-analysis": LineChart,
    "enterprise-delivery": Rocket,
    "digital-solutions": MonitorSmartphone,
  };

  const activeData = COMPETENCY_GROUPS.find((g) => g.id === selectedGroup) || COMPETENCY_GROUPS[0];
  const ActiveIcon = iconsMap[activeData.id] || Database;

  return (
    <section id="expertise" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Competency Architecture", "معمارية الكفاءات والقدرات")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "End-to-End Enterprise Consulting Capabilities",
              "قدرات استشارية مؤسسية شاملة ومتكاملة"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "An integrated competency framework spanning functional ERP strategy, deep business analysis, cross-functional team leadership, and solution engineering.",
              "إطار كفاءات متكامل يجمع بين استراتيجيات الـ ERP الوظيفية، التحليل المعمق للأعمال، قيادة الفرق الاستشارية، وهندسة الحلول البرمجية."
            )}
          </p>
        </div>

        {/* Competency Architecture Navigator */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0d1527] border border-slate-800 rounded-xl mb-10 max-w-4xl">
          {COMPETENCY_GROUPS.map((group) => {
            const Icon = iconsMap[group.id] || Database;
            const isSelected = selectedGroup === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroup(group.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-[#0078d4] text-white shadow-md shadow-[#0078d4]/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{group.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Competency Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Focus Detail Card */}
          <div className="lg:col-span-8 bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/30 flex items-center justify-center text-[#38bdf8]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {activeData.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {activeData.subtitle[lang]}
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    {activeData.items.length} {t("Core Areas", "مجالات أساسية")}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {activeData.description[lang]}
              </p>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0e172a]/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {item[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Governance Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <span>{t("Standard-compliant delivery methodology", "منهجية تسليم قياسية معتمدة")}</span>
              <span className="text-[#38bdf8] font-medium">{t("Enterprise Proven", "مجربة مؤسسياً")}</span>
            </div>
          </div>

          {/* Quick Competency Architecture Matrix on the Right */}
          <div className="lg:col-span-4 bg-[#0e1628] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4 pb-3 border-b border-slate-800">
                {t("Delivery Matrix Overview", "مصفوفة مجالات التسليم")}
              </div>
              <div className="space-y-4">
                {COMPETENCY_GROUPS.map((group) => {
                  const isCurrent = group.id === selectedGroup;
                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setSelectedGroup(group.id)}
                      className={`w-full text-left rtl:text-right p-3 rounded-lg border transition-all ${
                        isCurrent
                          ? "bg-[#131f38] border-[#0078d4]/60 text-white"
                          : "bg-slate-900/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{group.title[lang]}</span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {group.items.length} {t("skills", "محاور")}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {group.subtitle[lang]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
              {t(
                "Demonstrated across Egyptian ministries, governorates, and custom enterprise platforms.",
                "مُطبقة ومُبرهنة في الوزارات والمحافظات المصرية ومنظومات العمليات المخصصة."
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
