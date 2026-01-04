
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Acciones', value: 60, color: '#ceff04' },
  { name: 'Cripto', value: 25, color: '#1d1c2d' },
  { name: 'Efectivo', value: 15, color: '#9CA3AF' },
];

const AllocationPieChart: React.FC = () => {
  return (
    <div className="h-48 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-bold text-text-muted uppercase tracking-tighter">Total</span>
        <span className="text-xl font-black text-accent">$124M</span>
      </div>
    </div>
  );
};

export default AllocationPieChart;
