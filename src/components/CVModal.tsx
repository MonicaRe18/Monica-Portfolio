import React from "react";
import { X, Printer, Mail, Phone, Linkedin, Check } from "lucide-react";
import { PORTFOLIO_INFO, CAREER_STAGES, FEATURED_PROJECTS, COMPETENCY_GROUPS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { lang, t, isRtl } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0b1222] text-slate-200 border border-slate-750 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-[#080d1a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
              {t("Executive Profile & Curriculum Vitae", "السيرة الذاتية والملف التنفيذي")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t("Print / Save PDF", "طباعة / حفظ PDF")}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090e1c]">
          {/* Document Header */}
          <div className="border-b border-slate-800 pb-6">
            <h2 id="cv-title" className="text-3xl font-extrabold text-white tracking-tight">
              {PORTFOLIO_INFO.name[lang]}
            </h2>
            <div className="text-base font-semibold text-[#38bdf8] mt-1">
              {PORTFOLIO_INFO.role[lang]}
            </div>
            <div className="text-sm text-slate-300 font-medium mt-0.5">
              {PORTFOLIO_INFO.platform[lang]}
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800/60 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0078d4]" />
                {PORTFOLIO_INFO.contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0078d4]" />
                {PORTFOLIO_INFO.contact.phoneFormatted}
              </span>
              <a
                href={PORTFOLIO_INFO.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#38bdf8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0078d4]" />
                {PORTFOLIO_INFO.contact.linkedInHandle}
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">
              {t("Executive Summary", "الملخص التنفيذي")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t(
                "Senior Business Systems Consultant, Functional Consultant Team Lead and Business Analyst with strong experience in Microsoft Dynamics 365 Finance & Operations. Leading and contributing to government and enterprise transformation engagements since January 2023 with Paradise Artificial Intelligence / Paradise AI Solutions. Human Resources functional specialization alongside cross-module delivery, solution engineering, web solutions, ESS/MSS solutions, and enterprise integrations.",
                "استشاري أول نظم أعمال وقائد فريق استشارات وظيفية ومحلل أعمال، تتمتع بخبرة واسعة في Microsoft Dynamics 365 Finance & Operations. تقود وتشارك في مشاريع التحول الرقمي للقطاعين الحكومي والمؤسسي منذ يناير 2023 مع شركة بارادايس للذكاء الاصطناعي. تخصص وظيفي دقيق في الموارد البشرية إلى جانب التسليم المتكامل عبر الموديولات، هندسة الحلول، تطبيقات الويب، حلول الخدمة الذاتية (ESS/MSS)، وتكاملات الأنظمة المؤسسية."
              )}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-4">
              {t("Professional Experience", "الخبرة المهنية")}
            </h3>
            <div className="space-y-6">
              {CAREER_STAGES.map((stage) => (
                <div key={stage.id} className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#0078d4] pl-4 rtl:pl-0 rtl:pr-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      {stage.company[lang]}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      {stage.period[lang]}
                    </span>
                  </div>
                  {stage.role && (
                    <div className="text-xs font-semibold text-[#38bdf8] mt-0.5">
                      {stage.role[lang]}
                    </div>
                  )}
                  {stage.scopePoints && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-3">
                      {stage.scopePoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Project Engagements */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3">
              {t("Selected Engagements (Paradise AI Solutions)", "المشاريع المختارة (بارادايس لحلول الذكاء الاصطناعي)")}
            </h3>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>{proj.title[lang]}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{proj.client[lang]}</span>
                  </div>
                  <p className="text-slate-400 mt-1">{proj.scope[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competency Framework */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3">
              {t("Core Competency Domains", "مجالات الكفاءة الأساسية")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {COMPETENCY_GROUPS.map((grp) => (
                <div key={grp.id} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="font-semibold text-white mb-1">{grp.title[lang]}</div>
                  <div className="text-slate-400">
                    {grp.items.map((i) => i[lang]).join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 border-t border-slate-800 bg-[#080d1a] flex items-center justify-between text-xs text-slate-400">
          <span>{t("Verified Enterprise Credentials", "سجل مهني معتمد")}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0078d4] hover:bg-[#106ebe] rounded-md transition-colors"
          >
            {t("Close View", "إغلاق")}
          </button>
        </div>
      </div>
    </div>
  );
};
