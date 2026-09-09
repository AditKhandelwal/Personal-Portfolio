"use client";

import { useEffect, useRef } from "react";
import { glyphs as GLYPHS } from "@/lib/content";

/**
 * Depth-layered starfield with a few faint tech glyphs drifting through it.
 * Pointer parallax pushes the whole field; nearby stars ease away from the cursor.
 * Plain 2D canvas — no WebGL, no dependencies.
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const MO = reduce ? 0.16 : 1;

    // Canvas `font` can't read CSS vars, so resolve the mono stack once.
    const monoFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-mono")
        .trim() || "ui-monospace, monospace";

    let W = 0;
    let H = 0;
    let DPR = 1;
    let T = 0;
    let raf = 0;

    const pointer = { tx: 0, ty: 0, px: 0, py: 0, has: false };
    const ptr = { x: -9999, y: -9999 };

    const rnd = (a: number, b: number) => a + Math.random() * (b - a);

    type Star = {
      bx: number;
      by: number;
      z: number;
      vx: number;
      vy: number;
      tw: number;
      blue: boolean;
    };
    type Glyph = {
      bx: number;
      by: number;
      z: number;
      g: string;
      rot: number;
      vr: number;
      vx: number;
      vy: number;
    };

    let stars: Star[] = [];
    let glyphs: Glyph[] = [];

    function build() {
      const n = Math.max(180, Math.round(Math.min(1000, (W * H) / 2000)));
      stars = [];
      for (let i = 0; i < n; i++) {
        stars.push({
          bx: rnd(-0.12, 1.12) * W,
          by: rnd(-0.12, 1.12) * H,
          z: rnd(0.15, 1),
          vx: rnd(-1, 1) * 0.03,
          vy: rnd(-1, 1) * 0.03,
          tw: rnd(0, 6.28),
          blue: Math.random() < 0.16,
        });
      }
      glyphs = [];
      for (let j = 0; j < 16; j++) {
        glyphs.push({
          bx: rnd(0, W),
          by: rnd(0, H),
          z: rnd(0.2, 0.95),
          g: GLYPHS[j % GLYPHS.length],
          rot: rnd(-0.3, 0.3),
          vr: rnd(-1, 1) * 0.0007,
          vx: rnd(-1, 1) * 0.06,
          vy: rnd(-1, 1) * 0.06,
        });
      }
    }

    function resize() {
      DPR = Math.min(2, window.devicePixelRatio || 1);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = Math.round(W * DPR);
      canvas!.height = Math.round(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
    }

    function onMove(x: number, y: number) {
      ptr.x = x;
      ptr.y = y;
      pointer.tx = (x / W) * 2 - 1;
      pointer.ty = (y / H) * 2 - 1;
      pointer.has = true;
    }
    const move = (e: PointerEvent) => onMove(e.clientX, e.clientY);
    const leave = () => {
      pointer.has = false;
      ptr.x = ptr.y = -9999;
    };

    function frame() {
      pointer.px += (pointer.tx - pointer.px) * 0.06;
      pointer.py += (pointer.ty - pointer.py) * 0.06;
      T += 0.016;

      ctx!.fillStyle = "#08080A";
      ctx!.fillRect(0, 0, W, H);

      const parX = pointer.px * 42;
      const parY = pointer.py * 42;

      // Stars close to the cursor this frame — used for the constellation lines.
      const LINK = 150;
      const near: { x: number; y: number; d: number }[] = [];

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.bx += s.vx * MO;
        s.by += s.vy * MO;
        if (s.bx < -0.15 * W) s.bx += 1.3 * W;
        else if (s.bx > 1.15 * W) s.bx -= 1.3 * W;
        if (s.by < -0.15 * H) s.by += 1.3 * H;
        else if (s.by > 1.15 * H) s.by -= 1.3 * H;

        let x = s.bx - parX * s.z;
        let y = s.by - parY * s.z;

        if (pointer.has) {
          const dx = x - ptr.x;
          const dy = y - ptr.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 170 && d > 0.01) {
            const f = (1 - d / 170) * 16 * s.z;
            x += (dx / d) * f;
            y += (dy / d) * f;
          }
          if (d < LINK && s.z > 0.4 && near.length < 7) {
            near.push({ x, y, d });
          }
        }

        // Field is a touch brighter up top, easing off toward the footer.
        const yf = 1 - 0.4 * Math.min(1, Math.max(0, y / H));
        const tw = 0.72 + 0.28 * Math.sin(T * 2 + s.tw);
        ctx!.globalAlpha = (0.22 + 0.55 * s.z) * tw * yf;
        ctx!.fillStyle = s.blue ? "#B2C6FF" : "#FFFFFF";
        ctx!.beginPath();
        ctx!.arc(x, y, 0.35 + 1.5 * s.z, 0, 6.2832);
        ctx!.fill();
      }

      // Constellation: link the cursor to nearby stars, and those stars to
      // each other. Lines fade with distance — the whole thing only appears
      // where the pointer is.
      if (pointer.has && near.length > 1) {
        ctx!.lineWidth = 1;
        for (let a = 0; a < near.length; a++) {
          const p = near[a];
          ctx!.globalAlpha = (1 - p.d / LINK) * 0.28;
          ctx!.strokeStyle = "#9DB2FF";
          ctx!.beginPath();
          ctx!.moveTo(ptr.x, ptr.y);
          ctx!.lineTo(p.x, p.y);
          ctx!.stroke();
          for (let b = a + 1; b < near.length; b++) {
            const q = near[b];
            const dd = Math.hypot(p.x - q.x, p.y - q.y);
            if (dd > LINK) continue;
            ctx!.globalAlpha = (1 - dd / LINK) * 0.14;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }
      }

      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];
        g.bx += g.vx * MO;
        g.by += g.vy * MO;
        g.rot += g.vr * MO;
        if (g.bx < -80) g.bx += W + 160;
        else if (g.bx > W + 80) g.bx -= W + 160;
        if (g.by < -80) g.by += H + 160;
        else if (g.by > H + 80) g.by -= H + 160;

        const x = g.bx - parX * g.z * 2.3;
        const y = g.by - parY * g.z * 2.3;
        ctx!.globalAlpha = 0.08 + 0.16 * g.z;
        ctx!.fillStyle = "#D2DCFF";
        ctx!.font = `${(11 + 15 * g.z).toFixed(1)}px ${monoFamily}`;
        ctx!.save();
        ctx!.translate(x, y);
        ctx!.rotate(g.rot);
        ctx!.fillText(g.g, 0, 0);
        ctx!.restore();
      }

      ctx!.globalAlpha = 1;
    }

    function loop() {
      if (!document.hidden) frame();
      raf = requestAnimationFrame(loop);
    }

    resize();
    frame();
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
