import React, { useEffect, useRef } from "react"

type SnowProps = {
  density?: number;
  color?: string;
  imageSrcs?: string[];
  maxFlakes?: number;
  minFlakes?: number;
  sizeScale?: number;
};

type Flake = {
  x: number; y: number; r: number; vx: number; vy: number; a: number;
  rot: number; vr: number; imgIndex: number;
};

const Snow: React.FC<SnowProps> = ({
  density = 0.0001,
  color = "#ffffff",
  imageSrcs = [],
  maxFlakes,
  minFlakes = 40,
  sizeScale = 2.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const flakesRef = useRef<Flake[]>([]);
  const dprRef = useRef<number>(1);
  const imgsRef = useRef<HTMLImageElement[]>([]);
  const imgsReadyRef = useRef<boolean>(false);

  const loadImages = (srcs: string[]) => {
    imgsReadyRef.current = false;
    if (!srcs.length) {
      imgsRef.current = [];
      return;
    }
    let loaded = 0;
    imgsRef.current = srcs.map((src) => {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === srcs.length) imgsReadyRef.current = true;
      };
      img.onerror = () => {
        loaded++;
        if (loaded === srcs.length) imgsReadyRef.current = true;
      };
      return img;
    });
  };

  const makeFlake = (w: number, h: number): Flake => {
    const r = Math.random() * 2 + 1.5;
    const vy = 0.6 + Math.random() * 1.2 + r * 0.05;
    const vx = (Math.random() - 0.5) * 0.6;
    const a  = 0.4 + Math.random() * 0.6;
    const rot = Math.random() * Math.PI * 2;
    const vr  = (Math.random() - 0.5) * 0.01;
    const imgIndex = imgsRef.current.length
      ? Math.floor(Math.random() * imgsRef.current.length)
      : -1;
    return { x: Math.random() * w, y: Math.random() * h, r, vx, vy, a, rot, vr, imgIndex };
  };

  const resize = () => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    dprRef.current = dpr;
    const w = window.innerWidth;
    const h = window.innerHeight;
    c.width = Math.floor(w * dpr);
    c.height = Math.floor(h * dpr);
    c.style.width = `${w}px`;
    c.style.height = `${h}px`;

    let desired = Math.floor(w * h * density);
    desired = Math.max(minFlakes, desired);
    if (typeof maxFlakes === "number") desired = Math.min(desired, maxFlakes);

    const flakes = flakesRef.current;
    while (flakes.length < desired) flakes.push(makeFlake(w, h));
    while (flakes.length > desired) flakes.pop();
  };

  useEffect(() => {
    loadImages(imageSrcs);
  }, [imageSrcs]);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    resize();

    const prefersReduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loop = () => {
      if (prefersReduce || document.visibilityState !== "visible") {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      const dpr = dprRef.current;
      const cssW = c.width / dpr;
      const cssH = c.height / dpr;

      ctx.clearRect(0, 0, c.width, c.height);
      const flakes = flakesRef.current;

      const useImages = imgsRef.current.length > 0 && imgsReadyRef.current;

      if (!useImages) {
        ctx.fillStyle = color;
      }

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.x += f.vx;
        f.y += f.vy;
        f.rot += f.vr;

        if (f.x < -5) f.x = cssW + 5;
        if (f.x > cssW + 5) f.x = -5;
        if (f.y > cssH + 5) { f.x = Math.random() * cssW; f.y = -5; }

        ctx.globalAlpha = f.a;

        if (useImages && f.imgIndex >= 0) {
          const img = imgsRef.current[f.imgIndex];
          const size = f.r * sizeScale;
          ctx.save();
          ctx.translate(f.x * dpr, f.y * dpr);
          ctx.rotate(f.rot);
          ctx.drawImage(
            img,
            - (size * dpr) / 2,
            - (size * dpr) / 2,
            size * dpr,
            size * dpr
          );
          ctx.restore();
        } else {
          // tròn
          ctx.beginPath();
          ctx.arc(f.x * dpr, f.y * dpr, f.r * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [density, color, maxFlakes, minFlakes, sizeScale]);

  return <canvas className="snow-canvas" ref={canvasRef} aria-hidden="true" />;
};

export default Snow;
