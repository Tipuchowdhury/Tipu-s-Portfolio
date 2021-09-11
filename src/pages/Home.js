import React from 'react';
import AboutSectiom from '../components/AboutSectiom';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServiceSection from '../components/ServiceSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSectiom />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  );
}
