import { useCallback, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  color: string;
}

const PARTICLE_COLORS = [
  "56, 189, 248", // cyan (sky-400)
  "56, 189, 248", // cyan (weighted)
  "125, 211, 252", // light cyan
  "139, 92, 246", // purple (violet-500)
  "196, 115, 255", // light purple
  "255, 255, 255", // white sparkle
];

const MAX_PARTICLES = 80;
const TRAIL_LENGTH = 10;
// How long (ms) after the last mouse move before we stop the animation loop
const IDLE_TIMEOUT_MS = 150;

export default function MouseTrailEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  // Whether the animation loop is currently running
  const isRunningRef = useRef(false);
  // Timestamp of the last mousemove event
  const lastMoveTimeRef = useRef<number>(0);

  const spawnParticles = useCallback((x: number, y: number, now: number) => {
    if (now - lastSpawnRef.current < 30) return;
    lastSpawnRef.current = now;

    const count = Math.random() < 0.5 ? 1 : 2;
    for (let i = 0; i < count; i++) {
      if (particlesRef.current.length >= MAX_PARTICLES) {
        particlesRef.current.shift();
      }
      const colorRgb =
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.8;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        radius: 1.2 + Math.random() * 1.8,
        alpha: 0.55 + Math.random() * 0.25,
        decay: 0.012 + Math.random() * 0.01,
        color: colorRgb,
      });
    }
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Stop the loop if the mouse has been idle for too long
      const timeSinceMove = timestamp - lastMoveTimeRef.current;
      if (
        timeSinceMove > IDLE_TIMEOUT_MS &&
        particlesRef.current.length === 0
      ) {
        // Clear canvas, hide glow, and stop the loop
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const glow = glowRef.current;
        if (glow) glow.style.opacity = "0";
        isRunningRef.current = false;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only spawn new particles while mouse is actively moving
      const mouseIsActive = timeSinceMove <= IDLE_TIMEOUT_MS;

      // Draw light trail (only when mouse is active)
      const trail = trailRef.current;
      if (mouseIsActive && trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const progress = i / trail.length;
          const alpha = progress * 0.18;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = progress * 2;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // Update and draw existing particles (let them finish their lifecycle)
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.015;
        p.alpha -= p.decay;

        if (p.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        return true;
      });

      // Only spawn new particles if mouse is actively moving
      if (mouseIsActive) {
        const { x, y } = mouseRef.current;
        if (x > 0 && y > 0) {
          spawnParticles(x, y, timestamp);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [spawnParticles],
  );

  // Start the animation loop only if it isn't already running
  const startLoop = useCallback(() => {
    if (!isRunningRef.current) {
      isRunningRef.current = true;
      const glow = glowRef.current;
      if (glow) glow.style.opacity = "1";
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas || !glow) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mouseRef.current = { x, y };
      lastMoveTimeRef.current = performance.now();

      // Update glow orb position
      glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;

      // Update trail buffer
      trailRef.current.push({ x, y });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }

      // Kick off the loop on first move (or after idle)
      startLoop();
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      trailRef.current = [];
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Do NOT start the animation loop on mount — wait for first mousemove

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [startLoop]);

  return (
    <>
      {/* Soft glow orb that follows the mouse — hidden until first move */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.09) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
          transition: "transform 0.18s ease-out, opacity 0.3s ease",
          transform: "translate(-1000px, -1000px)",
          opacity: 0,
        }}
      />

      {/* Canvas for particles + trail */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
          display: "block",
        }}
      />
    </>
  );
}
