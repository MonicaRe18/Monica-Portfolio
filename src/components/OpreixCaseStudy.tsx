import React, { useState } from "react";
import { Users, DollarSign, CheckSquare, Briefcase, GitCommit, ArrowRight, ShieldCheck, Laptop, BarChart3, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const OpreixCaseStudy: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [activeMockup, setActiveMockup] = useState<"profile" | "payroll" | "tasks" | "projects">("profile");
  const [activeFlow, setActiveFlow] = useState<number>(0);

  const moduleConnections = [
    {
      id: "flow-1",
      title: { en: "Employee → HR → Payroll", ar: "الموظف ← الموارد البشرية ← الرواتب" },
      steps: [
        { en: "Employee Master", ar: "بيانات الموظف" },
        { en: "HR Contracts & Leaves", ar: "عقود وإجازات HR" },
        { en: "Payroll Calculation", ar: "احتساب الرواتب" },
      ],
      desc: {
        en: "Personnel data drives statutory contract terms and attendance, directly feeding automated monthly payroll calculations.",
        ar: "بيانات الموظف تحدد شروط العقد والحضور، وتغذي تلقائياً مسيرات الرواتب الشهرية.",
      },
    },
    {
      id: "flow-2",
      title: { en: "Employee / Team → Tasks → Projects", ar: "الموظف / الفريق ← المهام ← المشاريع" },
      steps: [
        { en: "Resource Pool", ar: "مجمع الموارد" },
        { en: "Task Execution", ar: "تنفيذ المهام" },
        { en: "Project Milestone", ar: "معالم المشروع" },
      ],
      desc: {
        en: "Cross-functional team allocations feed into sprint task backlogs that update macroscopic project deliverables.",
        ar: "توزيع الكوادر على المهام يدفع تقدم المراحل الرئيسية للمشروع بدقة.",
      },
    },
    {
      id: "flow-3",
      title: { en: "Project → Tasks → Team", ar: "المشروع ← المهام ← الفريق" },
      steps: [
        { en: "Project Scope", ar: "نطاق المشروع" },
        { en: "Work Breakdown (WBS)", ar: "هيكل تفكيك العمل" },
        { en: "Team Assignment", ar: "إسناد الفريق" },
      ],
      desc: {
        en: "Top-down enterprise objectives decompose into structured task items distributed to specific team members.",
        ar: "تفكيك الأهداف الاستراتيجية للمشروع إلى مهام محددة تسند لأعضاء الفريق.",
      },
    },
    {
      id: "flow-4",
      title: { en: "Management → Projects → Monitoring", ar: "الإدارة ← المشاريع ← المتابعة والرقابة" },
      steps: [
        { en: "Executive Oversight", ar: "الرقابة التنفيذية" },
        { en: "Multi-Project Portfolio", ar: "محفظة المشاريع" },
        { en: "KPI Telemetry", ar: "مؤشرات الأداء" },
      ],
      desc: {
        en: "Leadership oversees real-time health, delivery pace, and resource utilization across enterprise engagements.",
        ar: "إشراف القيادات على صحة الإنجاز ومعدلات استغلال الموارد عبر كافة المشاريع.",
      },
    },
  ];

  const contributions = [
    { en: "Business requirement analysis", ar: "تحليل متطلبات الأعمال وتحديد الأولويات" },
    { en: "Business process analysis", ar: "تحليل وتفكيك مسارات العمليات التشغيلية" },
    { en: "Functional design", ar: "صياغة التصميم الوظيفي للمنظومة" },
    { en: "Workflow definition", ar: "تعريف دورات العمل ومسارات الموافقات" },
    { en: "Solution structure", ar: "بناء هيكل ومعمارية الحل التقني" },
    { en: "Application development", ar: "المشاركة المباشرة في تطوير وتطويع التطبيق" },
    { en: "Business-to-technical translation", ar: "الترجمة والربط بين منطق الأعمال والتطوير البرمجي" },
  ];

  return (
    <section id="opreix" className="py-24 relative border-b border-slate-800/60 bg-[#080c14] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 -right-48 w-96 h-96 bg-[#0078d4]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Flagship Internal Enterprise Platform", "المنظومة المؤسسية الداخلية الرائدة")}
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              OPREIX
            </h2>
            <span className="text-sm sm:text-base font-semibold text-slate-400">
              {t("Enterprise Operations Management System", "نظام إدارة العمليات المؤسسية")}
            </span>
          </div>
          <p className="text-xs font-mono text-[#0078d4] mt-1">
            Paradise Artificial Intelligence / Paradise AI Solutions
          </p>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            {t(
              "Opreix was developed from scratch as an internal enterprise operations platform based on Paradise business requirements, unifying human resources, payroll, task management, and project execution.",
              "تم تطوير نظام Opreix من الصفر كمنصة داخلية لإدارة العمليات المؤسسية بناءً على متطلبات أعمال شركة بارادايس، حيث يوحد إدارة الموارد البشرية، الرواتب، متابعة المهام، وإدارة المشاريع في منظومة متكاملة واحدة."
            )}
          </p>
        </div>

        {/* 1. OPREIX CORE Architecture Diagram */}
        <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              {t("Opreix Core Interconnected Architecture", "معمارية نواة Opreix والوحدات المتصلة")}
            </span>
            <span className="text-[11px] font-mono text-[#38bdf8]">
              4 Synchronized Modules
            </span>
          </div>

          {/* Central Opreix Core Hub Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* HR Module */}
            <div className="p-4 rounded-xl bg-[#090f1e] border border-slate-800 hover:border-[#0078d4]/50 transition-all">
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{t("HR Module", "الموارد البشرية")}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t("Employee contracts, attendance & leave balance", "العقود وسجلات الإجازات والحضور")}
              </p>
            </div>

            {/* Payroll Module */}
            <div className="p-4 rounded-xl bg-[#090f1e] border border-slate-800 hover:border-[#0078d4]/50 transition-all">
              <div className="flex items-center gap-2 mb-2 text-emerald-400">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{t("Payroll Module", "الرواتب والبدلات")}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t("Salary structures, allowances & net disbursement", "مسيرات الرواتب والبدلات والاستقطاعات")}
              </p>
            </div>

            {/* Task Management */}
            <div className="p-4 rounded-xl bg-[#090f1e] border border-slate-800 hover:border-[#0078d4]/50 transition-all">
              <div className="flex items-center gap-2 mb-2 text-amber-400">
                <CheckSquare className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{t("Task Management", "إدارة المهام")}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t("Backlogs, assignments, time-logs & statuses", "توزيع المهام وتتبع ساعات العمل والإنجاز")}
              </p>
            </div>

            {/* Project Management */}
            <div className="p-4 rounded-xl bg-[#090f1e] border border-slate-800 hover:border-[#0078d4]/50 transition-all">
              <div className="flex items-center gap-2 mb-2 text-purple-400">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{t("Project Management", "إدارة المشاريع")}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t("Milestones, deliverables & portfolio health", "المعالم الرئيسية وتسليم المشاريع")}
              </p>
            </div>
          </div>

          {/* Module Connection Pathways Selector */}
          <div className="bg-[#070b16] border border-slate-800/80 rounded-xl p-5">
            <div className="text-xs font-semibold text-slate-300 mb-3">
              {t("Explore Key Inter-Module Data Flows:", "استكشف مسارات تدفق البيانات بين الوحدات:")}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
              {moduleConnections.map((conn, idx) => (
                <button
                  key={conn.id}
                  type="button"
                  onClick={() => setActiveFlow(idx)}
                  className={`p-2.5 rounded-lg text-left rtl:text-right border text-xs font-bold transition-all ${
                    activeFlow === idx
                      ? "bg-[#0078d4] border-[#0078d4] text-white shadow-md shadow-[#0078d4]/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {conn.title[lang]}
                </button>
              ))}
            </div>

            {/* Active Connection Visual Steps */}
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {moduleConnections[activeFlow].steps.map((st, i) => (
                  <React.Fragment key={i}>
                    <span className="px-3 py-1 rounded bg-[#0f1d38] border border-blue-500/30 text-white text-xs font-semibold">
                      {st[lang]}
                    </span>
                    {i < moduleConnections[activeFlow].steps.length - 1 && (
                      <span className="text-[#38bdf8] font-bold text-xs">{isRtl ? "←" : "→"}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs text-slate-300 italic sm:max-w-xs">
                {moduleConnections[activeFlow].desc[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Animated UI Mockups Explorer */}
        <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t("Opreix Operational Interface Simulator", "محاكي واجهات نظام Opreix التشغيلي")}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {t("Interactive demo UI views showing real functional structure", "نماذج واجهات توضيحية تحاكي الهيكل الوظيفي الحقيقي")}
              </p>
            </div>

            <div className="flex gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveMockup("profile")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  activeMockup === "profile" ? "bg-[#0078d4] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t("Employee Profile", "ملف الموظف")}
              </button>
              <button
                type="button"
                onClick={() => setActiveMockup("payroll")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  activeMockup === "payroll" ? "bg-[#0078d4] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t("Payroll Overview", "مسير الرواتب")}
              </button>
              <button
                type="button"
                onClick={() => setActiveMockup("tasks")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  activeMockup === "tasks" ? "bg-[#0078d4] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t("Task Board", "لوحة المهام")}
              </button>
              <button
                type="button"
                onClick={() => setActiveMockup("projects")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  activeMockup === "projects" ? "bg-[#0078d4] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t("Project Dashboard", "لوحة المشاريع")}
              </button>
            </div>
          </div>

          {/* Render Active Mockup */}
          <div className="p-5 rounded-xl bg-[#070b16] border border-slate-800 text-xs">
            {activeMockup === "profile" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#38bdf8] font-bold">
                      EMP
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Demo Consultant Profile</div>
                      <div className="text-[11px] text-slate-400 font-mono">D365 Team · Paradise AI</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px]">
                    Active Status
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Contract Type</span>
                    <span className="text-white font-semibold">Enterprise Full-Time</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Leave Balance</span>
                    <span className="text-white font-semibold">18 Days Remaining</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Current Allocation</span>
                    <span className="text-white font-semibold">Government ERP Rollout</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Manager Approval</span>
                    <span className="text-emerald-400 font-semibold">Synced with HR</span>
                  </div>
                </div>
              </div>
            )}

            {activeMockup === "payroll" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="font-bold text-white text-sm">Monthly Payroll Summary Register</div>
                    <div className="text-[11px] text-slate-400 font-mono">Automated Disbursement Batch</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[#38bdf8] border border-blue-500/20 font-mono text-[10px]">
                    Batch Reconciled
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Basic Pay & Base Allowances</span>
                    <span className="text-white font-semibold">Calculated from Contract</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Statutory Deductions & Taxes</span>
                    <span className="text-white font-semibold">Law-Compliant Tier</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Net Bank Transfer File</span>
                    <span className="text-emerald-400 font-semibold">Validated for Posting</span>
                  </div>
                </div>
              </div>
            )}

            {activeMockup === "tasks" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="font-bold text-white text-sm">Sprint Task Board · Operational Backlog</div>
                  <span className="text-[11px] text-slate-400 font-mono">Real-Time Delivery</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-1 text-[11px]">To-Do (Requirements)</span>
                    <p className="text-slate-300 text-[11px]">Customs Clearance Process Map review</p>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-blue-400 font-bold block mb-1 text-[11px]">In Progress (Design)</span>
                    <p className="text-slate-300 text-[11px]">FDD document for Regulatory Workflow</p>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-1 text-[11px]">Completed (Tested)</span>
                    <p className="text-slate-300 text-[11px]">HR Leave Request approval schema sign-off</p>
                  </div>
                </div>
              </div>
            )}

            {activeMockup === "projects" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="font-bold text-white text-sm">Enterprise Project Portfolio Health</div>
                  <span className="text-[11px] text-emerald-400 font-mono">All Streams on Track</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 text-[11px] block">Government Multi-Module</span>
                    <span className="text-white font-semibold">Milestone 4 of 5 Completed</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 text-[11px] block">HR & ESS Portal Integration</span>
                    <span className="text-white font-semibold">UAT Testing Phase Active</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 text-[11px] block">Custom Regulatory Approval</span>
                    <span className="text-white font-semibold">Production Cutover Ready</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Monica's Direct Contribution Breakdown */}
        <div className="bg-[#0e1628] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Consultant & Lead Role", "الدور القيادي والاستشاري")}
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-4">
            {t("Monica's Direct Contributions to Opreix", "مساهمات مونيكا المباشرة في Opreix")}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {t(
              "Bridged internal business leadership with hands-on technical creation, ensuring every operational policy found a direct functional counterpart.",
              "الربط المحكم بين قيادة الأعمال والتطوير الفني الميداني، وضمان وجود نظير وظيفي واضح لكل سياسة تشغيلية."
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {contributions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"
              >
                <span className="text-[11px] font-mono text-[#0078d4] font-bold">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  {item[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
