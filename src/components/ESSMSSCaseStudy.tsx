import React, { useState } from "react";
import { UserCheck, ShieldAlert, FileText, CheckCircle, Database, Laptop, ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ESSMSSCaseStudy: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [dataFlowDirection, setDataFlowDirection] = useState<"forward" | "reverse">("forward");

  const functionalPillars = [
    {
      title: { en: "Employee Services", ar: "خدمات الموظفين" },
      desc: {
        en: "Self-service operational interface allowing staff to submit administrative requests outside the complex ERP GUI.",
        ar: "واجهة استخدام تشغيلية ميسرة تمكن الموظفين من تقديم الطلبات الإدارية دون الحاجة لشاشات ERP المعقدة.",
      },
      icon: UserCheck,
    },
    {
      title: { en: "Manager Services", ar: "خدمات المديرين" },
      desc: {
        en: "Dedicated supervisory dashboard enabling managers to review team submissions and initiate approvals.",
        ar: "لوحة تحكم إشرافية تتيح للقيادات مراجعة طلبات الفرق ومباشرة دورات الاعتماد.",
      },
      icon: ShieldAlert,
    },
    {
      title: { en: "Requests & Submissions", ar: "الطلبات والمعاملات" },
      desc: {
        en: "Standardized digital request cycles structured according to organizational standard operating procedures.",
        ar: "دورات طلبات رقمية موحدة مبنية طبقاً للإجراءات التشغيلية القياسية للمؤسسة.",
      },
      icon: FileText,
    },
    {
      title: { en: "Approvals & Hierarchy", ar: "الموافقات والتسلسل الإداري" },
      desc: {
        en: "Multi-tiered approval routing aligning with enterprise governance rules before posting to core registers.",
        ar: "توجيه الموافقات عبر مستويات إدارية متعددة بالتوافق مع قواعد الحوكمة قبل الترحيل للدورة المالية.",
      },
      icon: CheckCircle,
    },
    {
      title: { en: "ERP Data Synchronization", ar: "مزامنة بيانات ERP" },
      desc: {
        en: "Bi-directional master data mapping preserving data integrity within the primary financial ledger.",
        ar: "ربط ومزامنة ثنائية الاتجاه تحافظ على سلامة وتطابق البيانات في السجلات المالية المركزية.",
      },
      icon: Database,
    },
    {
      title: { en: "Workflow Interaction", ar: "التفاعل مع دورات العمل" },
      desc: {
        en: "Real-time state transitions keeping users informed of approvals, pending reviews, and ERP confirmations.",
        ar: "تحديث فوري لحالات الطلبات وإشعار المستخدمين بالموافقات ومراحل التدقيق وترحيل النظام.",
      },
      icon: Laptop,
    },
  ];

  return (
    <section id="ess-mss" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Digital Transformation Case Study", "دراسة حالة التحول الرقمي")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "ESS / MSS Portal & Dynamics 365 Integration",
              "بوابة الخدمة الذاتية (ESS/MSS) والتكامل مع Dynamics 365"
            )}
          </h2>
          <p className="text-base font-semibold text-slate-300 mt-2">
            {t(
              "Employee Self-Service & Manager Self-Service Solution",
              "حلول الخدمة الذاتية للموظفين والمديرين"
            )}
          </p>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "Monica contributed to the architecture and implementation of a web-based solution providing employee and manager self-service capabilities outside the core Dynamics 365 interface, drastically lowering user adoption friction while maintaining ERP integrity.",
              "ساهمت مونيكا في معمارية وتنفيذ حل رقمي قائم على الويب يتيح قدرات الخدمة الذاتية للموظفين والمديرين خارج واجهة Dynamics 365 المعقدة، مما قلل مقاومة التغيير ورفع كفاءة التبني المؤسسي مع صون موثوقية سجلات ERP."
            )}
          </p>
        </div>

        {/* Bi-Directional Animated Integration Diagram */}
        <div
          onMouseEnter={() => setDataFlowDirection("reverse")}
          onMouseLeave={() => setDataFlowDirection("forward")}
          className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-10 mb-12 shadow-2xl relative transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300 block">
                {t("Bi-Directional Integration Flow Engine", "محرك تدفق البيانات ثنائي الاتجاه")}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {dataFlowDirection === "forward"
                  ? t("Forward Submission: Employee/Manager → Portal → Workflow → D365", "المسار الأمامي: الموظف/المدير ← البوابة ← دورة العمل ← D365")
                  : t("Reverse Sync: D365 ERP Core → Integration → Portal → User", "المسار العكسي: نواة D365 ← التكامل ← البوابة ← الموظف")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setDataFlowDirection(dataFlowDirection === "forward" ? "reverse" : "forward")}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>
                  {dataFlowDirection === "forward"
                    ? t("Switch to Reverse Sync Flow", "تبديل لمسار التزامن العكسي")
                    : t("Switch to Forward Submission Flow", "تبديل لمسار التقديم الأمامي")}
                </span>
              </button>
            </div>
          </div>

          {/* 4-Layer Interactive Architecture Board */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Layer 1: Users */}
            <div
              className={`p-5 rounded-xl border transition-all ${
                dataFlowDirection === "forward"
                  ? "bg-[#0e172a] border-[#0078d4]/70 shadow-md shadow-[#0078d4]/10"
                  : "bg-[#090f1e] border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Layer 01
                </span>
                <span className="text-xs font-bold text-blue-400">
                  {dataFlowDirection === "forward" ? "Source" : "Destination"}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                {t("Employee / Manager", "الموظف / المدير")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {dataFlowDirection === "forward"
                  ? t("User submits administrative request (leave, claim, attendance correction).", "يقدم المستخدم الطلب الإداري (إجازة، بدل، تصحيح حضور).")
                  : t("User receives verified real-time approval status and updated balances.", "يستلم المستخدم إشعار الاعتماد الموثق ورصيده المحدث فوراً.")}
              </p>
            </div>

            {/* Layer 2: ESS / MSS Web Portal */}
            <div className="p-5 rounded-xl bg-[#0e172a] border border-slate-700/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Layer 02
                </span>
                <span className="text-xs font-bold text-[#38bdf8]">
                  Front-End
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                {t("ESS / MSS Web Portal", "بوابة الخدمة الذاتية")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(
                  "Decoupled web experience abstracting complex ERP form logic.",
                  "واجهة ويب مبسطة تفصل تعقيد شاشات ERP عن المستخدمين."
                )}
              </p>
            </div>

            {/* Layer 3: Approval / Workflow & Integration */}
            <div className="p-5 rounded-xl bg-[#0e172a] border border-slate-700/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Layer 03
                </span>
                <span className="text-xs font-bold text-amber-400">
                  Logic Gate
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                {t("Approval / Workflow", "الموافقات والتكامل")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(
                  "Multi-tier approval routing, policy checks, and token security.",
                  "شجرة الاعتمادات المتعددة، مطابقة اللوائح، وحزم التشفير."
                )}
              </p>
            </div>

            {/* Layer 4: Microsoft Dynamics 365 F&O */}
            <div
              className={`p-5 rounded-xl border transition-all ${
                dataFlowDirection === "reverse"
                  ? "bg-[#0e172a] border-[#0078d4]/70 shadow-md shadow-[#0078d4]/10"
                  : "bg-[#090f1e] border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Layer 04
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {dataFlowDirection === "forward" ? "Ledger Post" : "Core Truth"}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                {t("Microsoft Dynamics 365 F&O", "مايكروسوفت دايناميكس 365")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {dataFlowDirection === "forward"
                  ? t("Validated transaction posts directly into standard ERP registers.", "ترحيل المعاملة المعتمدة مباشرة في دفاتر وسجلات ERP القياسية.")
                  : t("ERP master data and payroll ledger stream confirmed state back to web portal.", "سجلات ERP ودفاتر الرواتب تبث الحالات المعتمدة للبوابة.")}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>
              {dataFlowDirection === "forward"
                ? "Forward Motion: Action Request → Validation → Ledger"
                : "Reverse Motion: Ledger State → Token Dispatch → User Portal"}
            </span>
            <span className="text-[#38bdf8]">
              {t("Hover / Toggle to simulate reverse data sync", "مرر المؤشر لمحاكاة التزامن العكسي")}
            </span>
          </div>
        </div>

        {/* Conceptual Functional Breakdown */}
        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-6">
            {t(
              "Key Functional Capabilities Defined & Delivered",
              "أهم الإمكانات الوظيفية المحددة والمسلمة"
            )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {functionalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0b1222] border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0078d4]/10 border border-[#0078d4]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {pillar.title[lang]}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {pillar.desc[lang]}
                      </p>
                    </div>
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
