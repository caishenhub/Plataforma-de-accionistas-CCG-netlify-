
import React from 'react';
import { TrendingUp, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: LucideIcon;
  variant?: 'light' | 'dark' | 'neon';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeLabel, icon: Icon, variant = 'light' }) => {
  const containerClasses = {
    light: 'bg-white border-surface-border text-accent',
    dark: 'bg-accent border-accent text-white',
    neon: 'bg-primary border-primary text-accent shadow-neon'
  };

  const iconClasses = {
    light: 'text-primary opacity-10',
    dark: 'text-white opacity-5',
    neon: 'text-accent opacity-10'
  };

  return (
    <div className={`rounded-3xl p-7 border relative overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-1 ${containerClasses[variant]}`}>
      <div className={`absolute -right-6 -top-6 p-4 transition-opacity duration-500 group-hover:opacity-20 ${iconClasses[variant]}`}>
        <Icon size={120} />
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${variant === 'dark' ? 'text-gray-400' : 'text-text-secondary'}`}>
            {title}
          </p>
          <h3 className="text-3xl font-black tracking-tighter">
            {value}
          </h3>
        </div>
        
        <div className="mt-6 flex items-center gap-3">
          <span className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-extrabold shadow-sm ${
            variant === 'neon' ? 'bg-accent text-primary' : 'bg-primary text-accent'
          }`}>
            <TrendingUp size={12} />
            {change}
          </span>
          <span className={`text-[10px] font-bold ${variant === 'dark' ? 'text-gray-400' : 'text-text-secondary'}`}>
            {changeLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
