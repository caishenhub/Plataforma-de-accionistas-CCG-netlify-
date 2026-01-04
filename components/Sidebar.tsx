
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PieChart, 
  TrendingUp, 
  FileText, 
  Headset, 
  Settings,
  ChevronRight
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Portafolio', path: '/portfolio', icon: PieChart },
    { name: 'Resumen Ejecutivo', path: '/summary', icon: TrendingUp },
    { name: 'Reportes', path: '/reports', icon: FileText },
  ];

  return (
    <aside className="w-72 flex-shrink-0 border-r border-surface-border bg-surface-light hidden lg:flex flex-col z-30 shadow-sm">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <h1 className="text-accent text-xl font-extrabold tracking-tighter">Caishen Capital Group</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto hide-scrollbar">
        {menuItems.map((item) => {
          const ActiveIcon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between group px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                active 
                  ? 'bg-primary text-accent shadow-premium' 
                  : 'text-text-secondary hover:bg-gray-50 hover:text-accent'
              }`}
            >
              <div className="flex items-center gap-4">
                <ActiveIcon className={`size-5 ${active ? 'text-accent' : 'text-text-secondary group-hover:text-accent'} transition-colors`} />
                <span className={`text-sm font-bold tracking-tight ${active ? 'text-accent' : ''}`}>
                  {item.name}
                </span>
              </div>
              <ChevronRight className={`size-4 opacity-0 group-hover:opacity-100 transition-all ${active ? 'translate-x-0 opacity-100' : '-translate-x-2'}`} />
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto space-y-4">
        <Link to="/settings" className="flex items-center gap-4 px-4 py-3 text-text-secondary hover:text-accent transition-colors">
          <Settings className="size-5" />
          <span className="text-sm font-semibold">Configuración</span>
        </Link>
        
        <div className="h-px bg-surface-border w-full"></div>

        <Link 
          to="/support"
          className="w-full flex items-center gap-3 px-4 py-4 rounded-3xl bg-primary border border-primary shadow-[0_8px_20px_rgba(206,255,4,0.25)] hover:shadow-[0_12px_24px_rgba(206,255,4,0.4)] hover:-translate-y-1 transition-all group cursor-pointer"
        >
          <div className="bg-white/80 p-2.5 rounded-full text-accent shadow-sm group-hover:bg-white transition-colors">
            <Headset size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-accent text-sm font-black leading-tight">¿Necesitas ayuda?</span>
            <span className="text-accent/70 text-xs font-bold mt-0.5">Contactar soporte</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
