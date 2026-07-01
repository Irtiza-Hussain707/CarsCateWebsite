"use client";

import Link from "next/link";
import Button from "../reusbleComponents/Button";
import Typography from "../reusbleComponents/Typography";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          {/* Top Label */}
          <p className="text-[#F68633] uppercase tracking-[4px] sm:tracking-[6px] text-[10px] sm:text-xs md:text-sm font-semibold mb-6 md:mb-8">
            Premium Car Detailing Studio
          </p>

          {/* Heading */}
          <Typography
            variant="hero"
            className="
              uppercase
              font-serif
              leading-[0.85]
              text-[#F5F1EA]
              text-[clamp(3rem,10vw,8rem)]
            "
          >
            Your Car,
            <br />
            <span className="text-[#F68633]">Perfected.</span>
          </Typography>

          {/* Line */}
          <div className="w-20 sm:w-24 md:w-32 h-px bg-[#F68633] mt-8 md:mt-10 mb-6 md:mb-8" />

          {/* Description */}
          <Typography
            variant="p"
            className="
              text-gray-300
              max-w-xl
              mb-8
              md:mb-10
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
            "
          >
            Premium detailing, ceramic coatings & paint protection for those who
            demand the best.
          </Typography>

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="gold">Book Your Detail</Button>

            <Button variant="outline">View Our Work</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}