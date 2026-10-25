"use client";

import React, { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle particle system
    const particleCount = Math.min(width > 768 ? 45 : 20, 50);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      "rgba(0, 229, 255, ",  // Cyan
      "rgba(20, 92, 255, ",  // Electric Blue
      "rgba(139, 61, 255, ", // Violet
      "rgba(255, 40, 215, ", // Magenta
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = typeof document !== "undefined" && document.documentElement.classList.contains("light");

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        if (isLight) {
          ctx.fillStyle = `rgba(20, 92, 255, ${p1.alpha * 0.6})`;
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `${p1.color}${p1.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `${p1.color}0.8)`;
        }
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (isLight) {
              ctx.strokeStyle = `rgba(20, 92, 255, ${0.08 * (1 - dist / 110)})`;
            } else {
              ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - dist / 110)})`;
            }
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Mouse interaction
        const mdx = p1.x - mouseX;
        const mdy = p1.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 130) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          if (isLight) {
            ctx.strokeStyle = `rgba(20, 92, 255, ${0.15 * (1 - mdist / 130)})`;
          } else {
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.2 * (1 - mdist / 130)})`;
          }
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top ambient lights */}
      <div 
        className="cyber-ambient-glow absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 animate-pulse-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, #145CFF 0%, rgba(0, 229, 255, 0.4) 50%, transparent 70%)" }}
      />
      <div 
        className="cyber-ambient-glow absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B3DFF 0%, rgba(255, 40, 215, 0.3) 60%, transparent 70%)" }}
      />
      <div 
        className="cyber-ambient-glow absolute bottom-10 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, rgba(20, 92, 255, 0.3) 50%, transparent 70%)" }}
      />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Light speed lines */}
      <div 
        className="absolute top-0 left-1/3 w-[1px] h-full opacity-15"
        style={{ background: "linear-gradient(to bottom, transparent, #00E5FF, transparent)" }}
      />
      <div 
        className="absolute top-0 right-1/4 w-[1px] h-full opacity-15"
        style={{ background: "linear-gradient(to bottom, transparent, #FF28D7, transparent)" }}
      />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
