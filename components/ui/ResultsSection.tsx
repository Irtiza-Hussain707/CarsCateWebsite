"use client";

import Image from "next/image";
import Typography from "@/components/reusbleComponents/Typography";

const services = [
  {
    title: "Full Detail",
    badge: "COMPLETE TRANSFORMATION",
    image: "/images/ResultsImg1.jpg",
  },
  {
    title: "Ceramic Coating",
    badge: "MIRROR FINISH",
    image: "/images/ResultsImg2.jpg",
  },
  {
    title: "Paint Correction",
    badge: "SWIRL REMOVAL",
    image: "/images/ResultsImg3.jpg",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-12 flex items-center gap-6">
          <div>
            <Typography variant="nav" className="mb-4 text-[#F68633]">
              RESULTS THAT SPEAK
            </Typography>

            <Typography variant="h3" className="text-white">
              THE CARSCATE DIFFERENCE
            </Typography>
          </div>

          <div className="hidden h-px flex-1 bg-[#F68633]/30 lg:block" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-black"
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 bg-[#F68633] px-6 py-1">
                  <Typography
                    variant="small"
                    className="font-semibold tracking-[2px] text-black uppercase opacity-100"
                  >
                    {service.badge}
                  </Typography>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <Typography variant="h6" className="mb-5 text-white">
                    {service.title}
                  </Typography>

                  <div className="h-px w-full bg-[#F68633]/70 transition-all duration-500 group-hover:bg-[#F68633]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-8 flex justify-center">
          <button className="group border-b border-[#F68633]/40 pb-2 transition-all duration-300 hover:border-[#F68633]">
            <Typography
              variant="nav"
              className="text-[#F68633] cursor-pointer transition-all duration-300 group-hover:text-[#F89247] group-hover:drop-shadow-[0_0_8px_rgba(246,134,51,0.8)]"
            >
              VIEW FULL GALLERY →
            </Typography>
          </button>
        </div> */}
      </div>
    </section>
  );
}
