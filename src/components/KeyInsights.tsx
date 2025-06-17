import React, { useState } from 'react';
import bank from '../assets/icons/bank.png';
import assets from '../assets/icons/assets.png';
import fintech from '../assets/icons/fintech.png';
import life from '../assets/icons/life-insurance.png';

import { ChevronDownIcon, ChevronUpIcon} from 'lucide-react';
interface InsightTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}
const InsightTab: React.FC<InsightTabProps> = ({
  title,
  isActive,
  onClick
}) => {
  return <button className={`px-4 py-3 text-left font-medium transition-colors ${isActive ? 'bg-[#01b71c] text-white' : 'bg-gray-100 text-[#01562c] hover:bg-gray-200'}`} onClick={onClick}>
      {title}
    </button>;
};
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onClick,
  children
}) => {
  return <div className="border border-gray-200 mb-2">
      <button className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center ${isOpen ? 'bg-[#01b71c] text-white' : 'bg-gray-100 text-[#01562c]'}`} onClick={onClick}>
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
      </button>
      {isOpen && <div className="p-4 bg-white border-t border-gray-200">{children}</div>}
    </div>;
};
interface InsightContentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: string;
}
const InsightContent: React.FC<InsightContentProps> = ({
  title,
  description,
  icon,
  stats
}) => {
  return <div className="p-6 bg-white border border-gray-200 rounded-b-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <h4 className="text-xl font-bold text-[#01562c] mb-4">{title}</h4>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="font-bold text-[#01b71c]">{stats}</div>
        </div>
        <div className="md:w-1/3 flex items-center justify-center bg-gray-100 rounded-lg p-4 mt-4 md:mt-0">
          <div className="text-[#01562c] opacity-80">
            {icon}
            {/* <div className="text-sm text-center mt-2">Chart Placeholder</div> */}
          </div>
        </div>
      </div>
    </div>;
};
const MobileAccordion: React.FC<{
  insights: any[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}> = ({
  insights,
  activeTab,
  setActiveTab
}) => {
  return <div className="md:hidden">
      {insights.map(insight => <AccordionItem key={insight.id} title={insight.title} isOpen={activeTab === insight.id} onClick={() => setActiveTab(insight.id)}>
          <div>
            <p className="text-gray-700 mb-4">{insight.description}</p>
            <div className="font-bold text-[#01b71c] mb-4">{insight.stats}</div>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
              <div className="text-[#01562c] opacity-80">
                {insight.icon}
                {/* <div className="text-sm text-center mt-2">
                  Chart Placeholder
                </div> */}
              </div>
            </div>
          </div>
        </AccordionItem>)}
    </div>;
};
const TabletDesktopTabs: React.FC<{
  insights: any[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}> = ({
  insights,
  activeTab,
  setActiveTab
}) => {
  const activeInsight = insights.find(insight => insight.id === activeTab) || insights[0];
  return <div className="hidden md:block">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mb-1">
        {insights.map(insight => <InsightTab key={insight.id} title={insight.title} isActive={activeTab === insight.id} onClick={() => setActiveTab(insight.id)} />)}
      </div>
      <InsightContent title={activeInsight.title} description={activeInsight.description} icon={activeInsight.icon} stats={activeInsight.stats} />
    </div>;
};
const KeyInsights = () => {
  const [activeTab, setActiveTab] = useState('banking');
  const insights = [{
    id: 'banking',
    title: 'Banking',
    description: "The Banking sub-sector demonstrates exceptional growth and resilience in Nigeria's financial landscape, with substantial asset expansion and improved financial inclusion metrics.",
    stats: 'Total assets projected to hit ₦184.2 trillion, a 51.2% growth in 2024',
    icon: <img src={bank} className="w-[118.76px] h-[91.99px] object-contain" alt="Banking Icon"/>
  }, {
    id: 'insurance',
    title: 'Insurance',
    description: 'The Insurance sub-sector shows remarkable progress in market penetration and premium growth, indicating increasing adoption of insurance products.',
    stats: 'Gross premiums projected to reach ₦1.470 trillion in 2024',
    icon: <img src={life} className="w-[110px] h-[110px] object-contain" alt="Insurance Icon" />
  }, {
    id: 'asset-management',
    title: 'Asset Management',
    description: 'Asset Management continues to demonstrate strong growth with increasing investor confidence and market participation.',
    stats: 'Net asset value of registered mutual funds soared by 79.46% to ₦3.83 trillion in 2024',
    icon: <img src={assets} className="w-[110px] h-[110px] object-contain" alt="assets-management Icon" />
  }, {
    id: 'fintech',
    title: 'FinTech',
    description: "Nigeria's FinTech ecosystem maintains its explosive growth trajectory, revolutionizing financial services accessibility and digital payments.",
    stats: 'Mobile money transactions reached ₦79.55 trillion in 2024',
    icon: <img src={fintech} className="w-[110px] h-[110px] object-contain" alt="Banking Icon" />
  }];
  return <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01562c] mb-4 md:mb-6">
            Key Insights
          </h2>
          <div className="h-1 w-20 bg-[#01b71c] mx-auto mb-6 md:mb-10"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Explore the performance and trends across Nigeria's Financial and
            Professional Services sub-sectors.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Mobile Accordion View */}
          <MobileAccordion insights={insights} activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Tablet and Desktop Tab View */}
          <TabletDesktopTabs insights={insights} activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* <div className="mt-8 text-center">
            <button className="inline-flex items-center text-[#01b71c] font-medium hover:underline">
              View all insights
              <ChevronDownIcon size={16} className="ml-1" />
            </button>
          </div> */}
        </div>
      </div>
    </section>;
};
export default KeyInsights;