import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'On track', value: 33, color: '#3E8E7A' },
  { name: 'Active', value: 12, color: '#94D1C2' },
  { name: 'Urgent', value: 2, color: '#0A4E75' },
];

const stats = [
  { label: 'Total properties', value: '47' },
  { label: 'Urgent actions', value: '2', isUrgent: true },
  { label: 'Events next 90 days', value: '6' },
  { label: 'Rent at risk p.a.', value: '£3.76M' },
];

export function PortfolioStatusChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full min-w-0 flex flex-col h-full min-h-[400px]">
      <div className="mb-4">
        <h2 className="text-[#212223] text-[20px] font-['Clario:Medium',sans-serif] leading-[1.2]">
          Portfolio status
        </h2>
      </div>

      {/* Stats Grid - moved to top */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-[#F5F5F5] rounded-lg p-4"
          >
            <p className={`text-[14px] font-['Source_Sans_3:Regular',sans-serif] mb-2 leading-[1.3] ${
              stat.isUrgent ? 'text-[#0A4E75]' : 'text-[#666666]'
            }`}>
              {stat.label}
            </p>
            <p className={`text-[28px] font-['Clario:Bold',sans-serif] leading-[1] ${
              stat.isUrgent ? 'text-[#0A4E75]' : 'text-[#212223]'
            }`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Legend and Chart side by side - moved to bottom */}
      <div className="flex items-center justify-center gap-8">
        {/* Legend */}
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2 whitespace-nowrap">
              <div 
                className="w-4 h-4 rounded-sm" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[#212223] text-[14px] font-['Source_Sans_3:Regular',sans-serif]">
                {item.name} ({item.value})
              </span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="w-[250px] h-[180px] min-w-[250px] min-h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0];
                    return (
                      <div className="bg-white border border-[#E5E5E5] rounded p-2 shadow-sm">
                        <p className="text-[#212223] text-[14px] font-semibold">{data.name}</p>
                        <p className="text-[#666666] text-[12px]">{data.value} properties</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}