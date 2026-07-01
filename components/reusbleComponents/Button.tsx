import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gold" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "gold",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const variants = {
    gold:
      "bg-[#F68633] text-black uppercase tracking-[2px] cursor-pointer font-semibold px-6 py-3 md:px-8 md:py-2 text-sm md:text-base hover:bg-[#F89247] hover:shadow-[0_0_30px_6px_rgba(200,166,77,0.35)] transition-all duration-300",

    outline:
      "border-2 border-white/30 text-white uppercase tracking-[3px] font-semibold px-8 py-4 text-sm hover:border-[#F68633] hover:text-[#F68633] cursor-pointer transition-all duration-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}