"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Typography from "@/components/reusbleComponents/Typography";

export default function Footer() {
  const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  const services = [
    "Ceramic Coating",
    "Paint Protection Film",
    "Full Detail",
    "Paint Correction",
    "Interior Detail",
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Book Appointment", href: "/book-appointment" },
    { name: "Contact", href: "/contact" },
  ];

  const hoverClass =
    "text-gray-400 hover:text-[#F68633] transition-colors duration-300";

  return (
    <>
      <div
        className="
        relative
        before:absolute before:top-0 before:left-0 before:w-full before:h-[2px]
        before:bg-gradient-to-r before:from-[rgb(32_29_30)]
        before:via-[#F68633] before:to-[rgb(32_29_30)]
        "
      />

      <footer className="bg-[rgb(32_29_30)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Brand */}
            <div className="text-center sm:text-left lg:col-span-1">
              <Image
                src="/images/Logo.jpeg"
                alt="Carscate Logo"
                width={300}
                height={90}
                className="h-10 sm:h-12 w-auto mx-auto sm:mx-0"
              />

              <Typography
                variant="p"
                className="mt-5 text-gray-400 max-w-md mx-auto sm:mx-0"
              >
                Where Perfection Meets Passion. Premium car detailing,
                ceramic coatings, and paint protection for those who demand the best.
              </Typography>


              <div className="flex gap-4 mt-5 justify-center sm:justify-start">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="w-10 h-10 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:text-[#F68633] hover:border-[#F68633]"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>


            {/* Services */}
            <FooterColumn title="Services">
              {services.map((service) => (
                <li key={service} className={hoverClass}>
                  <Typography variant="small">
                    {service}
                  </Typography>
                </li>
              ))}
            </FooterColumn>


            {/* Company */}
            {/* <FooterColumn title="Company">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={hoverClass}
                  >
                    <Typography variant="small">
                      {item.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </FooterColumn> */}

          </div>


          <div className="mt-10 pt-5 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-4">

            <Typography
              variant="small"
              className="text-gray-500 tracking-wide uppercase"
            >
              © 2026 CARSCATE. ALL RIGHTS RESERVED.
            </Typography>

            <Typography
              variant="nav"
              className="text-[#F68633] text-center px-0!"
            >
              CARSCATE — WHERE PERFECTION MEETS PASSION
            </Typography>

          </div>

        </div>
      </footer>
    </>
  );
}


function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center sm:text-left lg:justify-self-center">
      <Typography
        variant="nav"
        className="text-white mb-4 tracking-[3px] sm:tracking-[4px]"
      >
        {title}
      </Typography>

      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
}