import Image from "next/image";
import Navbar from "../ui/NavBar";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 z-50 w-full bg-[#0b0807] text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 h-10 flex items-center justify-between">
          {/* Address */}
          <div className="flex items-center gap-2 text-gray-300 min-w-0">
            <FaMapMarkerAlt className="text-[#F68633] shrink-0 text-xs sm:text-sm" />

            <span className="text-[10px] sm:text-xs md:text-sm truncate">
              Bahria Enclave | Kuri Road | Newmal | Adjacent Sonari Bank
            </span>
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-6 text-gray-300 ml-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F68633]" />
              <span>0324 8448786</span>
            </div>

            <div className="flex gap-4 text-white text-base">
              <Link
                href="https://www.facebook.com/profile.php?id=61590479054239"
                target="_blank"
              >
                <FaFacebookF className="hover:text-[#F68633] transition-colors cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/carscate/" target="_blank">
                <FaInstagram className="cursor-pointer transition-colors hover:text-[#F68633]" />
              </Link>
              {/* <FaYoutube className="hover:text-[#F68633] transition-colors cursor-pointer" /> */}
              <FaGlobe className="hover:text-[#F68633] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="fixed top-10 z-50 w-full flex justify-center bg-[rgb(32_29_30)] border-b-2 border-[#F68633] shadow-[0_12px_25px_-8px_rgba(246,134,51,0.5)]">
        <div className="w-full max-w-7xl px-3 sm:px-5 lg:px-6 flex items-center justify-between py-2">
          {/* Logo */}
          <div className="relative shrink-0 w-28 h-12 sm:w-36 sm:h-14 md:w-48 md:h-20 lg:w-64 lg:h-24">
            <Image
              src="/images/Logo.jpeg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation */}
          <div className="flex-1 flex justify-end">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
