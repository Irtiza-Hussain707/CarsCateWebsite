"use client";

import { useState } from "react";

import Button from "../reusbleComponents/Button";
import Typography from "../reusbleComponents/Typography";
import BookingForm from "@/components/ui/BookingForm";

export default function AppointmentBooking() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div id="booking-form">
        {/* Top gradient line */}
        <div
          className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-[2px]
          before:bg-gradient-to-r before:from-[rgb(32_29_30)] before:via-[#F68633] before:to-[rgb(32_29_30)]"
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:items-start md:text-left px-6 sm:px-10 lg:px-16 py-10 sm:py-14 md:py-20">
          
          <Typography
            variant="nav"
            className="mt-4 text-[#F68633] text-sm sm:text-base"
          >
            Book an Appointment
          </Typography>

          <Typography
            variant="h3"
            className="text-[#F5F1EA] mt-4 max-w-3xl text-2xl sm:text-3xl md:text-4xl leading-snug"
          >
            Ready For The Treatment
            <br />
            Your Car Deserves?
          </Typography>

          <hr className="w-20 sm:w-24 md:w-1/6 border-t border-[#F68633] mt-5" />

          <Typography
            variant="p"
            className="text-white/50 mt-6 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            Join hundreds of discerning owners who trust Carscate with their most
            prized possession. Appointments fill fast — secure yours today
          </Typography>

          <Button
            variant="gold"
            className="mt-8 w-full sm:w-auto py-3 sm:py-4 px-8 sm:px-16 text-base sm:text-lg"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Your Appointment
          </Button>
        </div>

        {/* Bottom gradient line */}
        <div
          className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-[2px]
          before:bg-gradient-to-r before:from-[rgb(32_29_30)] before:via-[#F68633] before:to-[rgb(32_29_30)]"
        />
      </div>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}