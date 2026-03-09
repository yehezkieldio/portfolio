"use client";

import { useEffect, useRef } from "react";

type DustParticle = {
    x: number;
    y: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
};

const FRAME_DURATION = 1000 / 18;

export function DustTexture() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d", { alpha: true });
        if (!context) {
            return;
        }

        const particles: DustParticle[] = [];
        let animationId = 0;
        let lastTimestamp = 0;
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = Math.max(0.65, Math.min(window.devicePixelRatio || 1, 1) * 0.75);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            particles.length = 0;
            const particleCount = Math.min(110, Math.max(26, Math.floor((width * height) / 18_000)));

            for (let index = 0; index < particleCount; index += 1) {
                particles.push({
                    opacity: Math.random() * 0.15 + 0.02,
                    size: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 4,
                    vy: Math.random() * 5 + 1,
                    x: Math.random() * width,
                    y: Math.random() * height,
                });
            }
        };

        const draw = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            context.clearRect(0, 0, width, height);

            for (const particle of particles) {
                context.fillStyle = `hsla(0, 0%, 100%, ${particle.opacity})`;
                context.beginPath();
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                context.fill();
            }
        };

        const drawFrame = (timestamp: number) => {
            animationId = window.requestAnimationFrame(drawFrame);

            if (document.hidden || reducedMotionQuery.matches) {
                return;
            }

            if (timestamp - lastTimestamp < FRAME_DURATION) {
                return;
            }

            const deltaSeconds =
                lastTimestamp === 0 ? FRAME_DURATION / 1000 : Math.min((timestamp - lastTimestamp) / 1000, 0.08);

            lastTimestamp = timestamp;

            const width = window.innerWidth;
            const height = window.innerHeight;
            context.clearRect(0, 0, width, height);

            for (const particle of particles) {
                particle.x += particle.vx * deltaSeconds;
                particle.y += particle.vy * deltaSeconds;

                if (particle.x < 0) {
                    particle.x = width;
                }
                if (particle.x > width) {
                    particle.x = 0;
                }
                if (particle.y > height) {
                    particle.y = 0;
                }
                if (particle.y < 0) {
                    particle.y = height;
                }

                context.fillStyle = `hsla(0, 0%, 100%, ${particle.opacity})`;
                context.beginPath();
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                context.fill();
            }
        };

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                lastTimestamp = 0;
                draw();
            }
        };

        resize();
        draw();

        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        if (!reducedMotionQuery.matches) {
            animationId = window.requestAnimationFrame(drawFrame);
        }

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            className="backdrop-canvas absolute inset-0 h-full w-full opacity-70"
            ref={canvasRef}
            style={{ zIndex: 2 }}
        />
    );
}
