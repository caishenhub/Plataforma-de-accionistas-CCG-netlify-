
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Renta Variable', value: 60, color: '#1d1c2d' },
  { name: 'Bonos Corp.', value: 25, color: '#ccfd08' },
  { name: 'Activos Digitales', value: 15, color: '#9CA3AF' },
];

const AssetDistributionDonut: React.FC = () => {
  return (
    <div className="h-48 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            paddingAngle={5}
            dataKey="value"
            animationDuration={1500}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1d1c2d', border: 'none', borderRadius: '12px', color: '#fff' }}
            itemStyle={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-black text-text-muted uppercase tracking-tighter">Fondo Total</span>
        <span className="text-xl font-black text-accent tracking-tighter">$45.2M</span>
      </div>
    </div>
  );
};

export default AssetDistributionDonut;
