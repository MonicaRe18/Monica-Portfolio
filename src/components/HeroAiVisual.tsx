import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import aiHeadImg from "../assets/images/enterprise_ai_scene_1791396933408.jpg";
import {
  Users,
  DollarSign,
  Truck,
  LineChart,
  Layers,
  Cpu,
  Network,
  Sparkles,
  Workflow,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const HeroAiVisual: React.FC = () => {
  const { lang, t, isRtl } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeCardId, setActiveCardId] = useState<string>("core");

  // Left floating capability cards (Asymmetrical in 3D space, framing left side)
  const leftCards = [
    {
      id: "hr",
      name: { en: "HR", ar: "الموارد البشرية" },
      subtitle: { en: "Human Capital", ar: "إدارة رأس المال البشري" },
      icon: Users,
      color: "#00f0ff",
      posStyle: { top: "10%", left: "1%" },
      transformClass: "rotate-[-2deg] scale-[0.96]",
      floatDelay: "0s",
      zIndex: 26,
    },
    {
      id: "finance",
      name: { en: "Finance", ar: "المالية" },
      subtitle: { en: "Financial Operations", ar: "العمليات والرقابة المالية" },
      icon: DollarSign,
      color: "#38bdf8",
      posStyle: { top: "31%", left: "-1%" },
      transformClass: "rotate-[1.5deg] scale-[0.98]",
      floatDelay: "1.2s",
      zIndex: 28,
    },
    {
      id: "supply-chain",
      name: { en: "Supply Chain", ar: "سلاسل الإمداد" },
      subtitle: { en: "Procurement & Ops", ar: "المشتريات والمخزون" },
      icon: Truck,
      color: "#34d399",
      posStyle: { top: "54%", left: "1%" },
      transformClass: "rotate-[-1deg] scale-[0.95]",
      floatDelay: "2.4s",
      zIndex: 26,
    },
  ];

  // Right floating capability cards (Asymmetrical in 3D space, framing right flank)
  const rightCards = [
    {
      id: "ba",
      name: { en: "Business Analysis", ar: "تحليل الأعمال" },
      subtitle: { en: "Requirements & Fit-Gap", ar: "تحليل المتطلبات والفجوات" },
      icon: LineChart,
      color: "#00f0ff",
      posStyle: { top: "7%", right: "1%" },
      transformClass: "rotate-[2deg] scale-[0.95]",
      floatDelay: "0.8s",
      zIndex: 25,
    },
    {
      id: "design",
      name: { en: "Solution Design", ar: "تصميم الحلول" },
      subtitle: { en: "Architecture & Blueprint", ar: "معمارية الحلول المؤسسية" },
      icon: Layers,
      color: "#c084fc",
      posStyle: { top: "25%", right: "-1%" },
      transformClass: "rotate-[-1.5deg] scale-[0.98]",
      floatDelay: "1.8s",
      zIndex: 28,
    },
    {
      id: "automation",
      name: { en: "Automation", ar: "الأتمتة الذكية" },
      subtitle: { en: "Workflows & AI Agents", ar: "المسارات ووكلاء الذكاء" },
      icon: Cpu,
      color: "#a855f7",
      posStyle: { top: "45%", right: "0%" },
      transformClass: "rotate-[1deg] scale-[0.96]",
      floatDelay: "2.8s",
      zIndex: 26,
    },
    {
      id: "integration",
      name: { en: "Integration", ar: "الربط المؤسسي" },
      subtitle: { en: "APIs & Core Gateways", ar: "واجهات API والبوابات" },
      icon: Network,
      color: "#0078d4",
      posStyle: { top: "65%", right: "2%" },
      transformClass: "rotate-[-2deg] scale-[0.94]",
      floatDelay: "3.5s",
      zIndex: 24,
    },
  ];

  // Mouse Parallax for layered 3D depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseOffset({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // High-DPI Canvas Rendering:
  // - Luminous 3D orbit rings with specular glow
  // - Curved spline data streams with dual-pass neon glow
  // - Real-time light pulses with trailing photon particles
  // - Continuous floating ambient cybernetic dust particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let displayW = canvas.parentElement?.clientWidth || 760;
    let displayH = canvas.parentElement?.clientHeight || 800;

    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      displayW = canvas.parentElement.clientWidth || 760;
      displayH = canvas.parentElement.clientHeight || 800;
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    // Continuous floating ambient cyber-dust particles
    const particleCount = 56;
    interface Particle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      vx: number;
      vy: number;
      color: string;
    }
    const colors = ["#0078d4", "#00f0ff", "#38bdf8", "#60a5fa", "#a855f7"];
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * displayW,
        y: Math.random() * displayH,
        radius: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.7 + 0.25,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: colors[i % colors.length],
      });
    }

    // Spline data pulses with photon trails
    interface SplinePulse {
      pathId: string;
      progress: number;
      speed: number;
      color: string;
      size: number;
      isLeftToCore: boolean;
      cardIdx: number;
    }
    const pulses: SplinePulse[] = [];
    // 3 from left cards to core
    for (let i = 0; i < 3; i++) {
      pulses.push({
        pathId: `left-${i}`,
        progress: (i * 0.33) % 1,
        speed: 0.008 + Math.random() * 0.004,
        color: "#00f0ff",
        size: 2.8,
        isLeftToCore: true,
        cardIdx: i,
      });
    }
    // 4 from core to right cards
    for (let i = 0; i < 4; i++) {
      pulses.push({
        pathId: `right-${i}`,
        progress: (i * 0.25) % 1,
        speed: 0.008 + Math.random() * 0.004,
        color: "#c084fc",
        size: 2.8,
        isLeftToCore: false,
        cardIdx: i,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, displayW, displayH);
      time += 0.018;

      // Center anchors: AI head is positioned gracefully to the right
      const headCenterX = displayW * 0.65;
      const headCenterY = displayH * 0.34;

      // Dynamics 365 Core card floating anchor (positioned lower-left so the face is completely visible)
      const coreX = displayW * 0.29;
      const coreY = displayH * 0.53;

      // 1. Draw 3 Luminous 3D Orbit Rings around the AI Head
      const drawOrbitRing = (
        rx: number,
        ry: number,
        rotation: number,
        strokeColor: string,
        glowColor: string,
        dashes: number[] = [],
        hasNodes = false
      ) => {
        ctx.save();
        ctx.translate(headCenterX, headCenterY);
        ctx.rotate(rotation);

        // Soft glow pass
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = glowColor;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 14;
        if (dashes.length > 0) ctx.setLineDash(dashes);
        ctx.stroke();

        // Sharp core stroke
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.4;
        ctx.shadowBlur = 0;
        ctx.stroke();

        // Orbital nodes
        if (hasNodes) {
          ctx.setLineDash([]);
          const nodeCount = 20;
          for (let i = 0; i < nodeCount; i++) {
            const a = (i / nodeCount) * Math.PI * 2 + time * 0.5;
            const nx = Math.cos(a) * rx;
            const ny = Math.sin(a) * ry;

            if (i % 3 === 0) {
              ctx.beginPath();
              ctx.arc(nx, ny, 2.6, 0, Math.PI * 2);
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#00f0ff";
              ctx.shadowBlur = 12;
              ctx.fill();
            }
          }
        }
        ctx.restore();
      };

      // Orbit 1: Dynamic royal blue ring
      drawOrbitRing(
        210,
        68,
        time * 0.35,
        "rgba(255, 255, 255, 0.7)",
        "rgba(0, 120, 212, 0.6)",
        [8, 6],
        true
      );
      // Orbit 2: Electric cyan counter-rotating ring
      drawOrbitRing(
        245,
        82,
        -time * 0.25 + 1.2,
        "rgba(0, 240, 255, 0.8)",
        "rgba(0, 240, 255, 0.5)",
        [5, 8]
      );
      // Orbit 3: Radiant violet outer stream
      drawOrbitRing(
        285,
        96,
        time * 0.18 + 2.5,
        "rgba(192, 132, 252, 0.6)",
        "rgba(168, 85, 247, 0.4)",
        [3, 12]
      );

      // 2. Card Anchors
      const leftAnchors = [
        { x: displayW * 0.12, y: displayH * 0.14 }, // HR
        { x: displayW * 0.09, y: displayH * 0.35 }, // Finance
        { x: displayW * 0.12, y: displayH * 0.58 }, // Supply Chain
      ];
      const rightAnchors = [
        { x: displayW * 0.88, y: displayH * 0.12 }, // Business Analysis
        { x: displayW * 0.91, y: displayH * 0.30 }, // Solution Design
        { x: displayW * 0.89, y: displayH * 0.50 }, // Automation
        { x: displayW * 0.86, y: displayH * 0.70 }, // Integration
      ];

      // 3. Draw Curved Spline Neon Lines wrapping around the head
      // Left cards -> Dynamics 365 Core
      leftAnchors.forEach((pt, idx) => {
        const cpX = (pt.x + coreX) / 2 + 10;
        const cpY = (pt.y + coreY) / 2 - (idx === 0 ? 25 : idx === 1 ? -8 : 18);

        ctx.save();
        // Glow pass
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.quadraticCurveTo(cpX, cpY, coreX - 30, coreY);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Sharp core pass
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.quadraticCurveTo(cpX, cpY, coreX - 30, coreY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 0;
        ctx.stroke();
        ctx.restore();
      });

      // Dynamics 365 Core -> Right cards (curved gracefully under the AI face)
      rightAnchors.forEach((pt, idx) => {
        const cpX = (coreX + pt.x) / 2;
        const cpY = (coreY + pt.y) / 2 + (idx === 0 ? 15 : idx === 1 ? 25 : idx === 2 ? 18 : 10);

        ctx.save();
        // Glow pass
        ctx.beginPath();
        ctx.moveTo(coreX + 30, coreY);
        ctx.quadraticCurveTo(cpX, cpY, pt.x, pt.y);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.45)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "#a855f7";
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Sharp core pass
        ctx.beginPath();
        ctx.moveTo(coreX + 30, coreY);
        ctx.quadraticCurveTo(cpX, cpY, pt.x, pt.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 0;
        ctx.stroke();
        ctx.restore();
      });

      // 4. Draw Traveling Photon Pulses with Light Tails
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        let startX: number, startY: number, endX: number, endY: number, cpX: number, cpY: number;

        if (p.isLeftToCore) {
          const anchor = leftAnchors[p.cardIdx];
          startX = anchor.x;
          startY = anchor.y;
          endX = coreX - 30;
          endY = coreY;
          cpX = (startX + endX) / 2 + 10;
          cpY = (startY + endY) / 2 - (p.cardIdx === 0 ? 25 : p.cardIdx === 1 ? -8 : 18);
        } else {
          const anchor = rightAnchors[p.cardIdx];
          startX = coreX + 30;
          startY = coreY;
          endX = anchor.x;
          endY = anchor.y;
          cpX = (startX + endX) / 2;
          cpY = (startY + endY) / 2 + (p.cardIdx === 0 ? 15 : p.cardIdx === 1 ? 25 : p.cardIdx === 2 ? 18 : 10);
        }

        const t = p.progress;
        const invT = 1 - t;
        const px = invT * invT * startX + 2 * invT * t * cpX + t * t * endX;
        const py = invT * invT * startY + 2 * invT * t * cpY + t * t * endY;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
      });

      // 5. Continuous Cyber-Dust Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(time + p.x) * 0.005;

        if (p.x < 0) p.x = displayW;
        if (p.x > displayW) p.x = 0;
        if (p.y < 0) p.y = displayH;
        if (p.y > displayH) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, Math.min(0.9, p.alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setupCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[760px] sm:h-[800px] lg:h-[840px] xl:h-[870px] select-none overflow-visible"
      style={{
        perspective: "1400px",
      }}
    >
      {/* 3D Transform Parallax Layer (Completely Open, No Box Border) */}
      <div
        className="relative w-full h-full"
        style={{
          transform: `rotateX(${-mouseOffset.y * 0.3}deg) rotateY(${mouseOffset.x * 0.3}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.18s ease-out",
        }}
      >
        {/* Layer 1: Intense Atmospheric Cyan & Azure Volumetric Backlight */}
        <div
          className="absolute top-[2%] right-[0%] w-[680px] h-[680px] bg-gradient-to-br from-[#0078d4]/45 via-[#00f0ff]/35 to-[#a855f7]/25 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Layer 2: High-DPI Canvas Overlay (3D Orbit Rings, Splines, Photons, Particles) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 block"
        />

        {/* Layer 3: HUMAN-FUTURISTIC FEMALE AI HEAD (Integrated Seamlessly into Scene, No Box / Frame) */}
        <div
          className="absolute top-[0%] right-[-2%] sm:right-[0%] md:right-[1%] lg:right-[2%] xl:right-[3%] w-[480px] h-[550px] sm:w-[570px] sm:h-[650px] lg:w-[660px] lg:h-[740px] xl:w-[710px] xl:h-[780px] pointer-events-none z-0"
          style={{ transform: "translateZ(15px)" }}
        >
          {/* Luminous Volumetric Rim Glow Behind Head */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#0078d4]/40 via-[#00f0ff]/25 to-[#a855f7]/20 blur-[80px] animate-pulse" />

          {/* Masterpiece Human-AI Fusion Image with Smooth Dissolving Edges (Seamless Scene Integration) */}
          <img
            src={aiHeadImg}
            alt="Enterprise AI Intelligence Core"
            className="w-full h-full object-contain mix-blend-screen filter contrast-[1.12] brightness-[1.05] drop-shadow-[0_0_60px_rgba(0,120,212,0.8)] drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] animate-[float_8s_ease-in-out_infinite]"
            style={{
              maskImage:
                "radial-gradient(ellipse 60% 60% at 52% 48%, black 45%, rgba(0,0,0,0.8) 65%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 52% 48%, black 45%, rgba(0,0,0,0.8) 65%, transparent 95%)",
            }}
          />

          {/* Atmospheric Light Stream Overlay (Cybernetic particle haze over AI head) */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 bg-[radial-gradient(circle_at_60%_35%,rgba(0,240,255,0.25)_0%,transparent_60%)]"
            aria-hidden="true"
          />
        </div>

        {/* Layer 4: ASYMMETRICAL FLOATING CAPABILITY CARDS - LEFT OF HEAD */}
        {leftCards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeCardId === card.id;

          return (
            <div
              key={card.id}
              style={{
                ...card.posStyle,
                zIndex: card.zIndex,
                transform: `translateZ(${card.zIndex}px)`,
              }}
              className="absolute pointer-events-auto"
            >
              <button
                type="button"
                onClick={() => setActiveCardId(card.id)}
                style={{ animationDelay: card.floatDelay }}
                className={`group text-left rtl:text-right px-3.5 py-2.5 rounded-xl border backdrop-blur-2xl transition-all duration-300 animate-[float_6s_ease-in-out_infinite] shadow-[0_12px_32px_rgba(0,0,0,0.6)] ${
                  card.transformClass
                } ${
                  isSelected
                    ? "bg-[#0b1b36]/95 border-[#00f0ff] shadow-[#0078d4]/50 ring-2 ring-[#00f0ff]/60 scale-105"
                    : "bg-[#061124]/85 border-cyan-500/30 hover:border-[#00f0ff] hover:bg-[#091833]/95 text-slate-200 hover:text-white"
                }`}
                aria-label={card.name[lang]}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${card.color}25`,
                      border: `1px solid ${card.color}80`,
                      boxShadow: `0 0 10px ${card.color}35`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                      <span>{card.name[lang]}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                      )}
                    </div>
                    <div className="text-[10px] text-cyan-300/80 font-medium whitespace-nowrap">
                      {card.subtitle[lang]}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}

        {/* Layer 5: ASYMMETRICAL FLOABILITY CARDS - RIGHT OF HEAD */}
        {rightCards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeCardId === card.id;

          return (
            <div
              key={card.id}
              style={{
                ...card.posStyle,
                zIndex: card.zIndex,
                transform: `translateZ(${card.zIndex}px)`,
              }}
              className="absolute pointer-events-auto"
            >
              <button
                type="button"
                onClick={() => setActiveCardId(card.id)}
                style={{ animationDelay: card.floatDelay }}
                className={`group text-left rtl:text-right px-3.5 py-2.5 rounded-xl border backdrop-blur-2xl transition-all duration-300 animate-[float_7s_ease-in-out_infinite] shadow-[0_12px_32px_rgba(0,0,0,0.6)] ${
                  card.transformClass
                } ${
                  isSelected
                    ? "bg-[#0b1b36]/95 border-[#00f0ff] shadow-[#0078d4]/50 ring-2 ring-[#00f0ff]/60 scale-105"
                    : "bg-[#061124]/85 border-cyan-500/30 hover:border-[#00f0ff] hover:bg-[#091833]/95 text-slate-200 hover:text-white"
                }`}
                aria-label={card.name[lang]}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${card.color}25`,
                      border: `1px solid ${card.color}80`,
                      boxShadow: `0 0 10px ${card.color}35`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                      <span>{card.name[lang]}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                      )}
                    </div>
                    <div className="text-[10px] text-cyan-300/80 font-medium whitespace-nowrap">
                      {card.subtitle[lang]}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}

        {/* Layer 6: CENTRAL MICROSOFT DYNAMICS 365 CORE CARD
            Refined 25-35% smaller, positioned lower & left so the AI face is 100% visible and unobstructed */}
        <div
          className="absolute top-[46%] sm:top-[47%] lg:top-[48%] left-[10%] sm:left-[14%] md:left-[16%] lg:left-[18%] z-30 pointer-events-auto w-[205px] sm:w-[220px] md:w-[230px]"
          style={{ transform: "translateZ(55px)" }}
        >
          <div
            onClick={() => setActiveCardId("core")}
            className="group cursor-pointer bg-[#061329]/95 border-2 border-[#0078d4]/90 hover:border-[#00f0ff] rounded-xl p-3 sm:p-3.5 shadow-[0_0_35px_rgba(0,120,212,0.5),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] ring-1 ring-[#00f0ff]/50"
          >
            {/* Top Row: Microsoft Shield & Core Beacon */}
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#005a9e] flex items-center justify-center shadow-md shadow-[#0078d4]/60 border border-[#00f0ff]/40">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0078d4]/30 border border-[#00f0ff]/50 shadow-[0_0_8px_rgba(0,240,255,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[8px] font-mono text-[#00f0ff] font-extrabold tracking-wider">
                  CORE SYSTEM
                </span>
              </div>
            </div>

            {/* Core Titles */}
            <div className="mb-1.5">
              <div className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight">
                Microsoft Dynamics 365
              </div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#00f0ff] tracking-wide uppercase drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">
                Finance & Operations
              </div>
            </div>

            <p className="text-[10px] text-slate-300 leading-snug font-medium line-clamp-2">
              {t(
                "Unified enterprise backbone bridging statutory HR, financial ledgers, and operations.",
                "النواة المركزية الموحدة لربط إدارة الموارد البشرية، الدفاتر المالية، والعمليات."
              )}
            </p>

            {/* Glowing Accent Bar */}
            <div className="mt-2 pt-2 border-t border-cyan-500/30 flex items-center justify-between text-[9px]">
              <span className="text-slate-300 font-semibold">{t("Ecosystem Hub", "المركز البيئي")}</span>
              <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Active Core
              </span>
            </div>
          </div>
        </div>

        {/* Layer 7: THREE LARGE FLOATING GLASS PANELS AT THE BOTTOM
            Partially overlapping the bottom of the AI composition in the foreground */}
        <div
          className="absolute bottom-[-6px] sm:bottom-0 inset-x-0 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 z-35 pointer-events-auto"
          style={{ transform: "translateZ(65px)" }}
        >
          {/* PANEL 1: Process Flow */}
          <div className="bg-[#050e21]/95 border border-cyan-500/40 hover:border-[#00f0ff] rounded-xl p-2.5 sm:p-3 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Workflow className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span className="text-xs font-black text-white tracking-tight">
                  {t("Process Flow", "مسار الإجراءات")}
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            </div>

            {/* Workflow Nodes: Discover → Analyze → Design → Build → Integrate */}
            <div className="flex items-center justify-between gap-1 text-[9px] font-mono bg-[#030814]/90 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-300 font-bold">Discover</span>
              <ArrowRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="text-slate-300 font-bold">Analyze</span>
              <ArrowRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="text-[#00f0ff] font-black">Design</span>
              <ArrowRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="text-slate-300 font-bold">Build</span>
              <ArrowRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
              <span className="text-emerald-400 font-black">Integrate</span>
            </div>
          </div>

          {/* PANEL 2: Enterprise Dashboard (The Largest Lower Panel) */}
          <div className="bg-[#050e21]/95 border border-cyan-500/40 hover:border-[#38bdf8] rounded-xl p-2.5 sm:p-3 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all md:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="text-xs font-black text-white tracking-tight">
                  {t("Enterprise Dashboard", "لوحة المؤشرات المؤسسية")}
                </span>
              </div>
              <span className="text-[10px] font-mono font-black text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/40">
                Live State
              </span>
            </div>

            {/* KPI visual blocks & animated telemetry chart */}
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="bg-[#030814]/85 p-1.5 rounded-lg border border-slate-800 text-center">
                <div className="text-[9px] text-slate-400 font-medium">Core Ledger</div>
                <div className="text-xs font-black text-white">General D365</div>
              </div>
              <div className="bg-[#030814]/85 p-1.5 rounded-lg border border-slate-800 text-center">
                <div className="text-[9px] text-slate-400 font-medium">HR Workflows</div>
                <div className="text-xs font-black text-[#00f0ff]">ESS / MSS</div>
              </div>
              <div className="bg-[#030814]/85 p-1.5 rounded-lg border border-slate-800 flex items-end justify-center gap-1 h-[34px] px-1">
                {[45, 78, 62, 95, 84].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-[#0078d4] to-[#00f0ff] rounded-t-sm shadow-[0_0_8px_rgba(0,240,255,0.4)] animate-pulse"
                    style={{
                      height: `${val}%`,
                      animationDelay: `${idx * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* PANEL 3: From Process to Impact */}
          <div className="bg-[#050e21]/95 border border-cyan-500/40 hover:border-[#a855f7] rounded-xl p-2.5 sm:p-3 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
                <span className="text-xs font-black text-white tracking-tight">
                  {t("From Process to Impact", "من الإجراء للأثر")}
                </span>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Visual flow: Analysis → Design → Implement → Go Live */}
            <div className="flex items-center justify-between gap-1 text-[9px] font-mono bg-[#030814]/90 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-300 font-bold">Analysis</span>
              <ArrowRight className="w-2.5 h-2.5 text-purple-400 shrink-0" />
              <span className="text-slate-300 font-bold">Design</span>
              <ArrowRight className="w-2.5 h-2.5 text-purple-400 shrink-0" />
              <span className="text-[#c084fc] font-black">Implement</span>
              <ArrowRight className="w-2.5 h-2.5 text-purple-400 shrink-0" />
              <span className="text-emerald-400 font-black">Go Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
