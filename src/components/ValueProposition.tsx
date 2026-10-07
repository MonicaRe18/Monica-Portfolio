import React from "react";
import { VALUE_PILLARS } from "../data/portfolioData";
import { Compass, GitBranch, Cpu, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ValueProposition: React.FC = () => {
  const { lang, t } = useLanguage();
  const icons = [Compass, GitBranch, Cpu, Award];

  return (
    <section className="py-24 relative border-b border-slate-800/60 bg-gradient-to-b from-[#080c14] to-[#0a101d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-4">
            {t("Executive Philosophy", "الفلسفة الاستشارية التنفيذية")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t("Business First.", "الأعمال أولاً.")}
            <br />
            <span className="text-slate-400">
              {t("Technology Second.", "التقنية ثانياً.")}
            </span>
            <br />
            <span className="text-[#38bdf8]">
              {t("Impact Always.", "الأثر المؤسسي دائماً.")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Technology should translate real business procedures into simpler, controlled, and scalable operations.",
              "التقنية يجب أن تترجم إجراءات العمل الحقيقية إلى عمليات أكثر بساطة، إحكاماً، وقابلية للنمو والاستدامة."
            )}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Compass;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b1222]/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/30 flex items-center justify-center text-[#38bdf8] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {t("Pillar", "الركيزة")} 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-850 text-[11px] text-[#38bdf8] font-medium">
                  {t("Operational Core", "جوهر الكفاءة")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
