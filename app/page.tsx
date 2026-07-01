"use client";

import AppointmentBooking from "@/components/ui/AppointmentBooking";
import BookingForm from "@/components/ui/BookingForm";
import CeramicCoatingSection from "@/components/ui/CeramicCoatingSection";
import ExpertiseSection from "@/components/ui/ExpertiseSection";
import HeroSection from "@/components/ui/HeroSection";
import ResultsSection from "@/components/ui/ResultsSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="bg-black space-y-12 md:space-y-16 pb-10">
        <ExpertiseSection />
        <CeramicCoatingSection />
        <ResultsSection />
        <TestimonialsSection />
        <AppointmentBooking />
      </main>
    </>
  );
}
