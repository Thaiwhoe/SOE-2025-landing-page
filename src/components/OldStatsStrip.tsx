import React from 'react';
interface StatProps {
  value: string;
  description: string;
}
const Stat: React.FC<StatProps> = ({
  value,
  description
}) => {
  return <div className="text-center px-4 py-6 md:py-0">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01b71c] mb-2">
        {value}
      </div>
      <p className="text-white text-sm md:text-base">{description}</p>
    </div>;
};
const StatsStrip = () => {
  return <section className="bg-[#01562c] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <Stat value="₦1.078 QUADRILLION" description="Total value of electronic payment transactions, a 79% increase in 2024" />
          <Stat value="₦62.76 TRILLION" description="NGX total equity market capitalization, a 53.4% surge in 2024" />
          <Stat value="126.8% INCREASE" description="In foreign participation in the Capital Markets in 2024" />
          <Stat value="₦22.51 TRILLION" description="Pension assets under management, growing by 22.6% in 2024" />
        </div>
      </div>
    </section>;
};
export default StatsStrip;