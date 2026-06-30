"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/reusbleComponents/Button";
import Typography from "../reusbleComponents/Typography";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-[60] w-full px-4">
      <div className="flex items-center justify-end py-4">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <a
            href="#services"
            className="text-[#B8B3C0] hover:text-white transition"
          >
            <Button variant="gold">Services</Button>
          </a>

          {/* <a
            href="#gallery"
            className="text-[#B8B3C0] hover:text-white transition"
          >
            <Typography variant="nav">Gallery</Typography>
          </a>

          <a
            href="#about"
            className="text-[#B8B3C0] hover:text-white transition"
          >
            <Typography variant="nav">About</Typography>
          </a> */}

          <a href="#booking-form">
            <Button variant="gold">Book Now</Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
    absolute
    top-full
    right-0
    mt-3
    w-64
    z-[9999]
    lg:hidden
    rounded-lg
    bg-[rgb(32_29_30)]
    border
    border-[#F68633]/50
    shadow-[0_0_20px_rgba(200,166,77,0.25)]
    backdrop-blur-sm
    py-6
  "
        >
          <div className="flex flex-col items-center gap-6">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-[#B8B3C0] uppercase tracking-[3px] text-sm hover:text-white"
            >
              Services
            </a>

            {/* <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="text-[#B8B3C0] uppercase tracking-[3px] text-sm hover:text-white"
            >
              Gallery
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-[#B8B3C0] uppercase tracking-[3px] text-sm hover:text-white"
            >
              About
            </a> */}

            <a href="#booking-form" onClick={() => setIsOpen(false)}>
              <Button variant="gold">Book Now</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
