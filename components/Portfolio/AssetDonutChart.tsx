
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Inmobiliario', value: 342, color: '#1d1c2d' },
  { name: 'Bolsa', value: 285, color: '#ceff04' },
  { name: 'Divisas', value: 228, color: '#9CA3AF' },
  { name: 'Commodity', value: 171, color: '#4B5563' },
  { name: 'Cripto', value: 114, color: '#3B82F6' },
];

const AssetDonutChart: React.FC = () => {
  return (
    <div className="w-full h-full relative min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={120}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
            animationBegin={200}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1d1c2d', 
              border: 'none', 
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}
            labelStyle={{ display: 'none' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1">Valor Total</span>
        <span className="text-4xl font-black text-accent tracking-tighter">$1.14M</span>
      </div>
    </div>
  );
};

export default AssetDonutChart;
