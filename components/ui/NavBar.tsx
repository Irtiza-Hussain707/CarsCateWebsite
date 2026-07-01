"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/reusbleComponents/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative z-[60] w-full px-4">
      <div className="flex items-center justify-end py-4">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <a href="#services">
            <Button variant="gold">Services</Button>
          </a>

          {/* Future Links */}
          {/* 
          <a href="#gallery">
            <Button variant="gold">Gallery</Button>
          </a>

          <a href="#about">
            <Button variant="gold">About</Button>
          </a>
          */}

          <a href="#booking-form">
            <Button variant="gold">Book Now</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`
          absolute
          top-full
          right-0
          mt-3
          w-[90vw]
          max-w-xs
          rounded-lg
          bg-[rgb(32_29_30)]
          border
          border-[#F68633]/50
          shadow-[0_0_20px_rgba(200,166,77,0.25)]
          backdrop-blur-sm
          py-6
          lg:hidden
          origin-top-right
          transition-all
          duration-300
          ease-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center gap-6">
          <a href="#services" onClick={() => setIsOpen(false)}>
            <Button variant="gold" className="px-8!">Services</Button>
          </a>

          {/* Future Links */}
          {/* 
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            <Button variant="gold">Gallery</Button>
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            <Button variant="gold">About</Button>
          </a>
          */}

          <a href="#booking-form" onClick={() => setIsOpen(false)}>
            <Button variant="gold">Book Now</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}