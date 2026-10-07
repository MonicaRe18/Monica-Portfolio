import React from "react";
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { HeroAiVisual } from "./HeroAiVisual";
import cinematicBgImg from "../assets/images/cinematic_enterprise_v2_1791395272492.jpg";

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { lang, t, isRtl } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-[#030712]"
    >
      {/* High-Resolution Cinematic Enterprise & Cybernetic Data-Center Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src={cinematicBgImg}
          alt=""
          className="w-full h-full object-cover object-right opacity-30 mix-blend-screen filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#050c1e]/90 to-[#071329]/70" />
      </div>

      {/* Background Architectural Grid Pattern & Moving Light Beams */}
      <div className="absolute inset-0 enterprise-grid opacity-25 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-[#0078d4]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Executive Headline & Positioning (approx 44%) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Clean unboxed metadata kicker with subtle animated pulse */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-4">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                {t("Enterprise Systems Leadership", "قيادة نظم الأعمال المؤسسية")}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t("Paradise AI Solutions", "بارادايس لحلول الذكاء الاصطناعي")}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t("Cairo, Egypt", "القاهرة، مصر")}</span>
            </div>

            {/* Powerful Executive Name with Subtle Metallic Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-[#93c5fd]">
              {PORTFOLIO_INFO.name[lang]}
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-200 tracking-tight mb-2">
              {PORTFOLIO_INFO.role[lang]}
            </div>

            <div className="text-base sm:text-lg font-semibold text-[#38bdf8] mb-6 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0078d4] shadow-sm shadow-[#0078d4]" />
              <span>{PORTFOLIO_INFO.platform[lang]}</span>
            </div>

            {/* Supporting Line with Refined Font Measure */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium">
              {PORTFOLIO_INFO.supportingLine[lang]}
            </p>

            {/* Value Proposition Callout */}
            <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#0078d4] px-4 py-2.5 mb-8 max-w-xl bg-slate-900/70 backdrop-blur-md rounded-r-xl rtl:rounded-l-xl rtl:rounded-r-none border-y border-r rtl:border-r-0 rtl:border-l border-slate-800/80 shadow-lg shadow-black/20">
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                {t(
                  "Translating complex public-sector and enterprise procedures into configurable, customized ERP architecture and operational digital solutions.",
                  "ترجمة اللوائح والإجراءات الحكومية والمؤسسية المعقدة إلى معمارية ERP دقيقة وقابلة للتخصيص وحلول رقمية تشغيلية فعالة."
                )}
              </p>
            </div>

            {/* CTAs with Micro-Motion and Glowing Borders */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollTo("journey")}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0078d4] to-[#106ebe] hover:from-[#106ebe] hover:to-[#005a9e] rounded-lg transition-all shadow-lg shadow-[#0078d4]/25 hover:shadow-[#0078d4]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t("Explore My Work", "استكشاف الأعمال")}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-850/80 hover:bg-slate-750 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all hover:-translate-y-0.5"
              >
                <span>{t("View Projects", "المشاريع المنفذة")}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>{t("Contact Monica", "تواصل مع مونيكا")}</span>
              </button>
            </div>

            {/* Verified Facts Bar */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xs text-slate-400 font-medium">
                  {t("Core Specialization", "التخصص الأساسي")}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {t("D365 F&O HR & Core", "D365 F&O الموارد البشرية")}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">
                  {t("Role Focus", "طبيعة الدور")}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {t("Team Lead & Business Analysis", "قائد فريق وتحليل أعمال")}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">
                  {t("Domain Reach", "نطاق المشاريع")}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {t("Government & Enterprise", "جهات حكومية ومؤسسية")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Animated Holographic AI Intelligence Visual (approx 56%) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center justify-center w-full">
            <HeroAiVisual />
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors p-2"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

