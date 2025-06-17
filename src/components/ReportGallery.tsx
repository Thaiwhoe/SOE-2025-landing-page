import React, {forwardRef} from 'react';
import Button from './UI/Button';
import { DownloadIcon } from 'lucide-react';

import Cover_2022 from '../assets/Report Gallery Covers 2022.jpg';
import Cover_2023 from '../assets/Report Gallery Covers 2023.jpg';
import Cover_2024 from '../assets/Report Gallery Covers 2025.jpg';

interface ReportCardProps {
  year: string;
  imageSrc: string;
  title: string;
}
const ReportCard: React.FC<ReportCardProps> = ({
  year,
  imageSrc,
  title
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[3/4] bg-gray-100">
        <img src={imageSrc} alt={`${year} State of Enterprise Report`} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-[#01b71c] text-white text-xs font-bold px-2 py-1 rounded-md">
          {year}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-[#01562c] mb-2">{title}</h3>
        <Button variant="outline" size="sm" className="w-full">
          <DownloadIcon size={16} className="mr-2" />
          Download Report
        </Button>
      </div>
    </div>;
};
const ReportGallery = forwardRef<HTMLDivElement> ((props, ref) => {
  const reports = [{
    year: '2024',
    imageSrc: `${Cover_2024}`,
    title: 'State of Enterprise 2024 Report'
  }, {
    year: '2023',
    imageSrc: `${Cover_2023}`,
    title: 'State of Enterprise 2023 Report'
  }, {
    year: '2022',
    imageSrc: `${Cover_2022}`,
    title: 'State of Enterprise 2022 Report'
  }];
  return <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01562c] mb-4 md:mb-6">
            Previous Reports
          </h2>
          <div className="h-1 w-20 bg-[#01b71c] mx-auto mb-6 md:mb-10"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Explore our collection of past State of Enterprise reports.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reports.map(report => <ReportCard key={report.year} year={report.year} imageSrc={report.imageSrc} title={report.title} />)}
        </div>
      </div>
    </section>;
});
export default ReportGallery;