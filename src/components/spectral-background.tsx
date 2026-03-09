"use client";

import { useEffect, useRef } from "react";

type SpectralBackgroundProps = Readonly<{
    heroOnly?: boolean;
}>;

const FRAME_DURATION = 1000 / 24;
const NOISE_TILE_SIZE = 96;

function createNoisePattern(context: CanvasRenderingContext2D): CanvasPattern | null {
    const tile = document.createElement("canvas");
    tile.width = NOISE_TILE_SIZE;
    tile.height = NOISE_TILE_SIZE;

    const tileContext = tile.getContext("2d", { alpha: true });
    if (!tileContext) {
        return null;
    }

    const imageData = tileContext.createImageData(NOISE_TILE_SIZE, NOISE_TILE_SIZE);

    for (let index = 0; index < imageData.data.length; index += 4) {
        const value = 220 + Math.floor(Math.random() * 35);
        const alpha = Math.random() > 0.56 ? Math.floor(Math.random() * 24) + 6 : 0;

        imageData.data[index] = value;
        imageData.data[index + 1] = value;
        imageData.data[index + 2] = value;
        imageData.data[index + 3] = alpha;
    }

    tileContext.putImageData(imageData, 0, 0);

    return context.createPattern(tile, "repeat");
}

export function SpectralBackground({ heroOnly = false }: SpectralBackgroundProps) {
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
        let noisePattern: CanvasPattern | null = null;
        let time = 0;
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const renderScale = heroOnly ? 0.92 : 0.78;

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = Math.max(0.72, Math.min(window.devicePixelRatio || 1, 1) * renderScale);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            noisePattern = createNoisePattern(context);
        };

        const draw = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            context.clearRect(0, 0, width, height);
            context.fillStyle = "hsl(0, 0%, 2%)";
            context.fillRect(0, 0, width, height);

            const leak1X = width * 0.15 + Math.sin(time * 0.15) * width * 0.05;
            const leak1Y = height * 0.25 + Math.cos(time * 0.1) * height * 0.08;
            const gradientOne = context.createRadialGradient(leak1X, leak1Y, 0, leak1X, leak1Y, width * 0.7);
            gradientOne.addColorStop(0, "hsla(4, 100%, 55%, 0.12)");
            gradientOne.addColorStop(0.3, "hsla(4, 100%, 45%, 0.06)");
            gradientOne.addColorStop(0.6, "hsla(4, 90%, 35%, 0.02)");
            gradientOne.addColorStop(1, "transparent");
            context.fillStyle = gradientOne;
            context.fillRect(0, 0, width, height);

            const leak2X = width * 0.85 + Math.cos(time * 0.12) * width * 0.08;
            const leak2Y = height * 0.15 + Math.sin(time * 0.18) * height * 0.1;
            const gradientTwo = context.createRadialGradient(leak2X, leak2Y, 0, leak2X, leak2Y, width * 0.6);
            gradientTwo.addColorStop(0, "hsla(263, 75%, 50%, 0.08)");
            gradientTwo.addColorStop(0.4, "hsla(280, 70%, 40%, 0.04)");
            gradientTwo.addColorStop(1, "transparent");
            context.fillStyle = gradientTwo;
            context.fillRect(0, 0, width, height);

            const pulseIntensity = Math.sin(time * 1.5) ** 12 * 0.15;
            const leak3X = width * 0.5 + Math.sin(time * 0.2) * width * 0.15;
            const leak3Y = height * 0.6 + Math.cos(time * 0.15) * height * 0.1;
            const gradientThree = context.createRadialGradient(leak3X, leak3Y, 0, leak3X, leak3Y, width * 0.5);
            gradientThree.addColorStop(0, `hsla(4, 100%, 60%, ${0.06 + pulseIntensity})`);
            gradientThree.addColorStop(0.5, `hsla(4, 95%, 50%, ${0.03 + pulseIntensity * 0.5})`);
            gradientThree.addColorStop(1, "transparent");
            context.fillStyle = gradientThree;
            context.fillRect(0, 0, width, height);

            const gradientFour = context.createRadialGradient(
                width * 0.6,
                height * 0.4,
                0,
                width * 0.6,
                height * 0.4,
                width * 0.4
            );
            gradientFour.addColorStop(0, "hsla(320, 80%, 45%, 0.04)");
            gradientFour.addColorStop(0.5, "hsla(280, 70%, 40%, 0.02)");
            gradientFour.addColorStop(1, "transparent");
            context.fillStyle = gradientFour;
            context.fillRect(0, 0, width, height);

            if (noisePattern) {
                context.save();
                context.globalAlpha = 0.08;
                context.fillStyle = noisePattern;
                context.fillRect(0, 0, width, height);
                context.restore();
            }

            context.save();
            context.globalAlpha = 0.12;
            context.fillStyle = "hsl(0 0% 100%)";
            for (let y = 0; y < height; y += 4) {
                context.fillRect(0, y, width, 1);
            }
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
            time += deltaSeconds * 0.65;
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
    }, [heroOnly]);

    return (
        <canvas
            className="backdrop-canvas absolute inset-0 h-full w-full"
            ref={canvasRef}
            style={{
                height: heroOnly ? "100vh" : "100%",
                maskImage: heroOnly ? "linear-gradient(to bottom, black 60%, transparent 100%)" : undefined,
                WebkitMaskImage: heroOnly ? "linear-gradient(to bottom, black 60%, transparent 100%)" : undefined,
                zIndex: 0,
            }}
        />
    );
}
