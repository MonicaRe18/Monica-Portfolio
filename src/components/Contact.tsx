import React, { useState } from "react";
import { Mail, Phone, Linkedin, FileText, Check, Copy, ArrowUpRight, MessageCircle } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

interface ContactProps {
  onOpenCV: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCV }) => {
  const { lang, t, isRtl } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080c14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Direct Executive Engagements", "التواصل والاستشارات المباشرة")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t("Let's Build Better Enterprise Solutions", "لنصنع حلولاً مؤسسية أكثر كفاءة وذكاءً")}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            {t(
              "Available for strategic Microsoft Dynamics 365 F&O functional consulting, enterprise solution leadership, business analysis, and public-sector transformation advisory.",
              "متاحة للاستشارات الوظيفية الاستراتيجية في Microsoft Dynamics 365 F&O، قيادة الحلول المؤسسية، تحليل الأعمال، والتحول الرقمي للقطاع الحكومي والخاص."
            )}
          </p>
        </div>

        {/* Direct Communication Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Email Channel */}
          <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/20 flex items-center justify-center text-[#38bdf8] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                {t("Corporate Email", "البريد الإلكتروني المباشر")}
              </span>
              <a
                href={`mailto:${PORTFOLIO_INFO.contact.email}`}
                className="text-sm sm:text-base font-bold text-white hover:text-[#38bdf8] transition-colors break-all"
              >
                {PORTFOLIO_INFO.contact.email}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={`mailto:${PORTFOLIO_INFO.contact.email}`}
                className="text-xs font-semibold text-[#38bdf8] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>{t("Compose Email", "إرسال رسالة")}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-[-90deg]" : ""}`} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs text-slate-400 hover:text-white transition-colors p-1"
                title={t("Copy email address", "نسخ البريد الإلكتروني")}
              >
                {copiedEmail ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                    <Check className="w-3.5 h-3.5" /> {t("Copied", "تم النسخ")}
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/20 flex items-center justify-center text-[#38bdf8] mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                {t("Executive Network", "الملف المهني على لينكد إن")}
              </span>
              <div className="text-sm sm:text-base font-bold text-white">
                {PORTFOLIO_INFO.name[lang]}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                {PORTFOLIO_INFO.contact.linkedInHandle}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={PORTFOLIO_INFO.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#38bdf8] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>{t("Connect on LinkedIn", "تواصل عبر LinkedIn")}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-[-90deg]" : ""}`} />
              </a>
            </div>
          </div>

          {/* Direct Phone / Mobile */}
          <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                {t("Direct Contact", "رقم الهاتف والاتصال")}
              </span>
              <div className="text-sm sm:text-base font-bold text-white font-mono dir-ltr">
                {PORTFOLIO_INFO.contact.phoneFormatted}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {t("Cairo, Egypt · GMT+2", "القاهرة، مصر")}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={`tel:${PORTFOLIO_INFO.contact.phone}`}
                className="text-xs font-semibold text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>{t("Call Direct", "اتصال مباشر")}</span>
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-xs text-slate-400 hover:text-white transition-colors p-1"
                title={t("Copy phone number", "نسخ رقم الهاتف")}
              >
                {copiedPhone ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                    <Check className="w-3.5 h-3.5" /> {t("Copied", "تم النسخ")}
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Executive Action Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#0d162a] via-[#0f1d38] to-[#0d162a] border border-[#0078d4]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {t("Need a Full Executive Credentials Document?", "هل ترغب في مراجعة وثيقة السيرة الذاتية التنفيذية الكاملة؟")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {t(
                "Access the verified record of roles, governance, and transformation engagements.",
                "اطّلع على السجل المعتمد للمسؤوليات، الحوكمة، ومشاريع التحول الرقمي الموثقة."
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0078d4] hover:bg-[#106ebe] rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              <span>{t("Open Executive CV", "فتح السيرة الذاتية")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
