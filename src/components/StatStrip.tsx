import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


export const StatsStrip = () => {
  const stats = [
    {
      value: 1.078,
      suffix: ' QUADRILLION',
      prefix: '₦',
      decimals: 3,
      description: 'Total value of electronic payment transactions, a 79% increase in 2024'
    },
    {
      value: 62.76,
      suffix: ' TRILLION',
      prefix: '₦',
      decimals: 2,
      description: 'NGX total equity market capitalization, a 53.4% surge in 2024'
    },
    {
      value: 126.8,
      suffix: '% INCREASE',
      decimals: 1,
      description: 'In foreign participation in the Capital Markets in 2024'
    },
    {
      value: 22.51,
      suffix: ' TRILLION',
      prefix: '₦',
      decimals: 2,
      description: 'Pension assets under management, growing by 22.6% in 2024'
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35, // Starts counting when 30% of section is visible
  });

  return (
    <section ref={ref} className="bg-[#01562c] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border-l-4 border-[#01b71c] bg-[#01562c]/90 text-white">
              <div className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold">
                  {stat.prefix}
                 {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      decimals={stat.decimals}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </p>
                <p className="text-sm md:text-base opacity-90 mt-2">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip