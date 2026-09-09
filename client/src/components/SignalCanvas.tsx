import React, { useEffect, useRef } from "react";

/**
 * Zenovy Signal Field Canvas
 * Renders fine Champagne Gold and Ivory signal traces moving through dark negative space.
 * Follows spec: calm, architectural information system, auto-pauses offscreen, respects reduced-motion.
 */
export const SignalCanvas: React.FC<{ className?: string; density?: "low" | "medium" }> = ({
  className = "",
  density = "medium",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = density === "low" ? 22 : 42;
    interface SignalNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      color: string;
      alpha: number;
      pulse: number;
    }

    const nodes: SignalNode[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0.15 + Math.random() * 0.45,
      vy: (Math.random() - 0.5) * 0.2,
      length: 40 + Math.random() * 80,
      color: Math.random() > 0.35 ? "#B79A5B" : "#F3F0E8",
      alpha: 0.08 + Math.random() * 0.22,
      pulse: Math.random() * Math.PI * 2,
    }));

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render subtle horizontal signal pathways
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.015;

        if (node.x - node.length > width) {
          node.x = -node.length;
          node.y = Math.random() * height;
        }

        const dynamicAlpha = node.alpha * (0.7 + 0.3 * Math.sin(node.pulse));

        // Draw fine pathway trace
        const gradient = ctx.createLinearGradient(
          node.x - node.length,
          node.y,
          node.x,
          node.y
        );
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.8, node.color);
        gradient.addColorStop(1, "#FFFFFF");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(node.x - node.length, node.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();

        // Lead signal point (node)
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.25, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full opacity-60 ${className}`}
      aria-hidden="true"
    />
  );
};
