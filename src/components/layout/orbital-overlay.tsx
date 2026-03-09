"use client";

import { useEffect, useRef } from "react";

const FRAME_DURATION = 1000 / 20;

export function OrbitalOverlay() {
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

        let animationId = 0;
        let lastTimestamp = 0;
        let time = 0;
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = Math.max(0.72, Math.min(window.devicePixelRatio || 1, 1) * 0.82);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            context.clearRect(0, 0, width, height);
            context.strokeStyle = "hsla(0, 0%, 100%, 0.06)";
            context.lineWidth = 0.5;

            context.beginPath();
            const orbit1X = width * 0.7;
            const orbit1Y = height * 0.4;
            const orbit1A = width * 0.35;
            const orbit1B = height * 0.25;
            const rotation1 = time * 0.1;

            for (let i = 0; i <= 360; i += 4) {
                const angle = (i * Math.PI) / 180;
                const x =
                    orbit1X +
                    orbit1A * Math.cos(angle) * Math.cos(rotation1) -
                    orbit1B * Math.sin(angle) * Math.sin(rotation1);
                const y =
                    orbit1Y +
                    orbit1A * Math.cos(angle) * Math.sin(rotation1) +
                    orbit1B * Math.sin(angle) * Math.cos(rotation1);
                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
            context.stroke();

            context.strokeStyle = "hsla(4, 100%, 60%, 0.04)";
            context.beginPath();
            const orbit2X = width * 0.3;
            const orbit2Y = height * 0.6;
            const orbit2A = width * 0.2;
            const orbit2B = height * 0.15;
            const rotation2 = -time * 0.15;

            for (let i = 0; i <= 360; i += 4) {
                const angle = (i * Math.PI) / 180;
                const x =
                    orbit2X +
                    orbit2A * Math.cos(angle) * Math.cos(rotation2) -
                    orbit2B * Math.sin(angle) * Math.sin(rotation2);
                const y =
                    orbit2Y +
                    orbit2A * Math.cos(angle) * Math.sin(rotation2) +
                    orbit2B * Math.sin(angle) * Math.cos(rotation2);
                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
            context.stroke();

            context.strokeStyle = "hsla(263, 70%, 58%, 0.03)";
            context.beginPath();
            const orbit3X = width * 0.85;
            const orbit3Y = height * 0.25;
            const orbit3R = Math.min(width, height) * 0.08;

            for (let i = 0; i <= 360; i += 6) {
                const angle = (i * Math.PI) / 180 + time * 0.2;
                const x = orbit3X + orbit3R * Math.cos(angle);
                const y = orbit3Y + orbit3R * Math.sin(angle) * 0.6;
                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
            context.stroke();

            context.strokeStyle = "hsla(0, 0%, 100%, 0.025)";
            context.beginPath();
            const waveY = height * 0.75;
            const waveAmp = 30;
            const waveFreq = 0.008;

            for (let x = 0; x <= width; x += 6) {
                const y = waveY + Math.sin(x * waveFreq + time * 0.5) * waveAmp;
                if (x === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
            context.stroke();

            const reticles = [
                { x: width * 0.15, y: height * 0.3 },
                { x: width * 0.75, y: height * 0.65 },
                { x: width * 0.9, y: height * 0.15 },
            ];

            context.strokeStyle = "hsla(0, 0%, 100%, 0.03)";
            for (const reticle of reticles) {
                const size = 12;
                const gap = 4;

                context.beginPath();
                context.moveTo(reticle.x, reticle.y - size);
                context.lineTo(reticle.x, reticle.y - gap);
                context.moveTo(reticle.x, reticle.y + gap);
                context.lineTo(reticle.x, reticle.y + size);
                context.moveTo(reticle.x - size, reticle.y);
                context.lineTo(reticle.x - gap, reticle.y);
                context.moveTo(reticle.x + gap, reticle.y);
                context.lineTo(reticle.x + size, reticle.y);
                context.stroke();

                context.fillStyle = "hsla(4, 100%, 60%, 0.06)";
                context.beginPath();
                context.arc(reticle.x, reticle.y, 1, 0, Math.PI * 2);
                context.fill();
            }

            context.save();
            context.globalAlpha = 0.2;
            context.strokeStyle = "hsla(0, 0%, 100%, 0.03)";
            context.setLineDash([2, 12]);
            context.beginPath();
            context.moveTo(width * 0.08, height * 0.22);
            context.lineTo(width * 0.92, height * 0.22);
            context.moveTo(width * 0.18, height * 0.82);
            context.lineTo(width * 0.88, height * 0.82);
            context.stroke();
            context.restore();
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
            time += deltaSeconds * 0.85;
            draw();
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

    return <canvas className="backdrop-canvas absolute inset-0 h-full w-full" ref={canvasRef} style={{ zIndex: 1 }} />;
}
