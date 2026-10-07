import React, { useState, useMemo } from "react";
import { FEATURED_PROJECTS, ProjectData } from "../data/portfolioData";
import { ArrowUpRight, Check, X, Layers, Network, ShieldCheck, Workflow, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const FeaturedProjects: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filters = [
    { id: "All", en: "All", ar: "الكل" },
    { id: "Government", en: "Government", ar: "حكومي" },
    { id: "Dynamics 365", en: "Dynamics 365", ar: "Dynamics 365" },
    { id: "Business Analysis", en: "Business Analysis", ar: "تحليل أعمال" },
    { id: "HR", en: "HR", ar: "الموارد البشرية" },
    { id: "Custom Solutions", en: "Custom Solutions", ar: "حلول مخصصة" },
    { id: "Integration", en: "Integration", ar: "تكامل الأنظمة" },
    { id: "Web Solutions", en: "Web Solutions", ar: "حلول ويب" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((proj) =>
      proj.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  // Render project-specific visual architecture diagram
  const renderProjectVisual = (projectId: string) => {
    if (projectId === "new-valley-gov") {
      // New Valley: Complete Multi-Module Architecture
      return (
        <div className="p-5 rounded-xl bg-[#070b16] border border-blue-500/40 my-4 relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block">
              {t("Multi-Module Flagship Architecture", "معمارية المنظومة الشاملة متعددة الموديولات")}
            </span>
            <div className="text-xs font-bold text-white">
              Enterprise Core & 7 Connected Streams
            </div>
          </div>

          {/* Central Enterprise Core Hub */}
          <div className="flex flex-col items-center mb-4">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0078d4] to-[#106ebe] text-white font-bold text-xs shadow-lg shadow-[#0078d4]/30 border border-white/20">
              NEW VALLEY ENTERPRISE CORE
            </div>
          </div>

          {/* 7 Radiating Connected Satellites */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-blue-400 font-semibold">
              HR Module
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
              Finance
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-amber-400 font-semibold">
              Operations
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-purple-400 font-semibold">
              Custom Processes
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-semibold">
              Front-End UI
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-rose-400 font-semibold">
              Workflow Engine
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-indigo-400 font-semibold col-span-2">
              Cross-System Integration Pipes
            </div>
          </div>
        </div>
      );
    }

    if (projectId === "port-said-gov") {
      // Port Said: Gov Operations + D365 Process Flow
      return (
        <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 my-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            {t("Government Operations + D365 Process Flow", "العمليات الحكومية ومسار تدفق D365")}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Governorate Depts
            </div>
            <span className="text-[#38bdf8] font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Process Standard
            </div>
            <span className="text-[#38bdf8] font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-[#102244] border border-[#0078d4]/60 text-white font-semibold">
              D365 F&O Core
            </div>
            <span className="text-[#38bdf8] font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
              Compliance
            </div>
          </div>
        </div>
      );
    }

    if (projectId === "freezone-customs") {
      // Freezone Customs: Customs Workflow + Approvals + Process Routing
      return (
        <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 my-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            {t("Customs Workflow & Multi-Tier Approvals", "مسار الإجراءات الجمركية والموافقات المتعددة")}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Declaration Entry
            </div>
            <span className="text-amber-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Inspection Logic
            </div>
            <span className="text-amber-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-[#102244] border border-[#0078d4]/60 text-white font-semibold">
              Approval Trees
            </div>
            <span className="text-amber-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
              Port Clearance
            </div>
          </div>
        </div>
      );
    }

    if (projectId === "fra-regulatory") {
      // FRA: Regulatory Workflow + Governance + Structured Approvals
      return (
        <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 my-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            {t("Regulatory Workflow & Enterprise Controls", "المسار الرقابي وضوابط الحوكمة المؤسسية")}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Administrative Intake
            </div>
            <span className="text-purple-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
              Statutory Validation
            </div>
            <span className="text-purple-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-[#102244] border border-[#0078d4]/60 text-white font-semibold">
              D365 Audit Trail
            </div>
            <span className="text-purple-400 font-bold">→</span>
            <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
              Official Registry
            </div>
          </div>
        </div>
      );
    }

    // MOSS: Citizen Request -> Workflow -> ERP -> Decision
    return (
      <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 my-4">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
          {t("Citizen Services → Process Mapping → ERP → Decision", "خدمات المواطنين ← مسار الإجراءات ← ERP ← اتخاذ القرار")}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
            Citizen Intake
          </div>
          <span className="text-emerald-400 font-bold">→</span>
          <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
            Eligibility Logic
          </div>
          <span className="text-emerald-400 font-bold">→</span>
          <div className="px-3 py-1.5 rounded bg-[#102244] border border-[#0078d4]/60 text-white font-semibold">
            ERP Case Processing
          </div>
          <span className="text-emerald-400 font-bold">→</span>
          <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
            Social Support Allocation
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative border-b border-slate-800/60 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#38bdf8] mb-3">
            {t("Selected Project Engagements", "نماذج من المشاريع الاستشارية")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(
              "Government & Enterprise Transformation",
              "مشاريع التحول الرقمي للقطاعين الحكومي والمؤسسي"
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t(
              "Delivered under Paradise Artificial Intelligence / Paradise AI Solutions across strategic public-sector institutions and enterprise authorities.",
              "تم تسليمها وقيادتها خلال فترة عملها في بارادايس للذكاء الاصطناعي عبر مؤسسات حكومية وهيئات رقابية استراتيجية."
            )}
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 bg-[#0d1627] border border-slate-800 rounded-lg">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#0078d4] text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  {filter[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isComprehensive = project.id === "new-valley-gov";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                  isComprehensive
                    ? "bg-gradient-to-b from-[#0e1933] to-[#0a1122] border-[#0078d4]/70 hover:border-[#38bdf8] shadow-xl shadow-[#0078d4]/10 md:col-span-2 lg:col-span-1"
                    : "bg-[#0b1222] border-slate-800/80 hover:border-slate-700 hover:bg-[#0e172a]"
                }`}
              >
                <div>
                  {/* Client & Scope Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-slate-300">{project.client[lang]}</span>
                    <span className="font-mono text-[11px] text-slate-500">Paradise AI</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors tracking-tight mb-2">
                    {project.title[lang]}
                  </h3>

                  <p className="text-xs text-[#38bdf8] font-medium mb-4 line-clamp-1">
                    {project.scope[lang]}
                  </p>

                  {/* Architecture / Visual concept descriptor */}
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 mb-4">
                    <span className="text-slate-500 block mb-1 font-mono uppercase tracking-wider text-[10px]">
                      {t("Concept Architecture", "المفهوم المعماري")}
                    </span>
                    {project.visualConcept[lang]}
                  </div>

                  {/* Visual preview box */}
                  <div className="p-3 rounded-lg bg-[#070c18] border border-slate-850 mb-5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">Workflow Architecture</span>
                    <span className="text-[#38bdf8] font-semibold text-xs flex items-center gap-1">
                      {isComprehensive ? "Complete 7-Stream Core" : "Inspect Flow"}
                    </span>
                  </div>

                  {/* Key Contributions */}
                  <div className="space-y-2 mb-6">
                    {project.contribution.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#0078d4] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                    {lang === "ar"
                      ? project.categoriesAr.slice(0, 2).join(" · ")
                      : project.categories.slice(0, 2).join(" · ")}
                  </div>

                  <span className="text-xs font-semibold text-[#38bdf8] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>{t("Inspect Details", "تفاصيل المعمارية")}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-[-90deg]" : ""}`} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bg-[#0b1222] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8 rtl:pr-0 rtl:pl-8 mb-6">
              <div className="text-xs font-mono text-[#38bdf8] mb-1">
                {selectedProject.client[lang]} · Paradise AI Solutions
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                {selectedProject.title[lang]}
              </h3>
              <p className="text-sm text-slate-300 mt-1">{selectedProject.scope[lang]}</p>
            </div>

            {/* Project Specific Architecture Flow Diagram */}
            {renderProjectVisual(selectedProject.id)}

            {/* Detailed Contributions */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
                {t("Monica's Specific Contributions:", "مساهمات مونيكا المباشرة:")}
              </h4>
              <div className="space-y-3">
                {selectedProject.contribution.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {item[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                <span>{t("Associated Competencies: ", "المجالات المرتبطة: ")}</span>
                <span className="text-slate-200 font-medium">
                  {lang === "ar"
                    ? selectedProject.categoriesAr.join(", ")
                    : selectedProject.categories.join(", ")}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                {t("Close View", "إغلاق")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
