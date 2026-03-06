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
  "220, 38, 38", // crimson red
  "220, 38, 38", // crimson red (weighted)
  "239, 68, 68", // lighter red
  "255, 100, 50", // orange-red
  "255, 60, 30", // deep orange-red
  "255, 255, 255", // white sparkle
];

const MAX_PARTICLES = 80;
const TRAIL_LENGTH = 10;

export default function MouseTrailEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);

  const spawnParticles = useCallback((x: number, y: number, now: number) => {
    if (now - lastSpawnRef.current < 30) return; // throttle: ~33fps spawn rate
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
        vy: Math.sin(angle) * speed - 0.4, // slight upward drift
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

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw light trail
      const trail = trailRef.current;
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const progress = i / trail.length;
          const alpha = progress * 0.18;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`;
          ctx.lineWidth = progress * 2;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.015; // extra upward acceleration (gravity in reverse)
        p.alpha -= p.decay;

        if (p.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        return true;
      });

      // Spawn particles at current mouse position
      const { x, y } = mouseRef.current;
      if (x > 0 && y > 0) {
        spawnParticles(x, y, timestamp);
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [spawnParticles],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas || !glow) return;

    // Size the canvas to viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mouseRef.current = { x, y };

      // Update glow orb position (offset by half its size so it's centered)
      glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;

      // Update trail buffer
      trailRef.current.push({ x, y });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }
    };

    // Hide effects when mouse leaves the window
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      trailRef.current = [];
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      {/* Soft glow orb that follows the mouse */}
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
            "radial-gradient(circle, rgba(220,38,38,0.09) 0%, rgba(239,68,68,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
          transition: "transform 0.18s ease-out",
          transform: "translate(-1000px, -1000px)",
        }}
      />

      {/* Canvas for particles + trail — decorative, pointer-events: none */}
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
