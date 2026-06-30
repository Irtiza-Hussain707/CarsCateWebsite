import Typography from "@/components/reusbleComponents/Typography";

const stats = [
  {
    value: "500+",
    label: "Vehicles Detailed",
  },
  {
    value: "5-Year",
    label: "Ceramic Warranty",
  },
  {
    value: "Certified",
    label: "Installers",
  },
];

export default function StatsBar() {
  return (
    <section className="w-full border-y border-white/10 bg-black/40 backdrop-blur-sm mt-12 md:mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex-1
                flex flex-col items-center justify-center
                px-4 py-6 md:py-8
                min-w-0
                ${
                  index !== stats.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <Typography
                variant="h6"
                className="
                  text-[#F68633]
                  text-center
                  break-words
                "
              >
                {stat.value}
              </Typography>

              <Typography
                variant="small"
                className="
                  mt-2
                  text-center
                  uppercase
                  tracking-[1.5px] sm:tracking-[2px]
                  text-white/50
                  break-words
                "
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}