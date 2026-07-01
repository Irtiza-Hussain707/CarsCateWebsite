"use client";

import Image from "next/image";

const services = [
  {
    title: "Ceramic Coating",
    description:
      "9H hardness protection that bonds to your paint at the molecular level. Hydrophobic, self-cleaning, and stunning.",
    image: "/images/ExpSecImg1.jpg",
    large: true,
  },
  {
    title: "Paint Protection Film",
    description:
      "Invisible armour against rock chips, scratches, and road debris.",
    image: "/images/ExpSecImg2.jpg",
  },
  {
    title: "Full Detail",
    description:
      "A complete exterior and interior transformation inside and out.",
    image: "/images/ExpSecImg3.jpg",
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage machine polishing to eliminate swirls, scratches, and oxidation.",
    image: "/images/ExpSecImg4.jpg",
  },
  {
    title: "Interior Detail",
    description:
      "Deep-clean leather, fabric, and trim to showroom condition.",
    image: "/images/ExpSecImg5.jpg",
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-transparent py-16" id="services">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-4 text-xs tracking-[0.4em] text-[#F68633] font-semibold">
            OUR EXPERTISE
          </p>

          <div className="flex items-center gap-8">
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              WHAT WE DO
            </h2>

            <div className="h-px flex-1 bg-[#F68633]/20" />
          </div>
        </div>


        {/* Cards */}
        <div className="
          grid
          gap-4
          lg:grid-cols-3
          lg:grid-rows-2
        ">

          {services.map((item, index) => (
            <div
              key={item.title}
              className={`
                group relative overflow-hidden
                border border-transparent
                transition-all duration-500
                hover:border-[#F68633]

                ${
                  item.large
                    ? "lg:row-span-2 min-h-[420px]"
                    : "min-h-[200px]"
                }
              `}
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:-translate-y-4
                "
              />


              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/50
                  to-transparent
                "
              />


              {/* Content */}
              <div
                className="
                  absolute bottom-0 left-0
                  p-6
                  md:p-8
                "
              >
                <h3
                  className="
                    mb-3
                    font-serif
                    text-xl
                    text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    max-w-md
                    text-sm
                    leading-6
                    text-white/60
                  "
                >
                  {item.description}
                </p>


                {item.large && (
                  <button
                    className="
                      mt-5
                      text-xs
                      tracking-widest
                      text-[#F68633]
                      hover:text-white
                      transition
                    "
                  >
                    
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}