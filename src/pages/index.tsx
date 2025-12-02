import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { WhySection } from "@/components/home/WhySection";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { AudienceSection } from "@/components/home/AudienceSection";
import { TeachersSection } from "@/components/home/TeachersSection";
import { AboutVovinamSection } from "@/components/home/AboutVovinamSection";
import { NewsSection } from "@/components/home/NewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TrialCTASection } from "@/components/home/TrialCTASection";
import { PricingSection } from "@/components/home/PricingSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhySection />
      <SchedulePreview />
      <AudienceSection />
      <TeachersSection />
      <AboutVovinamSection />
      <PricingSection />
      <NewsSection />
      <GallerySection />
      <TrialCTASection />
    </SiteLayout>
  );
}
