import React, { useEffect, useState } from "react";

export const MouseGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (currentX === -1000) {
        currentX = targetX;
        currentY = targetY;
        setMousePosition({ x: currentX, y: currentY });
      }
    };

    const handleMouseLeave = () => {
      setMousePosition(null);
    };

    const render = () => {
      // Smooth interpolation for silky, non-jarring light movement
      if (currentX !== -1000) {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        setMousePosition({ x: Math.round(currentX), y: Math.round(currentY) });
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mousePosition) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 120, 212, 0.045), rgba(79, 70, 229, 0.02) 40%, transparent 80%)`,
      }}
    />
  );
};
