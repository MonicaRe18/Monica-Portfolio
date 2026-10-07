import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface NavigationProps {
  onOpenCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCV }) => {
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: t("About", "عن مونيكا"), href: "#about" },
    { label: t("Expertise", "الخبرات"), href: "#expertise" },
    { label: t("Journey", "المسيرة المهنية"), href: "#journey" },
    { label: t("Projects", "المشاريع"), href: "#projects" },
    { label: t("Opreix", "منظومة Opreix"), href: "#opreix" },
    { label: t("ESS / MSS", "الخدمة الذاتية"), href: "#ess-mss" },
    { label: t("Platforms", "المنصات والتقنيات"), href: "#technologies" },
    { label: t("Contact", "التواصل"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      const sectionIds = ["contact", "technologies", "ess-mss", "opreix", "projects", "journey", "expertise", "about", "hero"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll indicator bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#0078d4] via-[#38bdf8] to-[#6366f1] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Bar - Strictly Zone 1, Zone 2, Zone 3 */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-[#38bdf8] transition-colors whitespace-nowrap"
            >
              {PORTFOLIO_INFO.name[lang]}
            </a>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wide">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`transition-colors whitespace-nowrap relative py-1 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0078d4] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions + Language Switcher */}
            <div className="flex items-center gap-2.5">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-850 hover:bg-slate-750 hover:text-white border border-slate-700/80 rounded-md transition-all whitespace-nowrap"
                title={lang === "en" ? "تبديل إلى العربية" : "Switch to English"}
              >
                <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{lang === "en" ? "العربية" : "EN"}</span>
              </button>

              <button
                type="button"
                onClick={onOpenCV}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/70 hover:bg-slate-750 hover:text-white border border-slate-700/70 rounded-md transition-colors whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{t("Executive CV", "السيرة الذاتية")}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0078d4] hover:bg-[#106ebe] active:bg-[#005a9e] rounded-md shadow-sm transition-all whitespace-nowrap"
              >
                <span>{t("Contact", "تواصل مع مونيكا")}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-[-90deg]" : ""}`} />
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-1.5 text-slate-400 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-slate-200 bg-slate-800/80 rounded-md border border-slate-700"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                {t("View Executive CV", "عرض السيرة الذاتية")}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
