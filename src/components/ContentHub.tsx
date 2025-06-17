import React from 'react';
import { PlayCircleIcon, MicIcon, BarChart2Icon } from 'lucide-react';
import Button from './UI/Button';
interface ContentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
}
const ContentCard: React.FC<ContentCardProps> = ({
  icon,
  title,
  description,
  linkText
}) => {
  return <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-[#01b71c] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#01562c] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" size="sm" className="w-full md:w-auto">
        {linkText}
      </Button>
    </div>;
};
const ContentHub = () => {
  return <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01562c] mb-4 md:mb-6">
            Explore More Content
          </h2>
          <div className="h-1 w-20 bg-[#01b71c] mx-auto mb-6 md:mb-10"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Dive deeper into the insights with additional content formats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <ContentCard icon={<PlayCircleIcon size={40} />} title="Video Insights" description="Watch our experts break down key findings from the 2025 State of Enterprise Report." linkText="Watch Videos" />
          <ContentCard icon={<MicIcon size={40} />} title="Podcast Series" description="Listen to in-depth discussions about Nigeria's Financial and Professional Services sector." linkText="Listen Now" />
          <ContentCard icon={<BarChart2Icon size={40} />} title="Interactive Data" description="Explore the data behind the report with our interactive visualizations." linkText="Explore Data" />
        </div>
      </div>
    </section>;
};
export default ContentHub;