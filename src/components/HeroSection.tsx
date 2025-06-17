import React from 'react';
import Button from './UI/Button';
import { ArrowRightIcon } from 'lucide-react';

import HeroBG from '../assets/HeroBG.jpg';

interface HeroSectionProps {
  onScrollClick: () => void;
  onScrollToReport: () => void;
}



const HeroSection: React.FC<HeroSectionProps> = ({ onScrollClick, onScrollToReport }) => {

  return <section className="relative bg-[#01562c] opacity-95 text-white">
      {/* Background image overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#01562c]/90 z-0"></div>
      {/* Image placeholder - would be replaced with actual image */}
      <div className="absolute inset-0 z-[-1] bg-cover bg-center" style={{
      backgroundImage: `url(${HeroBG})`
    }}></div>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-block bg-[#01b71c] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 md:mb-6">
            Annual Flagship Report
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-center md:text-left">
            The State of Enterprise 2025: Driving Nigeria's Economic Resilience
            & Growth
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl text-center md:text-left">
            Explore the latest comprehensive insights from Nigeria's Financial
            and Professional Services (FPS) sector. Discover its
            performance, its impact on 13 of 17 SDGs, and key recommendations
            for future development.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Button onClick={onScrollClick} variant="primary" size="lg" className="w-full md:w-auto">
              Download the 2025 Report{' '}
              <ArrowRightIcon size={16} className="ml-2 inline" />
            </Button>
            <Button onClick={onScrollToReport} variant="outline" size="lg" className="w-full md:w-auto">
              View Past Reports
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;