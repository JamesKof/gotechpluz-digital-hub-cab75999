import React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in"
  | "blur-in"
  | "stagger-in";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-in": "animate-scroll-fade-in",
  "fade-in-up": "animate-scroll-fade-in-up",
  "fade-in-left": "animate-scroll-fade-in-left",
  "fade-in-right": "animate-scroll-fade-in-right",
  "scale-in": "animate-scroll-scale-in",
  "blur-in": "animate-scroll-blur-in",
  "stagger-in": "animate-scroll-stagger-in",
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  duration,
  className,
  threshold = 0.15,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-none",
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        ...(duration ? { animationDuration: `${duration}ms` } : {}),
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
