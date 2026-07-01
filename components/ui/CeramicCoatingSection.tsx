import Image from "next/image";
import Typography from "@/components/reusbleComponents/Typography";
import Button from "@/components/reusbleComponents/Button";
import {
  Shield,
  Droplets,
  Sparkles,
  Layers3,
} from "lucide-react";

export default function CeramicCoatingSection() {
  const features = [
    {
      icon: Shield,
      text: "9H hardness — harder than your paint",
    },
    {
      icon: Droplets,
      text: "Hydrophobic self-cleaning surface",
    },
    {
      icon: Sparkles,
      text: "Mirror-like gloss that lasts years",
    },
    {
      icon: Layers3,
      text: "UV, chemical & scratch resistance",
    },
  ];

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl border border-white/10">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative min-h-[350px] lg:min-h-[700px]">
            <Image
              src="/images/CeramicCoatingImg.jpg"
              alt="Ceramic Coating"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="flex items-center bg-black">
            <div className="w-full px-6 py-12 md:px-12 lg:px-16">
              {/* Small Heading */}
              <Typography
                variant="nav"
                className="mb-6 text-[#F68633]"
              >
                CERAMIC COATING
              </Typography>

              {/* Main Heading */}
              <Typography
                variant="h3"
                className="max-w-xl text-white"
              >
                THE LAST PROTECTION YOUR CAR WILL EVER NEED
              </Typography>

              {/* Divider */}
              <div className="my-8 h-px w-16 bg-[#F68633]" />

              {/* Description */}
              <Typography
                variant="p"
                className="max-w-xl text-white/70"
              >
                Our professional-grade 9H ceramic coating creates a
                permanent bond with your vehicle&apos;s paint,
                delivering unmatched protection and a depth of gloss
                that turns heads everywhere you go. This isn&apos;t a
                wax — it&apos;s a revolution in paint protection.
              </Typography>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <Icon
                        size={18}
                        className="text-[#F68633] shrink-0"
                      />

                      <Typography
                        variant="p"
                        className="text-white/85"
                      >
                        {feature.text}
                      </Typography>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              {/* <div className="mt-12">
                <Button>
                  Explore Services →
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}