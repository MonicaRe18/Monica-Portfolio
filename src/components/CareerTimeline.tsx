import React from "react";
import { Briefcase, Calendar, Check, Star } from "lucide-react";
import { CAREER_STAGES } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export const CareerTimeline: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="journey" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Career Milestones & Trajectory", "المحطات المهنية والمسار القيادي")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "Professional Evolution & Leadership Record",
              "التطور المهني وسجل القيادة الاستشارية"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "From telecommunications enterprise environments to leading Microsoft Dynamics 365 F&O transformations and solution engineering at Paradise AI Solutions.",
              "من بيئات قطاع الاتصالات الكبرى إلى قيادة مشاريع التحول الرقمي لـ Dynamics 365 F&O وهندسة الحلول في بارادايس للذكاء الاصطناعي."
            )}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-4 rtl:left-auto rtl:right-4 sm:left-8 sm:rtl:right-8 top-6 bottom-6 w-[2px] bg-slate-800 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {CAREER_STAGES.map((stage) => {
              const isHighlight = stage.highlight;

              return (
                <div
                  key={stage.id}
                  className="relative flex items-start gap-6 sm:gap-10 pl-2 rtl:pl-0 rtl:pr-2 sm:pl-4 sm:rtl:pr-4 group"
                >
                  {/* Timeline Indicator Node */}
                  <div
                    className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-transform ${
                      isHighlight
                        ? "bg-[#0078d4] text-white ring-4 ring-[#0078d4]/20 shadow-lg shadow-[#0078d4]/30"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {isHighlight ? (
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                    ) : (
                      <Briefcase className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                    )}
                  </div>

                  {/* Content Container */}
                  <div
                    className={`flex-1 rounded-2xl p-6 sm:p-8 transition-all ${
                      isHighlight
                        ? "bg-gradient-to-b from-[#0d162a] to-[#0a101f] border-2 border-[#0078d4]/50 shadow-xl shadow-black/40"
                        : "bg-[#0b1222]/60 border border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className={`font-bold tracking-tight ${
                              isHighlight
                                ? "text-xl sm:text-2xl text-white"
                                : "text-base sm:text-lg text-slate-200"
                            }`}
                          >
                            {stage.company[lang]}
                          </h3>
                          {isHighlight && (
                            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {t("Present Engagement", "المنصب الحالي")}
                            </span>
                          )}
                        </div>

                        {stage.role && (
                          <div className="text-sm sm:text-base font-semibold text-[#38bdf8] mt-1">
                            {stage.role[lang]}
                          </div>
                        )}
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{stage.period[lang]}</span>
                      </div>
                    </div>

                    {/* Scope & Responsibilities */}
                    {stage.scopePoints && stage.scopePoints.length > 0 ? (
                      <div>
                        <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
                          {t(
                            "Comprehensive Scope of Leadership & Delivery:",
                            "نطاق المسؤوليات الاستشارية والتنفيذية:"
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {stage.scopePoints.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0e172a]/60 border border-slate-800/60"
                            >
                              <div className="w-4 h-4 rounded-full bg-[#0078d4]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 text-[#38bdf8]" />
                              </div>
                              <span className="text-xs text-slate-300 font-medium leading-relaxed">
                                {point[lang]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-400">
                        {t(
                          "Enterprise communications and systems foundation, providing operational rigor and organizational discipline.",
                          "العمل في قطاع الاتصالات المؤسسي واكتساب الانضباط التشغيلي والتنظيمي المعياري."
                        )}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
