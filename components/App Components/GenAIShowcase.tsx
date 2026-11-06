"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GenAIShowcaseItem {
  id: string;
  title: string;
  image: string;
  alt?: string;
  badge?: string;
  description?: string;
}

export interface GenAIShowcaseProps {
  /**
   * Main title. Supports JSX or string.
   */
  title?: React.ReactNode;
  /**
   * Description text.
   */
  description?: string;
  /**
   * Button label. Defaults to "Contact Us".
   */
  buttonText?: string;
  /**
   * Optional link for the action button.
   */
  buttonHref?: string;
  /**
   * Optional click handler for the action button.
   */
  onButtonClick?: () => void;
  /**
   * List of accordion items. Defaults to the 5 Gen-AI items from the reference design.
   */
  items?: GenAIShowcaseItem[];
  /**
   * Default active index. Defaults to 1 ("AI Image Generation").
   */
  defaultActiveIndex?: number;
  /**
   * Extra container class name.
   */
  className?: string;
}

export const DEFAULT_GEN_AI_ITEMS: GenAIShowcaseItem[] = [
  {
    id: "voice-assistant",
    title: "Voice Assistant",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
    alt: "AI Voice Assistant interface",
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    alt: "AI humanoid robot sitting on a bench",
  },
  {
    id: "ai-chatbot-rag",
    title: "AI Chatbot + Local RAG",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    alt: "Code and terminal screen for AI Chatbot and Local RAG",
  },
  {
    id: "ai-agent",
    title: "AI Agent",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
    alt: "AI Agent graph and digital workflow network",
  },
  {
    id: "visual-understanding",
    title: "Visual Understanding",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
    alt: "Computer vision and visual understanding interface",
  },
];

export function GenAIShowcase({
  title = (
    <>
      Accelerate Gen-
      <br />
      AI Tasks on Any
      <br />
      Device
    </>
  ),
  description = "Build high-performance AI apps on-device without the hassle of model compression or edge deployment.",
  buttonText = "Contact Us",
  buttonHref = "#contact",
  onButtonClick,
  items = DEFAULT_GEN_AI_ITEMS,
  defaultActiveIndex = 1,
  className,
}: GenAIShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  return (
    <section
      className={cn(
        "w-full max-w-6xl mx-auto p-3 sm:p-6 lg:p-8",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] p-6 sm:p-10 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description & Action */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center space-y-5 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-zinc-50 leading-[1.12]">
              {title}
            </h2>

            <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-base md:text-lg leading-relaxed max-w-md font-normal">
              {description}
            </p>

            <div className="w-full sm:w-auto">
              {buttonHref ? (
                <a
                  href={buttonHref}
                  onClick={onButtonClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {buttonText}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onButtonClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Expandable Accordion Strip */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="flex items-center gap-1.5 sm:gap-3 w-full h-[320px] sm:h-[400px] md:h-[450px]">
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id || index}
                    role="button"
                    tabIndex={0}
                    aria-label={item.title}
                    aria-expanded={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                    className={cn(
                      "group relative h-full rounded-2xl sm:rounded-[26px] overflow-hidden cursor-pointer select-none",
                      "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isActive
                        ? "flex-[3.5] sm:flex-[4] shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                        : "flex-1 opacity-90 hover:opacity-100 hover:brightness-105"
                    )}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.alt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className={cn(
                          "object-cover transition-transform duration-700 ease-out",
                          isActive ? "scale-105" : "scale-100 group-hover:scale-110"
                        )}
                        priority={index === 1}
                      />
                    </div>

                    {/* Dark gradient overlay for contrast */}
                    <div
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        isActive
                          ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                          : "bg-black/45 group-hover:bg-black/35"
                      )}
                    />

                    {/* Active State Content: Centered horizontal title at bottom */}
                    <div
                      className={cn(
                        "absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col items-center justify-end text-center transition-all duration-300",
                        isActive
                          ? "opacity-100 translate-y-0 delay-150"
                          : "opacity-0 translate-y-3 pointer-events-none"
                      )}
                    >
                      <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-tight drop-shadow-md">
                        {item.title}
                      </span>
                    </div>

                    {/* Collapsed State Content: Rotated vertical label anchored at bottom */}
                    <div
                      className={cn(
                        "absolute inset-x-0 bottom-0 pb-6 flex items-center justify-center transition-all duration-300",
                        !isActive
                          ? "opacity-100 delay-100"
                          : "opacity-0 pointer-events-none"
                      )}
                    >
                      <span
                        className="text-white/95 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap drop-shadow-sm transition-transform duration-300 group-hover:text-white"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GenAIShowcase;

