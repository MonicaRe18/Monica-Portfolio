import React, { useState } from "react";
import { Database, ShieldCheck, DollarSign, Truck, LineChart, Users, Network, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const TechnologyOrbit: React.FC = () => {
  const { lang, t } = useLanguage();
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const orbitElements = [
    {
      id: "d365",
      label: { en: "Dynamics 365 F&O", ar: "Dynamics 365 F&O" },
      icon: Database,
      role: { en: "Enterprise Core Backbone", ar: "العمود الفقري للمنظومة المؤسسية" },
      angle: 0,
    },
    {
      id: "hr",
      label: { en: "Human Resources", ar: "الموارد البشرية" },
      icon: ShieldCheck,
      role: { en: "Primary Functional Specialization", ar: "التخصص الوظيفي الأساسي" },
      angle: 45,
    },
    {
      id: "finance",
      label: { en: "Finance", ar: "المالية والمحاسبة" },
      icon: DollarSign,
      role: { en: "Ledger, Budgeting & Governance", ar: "الدفاتر، الموازنات والحوكمة" },
      angle: 90,
    },
    {
      id: "supply-chain",
      label: { en: "Supply Chain", ar: "سلاسل الإمداد" },
      icon: Truck,
      role: { en: "Procurement & Trade Flows", ar: "المشتريات وإجراءات التوريد" },
      angle: 135,
    },
    {
      id: "ba",
      label: { en: "Business Analysis", ar: "تحليل الأعمال" },
      icon: LineChart,
      role: { en: "Fit-Gap & Process Architecture", ar: "تحليل الفجوات ومعمارية العمليات" },
      angle: 180,
    },
    {
      id: "ess-mss",
      label: { en: "ESS / MSS", ar: "الخدمة الذاتية ESS/MSS" },
      icon: Users,
      role: { en: "Employee & Manager Self-Service", ar: "خدمات الموظفين والمديرين" },
      angle: 225,
    },
    {
      id: "integration",
      label: { en: "Integration", ar: "التكامل والربط" },
      icon: Network,
      role: { en: "Cross-System Process Sync", ar: "مزامنة البيانات بين الأنظمة" },
      angle: 270,
    },
    {
      id: "web-solutions",
      label: { en: "Opreix & Web", ar: "منظومة Opreix والويب" },
      icon: Globe,
      role: { en: "Custom Front-End Applications", ar: "الواجهات والتطبيقات المخصصة" },
      angle: 315,
    },
  ];

  return (
    <div className="w-full bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-1">
          {t("Ecosystem Architecture", "معمارية المنظومة المتكاملة")}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {t("Microsoft Dynamics & Enterprise Orbit", "مدار مايكروسوفت دايناميكس والمنظومة المؤسسية")}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {t(
            "The harmonious convergence of core ERP modules, analytical rigor, and extended web solutions.",
            "الالتقاء المتناغم بين موديولات ERP الأساسية، التحليل المنهجي، وحلول الويب المتقدمة."
          )}
        </p>
      </div>

      {/* Orbit Visualization Container */}
      <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] mx-auto flex items-center justify-center">
        {/* Orbital Rings */}
        <div
          className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-slate-800/80 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-dashed border-slate-800/60 pointer-events-none"
          aria-hidden="true"
        />

        {/* Central Sun / ERP Core */}
        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#0078d4] to-[#106ebe] flex flex-col items-center justify-center text-center p-2 shadow-xl shadow-[#0078d4]/30 border-2 border-white/20">
          <Database className="w-6 h-6 text-white mb-1" />
          <span className="text-[11px] font-bold text-white tracking-tight leading-tight">
            Dynamics 365
          </span>
          <span className="text-[9px] text-blue-100 font-medium">
            {t("Core Platform", "نواة المنظومة")}
          </span>
        </div>

        {/* Orbiting Nodes */}
        {orbitElements.map((item) => {
          const Icon = item.icon;
          const radius = 145;
          const angleInRad = (item.angle * Math.PI) / 180;
          const x = Math.cos(angleInRad) * radius;
          const y = Math.sin(angleInRad) * radius;

          const isHovered = hoveredElement === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredElement(item.id)}
              onMouseLeave={() => setHoveredElement(null)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute z-20 transition-transform duration-300 cursor-pointer"
            >
              <div
                className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
                  isHovered
                    ? "bg-[#142340] border-[#0078d4] text-white shadow-lg shadow-[#0078d4]/20 scale-110 z-30"
                    : "bg-[#0d1627]/90 border-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${
                    isHovered ? "bg-[#0078d4] text-white" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold whitespace-nowrap hidden sm:inline">
                  {item.label[lang]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Orbit Information Banner */}
      <div className="mt-4 pt-4 border-t border-slate-800 text-center">
        {hoveredElement ? (
          <div className="text-xs text-slate-200 font-medium">
            <span className="text-[#38bdf8] font-bold">
              {orbitElements.find((e) => e.id === hoveredElement)?.label[lang]}:
            </span>{" "}
            {orbitElements.find((e) => e.id === hoveredElement)?.role[lang]}
          </div>
        ) : (
          <div className="text-xs text-slate-500">
            {t(
              "Hover over any ecosystem node to inspect functional governance",
              "مرر المؤشر فوق أي عنصر للاطلاع على الدور الوظيفي والحوكمة"
            )}
          </div>
        )}
      </div>
    </div>
  );
};
