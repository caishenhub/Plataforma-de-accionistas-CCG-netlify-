
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JUN', value: 245 },
  { name: 'JUL', value: 280 },
  { name: 'AGO', value: 275 },
  { name: 'SEP', value: 310 },
  { name: 'OCT', value: 340 },
  { name: 'NOV', value: 385 },
  { name: 'DIC', value: 420 },
];

const EvolutionChart: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEvolution" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ccfd08" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ccfd08" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#f1f4e6" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#9CA3AF', fontWeight: 800 }}
            dy={15}
          />
          <YAxis hide domain={['dataMin - 20', 'dataMax + 20']} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1d1c2d', 
              border: 'none', 
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            itemStyle={{ color: '#ccfd08', fontSize: '12px', fontWeight: 900 }}
            labelStyle={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase' }}
            cursor={{ stroke: '#1d1c2d', strokeWidth: 2, strokeDasharray: '4 4' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#1d1c2d" 
            strokeWidth={4} 
            fillOpacity={1} 
            fill="url(#colorEvolution)" 
            dot={{ r: 4, fill: '#ccfd08', stroke: '#1d1c2d', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#ccfd08', stroke: '#1d1c2d', strokeWidth: 2 }}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EvolutionChart;
