import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const KineticRibbon: React.FC = () => {
  const { lang, t } = useLanguage();

  const words = [
    { en: "Understand", ar: "الفهم والتشخيص" },
    { en: "Analyze", ar: "التحليل الاستراتيجي" },
    { en: "Design", ar: "التصميم المعماري" },
    { en: "Integrate", ar: "الربط والتكامل" },
    { en: "Deliver", ar: "التسليم المؤسسي" },
    { en: "Transform", ar: "التحول المستدام" },
  ];

  return (
    <div
      className="py-6 border-y border-slate-800/80 bg-[#060a14] overflow-hidden select-none relative"
      aria-hidden="true"
    >
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words].map((word, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-slate-400/80 hover:text-[#38bdf8] transition-colors">
              {word[lang]}
            </span>
            <span className="text-[#0078d4] font-bold text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
