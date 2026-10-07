import React from "react";
import { ArrowUp, Mail, Linkedin } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div>
            <div className="font-bold text-white text-sm tracking-tight">
              {PORTFOLIO_INFO.name[lang]}
            </div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              {PORTFOLIO_INFO.role[lang]} · {PORTFOLIO_INFO.platform[lang]}
            </div>
          </div>

          {/* Nav Anchors */}
          <div className="flex flex-wrap items-center gap-5 text-slate-400 text-xs">
            <a href="#about" className="hover:text-white transition-colors">{t("About", "عن مونيكا")}</a>
            <a href="#expertise" className="hover:text-white transition-colors">{t("Expertise", "الخبرات")}</a>
            <a href="#journey" className="hover:text-white transition-colors">{t("Journey", "المسيرة")}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t("Projects", "المشاريع")}</a>
            <a href="#opreix" className="hover:text-white transition-colors">{t("Opreix", "منظومة Opreix")}</a>
            <a href="#technologies" className="hover:text-white transition-colors">{t("Platforms", "المنصات")}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t("Contact", "التواصل")}</a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_INFO.contact.email}`}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Email Monica"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_INFO.contact.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors p-1 ml-2 rtl:ml-0 rtl:mr-2"
              aria-label="Scroll to top of page"
            >
              <span>{t("Back to Top", "للأعلى")}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Legal Row */}
        <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name[lang]}. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </div>
          <div>
            {t(
              "Enterprise Consulting · Systems Architecture · Digital Transformation",
              "الاستشارات المؤسسية · معمارية النظم · التحول الرقمي"
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
