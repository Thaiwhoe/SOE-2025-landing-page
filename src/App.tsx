import React, {useRef} from 'react';
import Header from './components/Layout/Header';
import HeroSection from './components/HeroSection';
import ExecutiveSummary from './components/ExecutiveSummary';
// import oldStatsStrip from './components/OldStatsStrip';
import KeyInsights from './components/KeyInsights';
import DownloadForm from './components/DownloadForm';
import ReportGallery from './components/ReportGallery';
import ContentHub from './components/ContentHub';
import Footer from './components/Layout/Footer';
import StatsStrip from './components/StatStrip';


export function App() {
  const downloadRef = useRef<HTMLDivElement | null>(null);
  const reportRef = useRef<HTMLDivElement | null>(null);


  const scrollToStats = () => {
    downloadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReport = () => {
  reportRef.current?.scrollIntoView({ behavior: 'smooth' });
};


  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection onScrollClick={scrollToStats} onScrollToReport={scrollToReport}/>
        <ExecutiveSummary />
        <StatsStrip />
        <KeyInsights />
        <DownloadForm ref={downloadRef}/>
        <ReportGallery ref={reportRef}/>
        <ContentHub />
      </main>
      <Footer />
    </div>;
}