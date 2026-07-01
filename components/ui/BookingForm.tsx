"use client";

import Typography from "@/components/reusbleComponents/Typography";
import Button from "@/components/reusbleComponents/Button";
import { FaWhatsapp } from "react-icons/fa";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div id="booking-form">
      <div
        className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-4 md:items-center"
        onClick={onClose}
      >
        <div
          className="relative my-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#F68633]/20 bg-[#050505] shadow-[0_0_50px_rgba(246,134,51,0.12)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Orange Glow */}
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F68633]/10 blur-3xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4 md:px-8 md:py-5">
            <div>
              <Typography variant="nav" className="text-[#F68633]">
                BOOK YOUR APPOINTMENT
              </Typography>

              <Typography variant="h4" className="mt-2 text-white">
                Contact Us
              </Typography>
            </div>

            <button
              onClick={onClose}
              className="text-2xl text-white/60 transition hover:text-[#F68633]"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center px-5 py-8 text-center md:px-12 md:py-12">
            {/* WhatsApp Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 md:mb-8 md:h-20 md:w-20">
              <FaWhatsapp className="text-4xl text-[#25D366] md:text-5xl" />
            </div>

            <Typography variant="h4" className="mb-4 text-white">
              Schedule Your Appointment
            </Typography>

            <Typography
              variant="small"
              className="max-w-lg leading-6 text-white/70 md:leading-7"
            >
              Ready to give your vehicle the care it deserves? Chat with our
              team on WhatsApp to ask questions, choose a service, and reserve
              your preferred appointment time.
            </Typography>

            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/923248448786?text=Hi!%20I'd%20like%20to%20book%20an%20appointment.",
                  "_blank"
                )
              }
              className="mt-8 flex items-center gap-3 rounded-full px-6 py-3 text-base transition duration-300 hover:scale-105 md:mt-10 md:px-8 md:py-4 md:text-lg"
            >
              <FaWhatsapp className="text-xl md:text-2xl" />
              Chat on WhatsApp
            </Button>

            <Typography
              variant="small"
              className="mt-5 font-medium tracking-wide text-[#F68633]"
            >
              +92 324 8448786
            </Typography>

            {/* Features */}
            <div className="mt-8 grid w-full grid-cols-1 gap-4 md:mt-12 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Typography variant="h6" className="mb-2 text-white">
                  Fast Replies
                </Typography>

                <Typography variant="small" className="text-white/60">
                  Get a response from our team as quickly as possible.
                </Typography>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Typography variant="h6" className="mb-2 text-white">
                  Easy Booking
                </Typography>

                <Typography variant="small" className="text-white/60">
                  Choose your preferred date and service in just a few messages.
                </Typography>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Typography variant="h6" className="mb-2 text-white">
                  Expert Advice
                </Typography>

                <Typography variant="small" className="text-white/60">
                  Our detailing specialists will help you select the right
                  package.
                </Typography>
              </div>
            </div>

            <Typography
              variant="small"
              className="mt-8 text-center text-white/40 md:mt-10"
            >
              We typically respond within business hours.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}