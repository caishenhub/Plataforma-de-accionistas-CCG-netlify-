
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mar', portfolio: 42000000, benchmark: 40000000 },
  { name: 'Abr', portfolio: 45000000, benchmark: 41000000 },
  { name: 'May', portfolio: 48000000, benchmark: 42500000 },
  { name: 'Jun', portfolio: 46000000, benchmark: 43000000 },
  { name: 'Jul', portfolio: 52000000, benchmark: 45000000 },
  { name: 'Ago', portfolio: 58000000, benchmark: 47000000 },
  { name: 'Sep', portfolio: 55000000, benchmark: 46000000 },
  { name: 'Oct', portfolio: 62000000, benchmark: 48500000 },
  { name: 'Nov', portfolio: 65000000, benchmark: 49500000 },
  { name: 'Dic', portfolio: 68500000, benchmark: 51000000 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="h-80 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ceff04" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ceff04" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1d1c2d" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#1d1c2d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#9CA3AF', fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            hide 
            domain={['dataMin - 5000000', 'dataMax + 5000000']} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1d1c2d', 
              border: 'none', 
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              padding: '12px'
            }}
            itemStyle={{ fontSize: '12px', padding: '2px 0' }}
            labelStyle={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            formatter={(value: number, name: string) => [
              `$${(value / 1000000).toFixed(1)}M`, 
              name === 'portfolio' ? 'Portafolio' : 'S&P 500'
            ]}
          />
          <Legend 
            verticalAlign="top" 
            align="right" 
            iconType="circle"
            wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}
            formatter={(value) => <span className="text-text-secondary ml-1">{value === 'portfolio' ? 'Portafolio' : 'S&P 500'}</span>}
          />
          <Area 
            type="monotone" 
            dataKey="benchmark" 
            name="benchmark"
            stroke="#1d1c2d" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            fillOpacity={1} 
            fill="url(#colorBenchmark)" 
            animationDuration={1500}
          />
          <Area 
            type="monotone" 
            dataKey="portfolio" 
            name="portfolio"
            stroke="#ceff04" 
            strokeWidth={4} 
            fillOpacity={1} 
            fill="url(#colorPortfolio)" 
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
