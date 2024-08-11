import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestSection from './TestSection';
import ContactUs from './ContactUs';
import Footer from './Footer'
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <FeaturesSection />
      <TestSection />
      <BlogSection/>
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
