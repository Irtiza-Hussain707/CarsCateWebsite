"use client";

import Typography from "@/components/reusbleComponents/Typography";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Needed a proper cleanup before selling my car. The detailing made it look much newer and definitely helped with the overall impression.",
    name: "Saad M.",
    vehicle: "HONDA CITY",
  },
  {
    quote:
      "Good experience overall. The team was professional, explained the process, and delivered the car on time.",
    name: "Owais H.",
    vehicle: "KIA SPORTAGE",
  },
  {
    quote:
      "The paint correction made a big difference. Small marks are gone and the car finally looks the way it should.",
    name: "Danish F.",
    vehicle: "TOYOTA YARIS",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14">
          <Typography variant="nav" className="mb-4 text-[#F68633]">
            CLIENT STORIES
          </Typography>

          <div className="flex items-center gap-6">
            <Typography variant="h3" className="text-white">
              WHAT THEY SAY
            </Typography>

            <div className="hidden h-px flex-1 bg-[#F68633]/30 lg:block" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                group
                border
                border-white/10
                bg-[#050505]
                p-8
                transition-all
                duration-500
                hover:border-[#F68633]/40
                hover:shadow-[0_0_30px_rgba(246,134,51,0.08)]
              "
            >
              {/* Quote Icon */}
              <Quote size={28} className="mb-8 text-[#F68633]/70" />

              {/* Review */}
              <Typography variant="p" className="mb-8 text-white/80">
                {testimonial.quote}
              </Typography>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    className="text-[#F68633]"
                  />
                ))}
              </div>

              {/* Name */}
              <Typography variant="h6" className="mb-1 text-white">
                {testimonial.name}
              </Typography>

              {/* Vehicle */}
              <Typography variant="nav" className="text-[#F68633]/80">
                {testimonial.vehicle}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
