import React, { useState, useMemo } from "react";
import { ALL_TECHNOLOGIES_AND_PLATFORMS, PlatformItem } from "../data/portfolioData";
import { PlatformLogo } from "./PlatformLogos";
import { TechnologyOrbit } from "./TechnologyOrbit";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, Layers, Cpu, Network, ArrowUpRight } from "lucide-react";

export const TechnologyLandscape: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", en: "All Platforms", ar: "كل المنصات والتقنيات" },
    { id: "erp", en: "ERP & Systems", ar: "أنظمة ERP" },
    { id: "portal", en: "Web & Portals", ar: "البوابات والواجهات" },
    { id: "ai", en: "AI & Models", ar: "الذكاء الاصطناعي والنماذج" },
    { id: "automation", en: "Automation & Workflows", ar: "الأتمتة ومسارات العمل" },
    { id: "integration", en: "Integrations & ERD", ar: "التكاملات والمخططات" },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return ALL_TECHNOLOGIES_AND_PLATFORMS;
    return ALL_TECHNOLOGIES_AND_PLATFORMS.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section id="technologies" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>{t("Technology & Platform Ecosystem", "منظومة التقنيات والمنصات")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "Enterprise Platforms, AI Workflows & Modern Tools",
              "المنصات المؤسسية، مسارات عمل الذكاء الاصطناعي والأدوات الحديثة"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "An exhaustive landscape encompassing Microsoft Dynamics 365, custom enterprise portals like Opreix, advanced AI agent workflows, and seamless iPaaS automation.",
              "بيئة تقنية متكاملة تشمل Microsoft Dynamics 365، بوابات العمليات المخصصة مثل Opreix، مسارات وكلاء الذكاء الاصطناعي المتقدمة، وأتمتة التكاملات عبر iPaaS."
            )}
          </p>
        </div>

        {/* Orbit Visual Feature */}
        <div className="mb-16">
          <TechnologyOrbit />
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 bg-[#0d1627] border border-slate-800 rounded-lg">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#0078d4] text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {cat[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Platforms Grid with Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#0b1222] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0e172a] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Logo + Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 text-white group-hover:scale-105 transition-transform shrink-0">
                    <PlatformLogo type={item.logoType} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.categoryLabel[lang]}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors tracking-tight mb-1">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{item.category.toUpperCase()}</span>
                <span className="text-[#0078d4] group-hover:translate-x-0.5 transition-transform">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
