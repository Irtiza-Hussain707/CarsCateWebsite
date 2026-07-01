import { JSX } from "react";

type TypographyProps = {
  variant?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "nav";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  hero: "text-[clamp(3.75rem,10vw,7.5rem)] tracking-tight",
  h1: "text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight leading-[0.95]",
  h2: "text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1]",
  h3: "text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1]",
  h4: "text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.2]",
  h5: "text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-[1.3]",
  h6: "text-[clamp(1.125rem,2vw,1.5rem)] font-medium leading-[1.4]",
  p: "text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed",
  small: "text-[clamp(0.875rem,1vw,0.95rem)] leading-relaxed opacity-80",
  nav: "text-sm uppercase tracking-[3px] font-medium",
};

export default function Typography({
  variant = "p",
  children,
  className = "",
}: TypographyProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
}
