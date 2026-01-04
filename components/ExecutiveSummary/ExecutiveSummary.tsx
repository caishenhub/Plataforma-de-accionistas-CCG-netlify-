
import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Percent, 
  ShieldPlus, 
  BellRing, 
  Info, 
  Building2, 
  Activity, 
  Landmark,
  ChevronRight,
  BarChart3,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import EvolutionChart from './EvolutionChart';
import AssetDistributionDonut from './AssetDistributionDonut';
import { MOCK_NOTICES } from '../../constants';
import NoticeModal from './NoticeModal';
import { CorporateNotice } from '../../types';

const ExecutiveSummary: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<CorporateNotice | null>(null);

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'Urgent': return <div className="size-2 mt-2 rounded-full bg-red-600 shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>;
      case 'Success': return <div className="size-2 mt-2 rounded-full bg-green-600 shrink-0 shadow-[0_0_8px_rgba(22,163,74,0.5)]"></div>;
      default: return <div className="size-2 mt-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>;
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-text-muted text-sm font-medium mb-1">Bienvenido, Accionistas de Caishen Capital Group.</p>
          <h1 className="text-accent text-3xl font-black tracking-tighter">Resumen consolidado del panorama financiero hoy</h1>
        </div>
        <div className="flex bg-white rounded-xl p-1 border border-surface-border shadow-sm shrink-0">
          {['1D', '1W', '1M', 'YTD', 'ALL'].map((range) => (
            <button 
              key={range}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                range === '1D' ? 'bg-surface-subtle text-accent shadow-sm' : 'text-text-muted hover:text-accent'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-sm flex flex-col justify-between min-h-[160px] relative overflow-hidden group">
          <div className="absolute -right-2 top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Wallet size={120} className="text-accent" strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <p className="text-text-muted text-[10px] font-black uppercase tracking-widest">Balance Total</p>
              <Wallet size={18} className="text-primary fill-primary/10" />
            </div>
            <h4 className="text-accent text-4xl font-black tracking-tighter mt-4">$1.14M</h4>
          </div>
          <div className="relative z-10 flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1 bg-primary px-3 py-1.5 rounded-lg text-[10px] font-black shadow-sm text-accent">
              <TrendingUp size={12} />
              <span>+42.79%</span>
            </div>
            <span className="text-text-muted text-[10px] font-bold">Anual</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-sm flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-text-muted text-[10px] font-black uppercase tracking-widest">Rendimiento Global</p>
              <BarChart3 size={18} className="text-accent" />
            </div>
            <h4 className="text-accent text-4xl font-black tracking-tighter mt-4">+$342.4k</h4>
          </div>
          <div className="flex items-center gap-2 bg-green-50 w-fit px-3 py-1.5 rounded-lg text-[10px] font-black text-green-700 mt-4 border border-green-100">
            <TrendingUp size={12} />
            <span>+2.50% Mensual</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-sm flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-text-muted text-[10px] font-black uppercase tracking-widest">Retorno (ROI)</p>
              <Percent size={18} className="text-primary" />
            </div>
            <h4 className="text-accent text-4xl font-black tracking-tighter mt-4">42.79%</h4>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[10px] text-text-muted font-bold">Abs. Ganancia</span>
              <span className="text-[10px] text-accent font-black">+2.5%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-accent h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-sm flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-text-muted text-[10px] font-black uppercase tracking-widest">Fondo de Emergencia</p>
              <ShieldPlus size={18} className="text-primary" />
            </div>
            <h4 className="text-accent text-4xl font-black tracking-tighter mt-4">$45k</h4>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[10px] text-text-muted font-bold">Progreso de Meta ($50k)</span>
              <span className="text-[10px] text-accent font-black">90%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-surface-border shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-accent text-xl font-extrabold tracking-tight">Evolución de Fondos Globales</h3>
            <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-4 py-1.5 rounded-full font-bold shadow-sm">
              <TrendingUp size={14} />
              <span>+12.5% últimos 6 meses</span>
            </div>
          </div>
          <EvolutionChart />
        </div>

        <div className="bg-white p-8 rounded-3xl border border-surface-border shadow-sm flex flex-col">
          <h3 className="text-accent text-xl font-extrabold tracking-tight mb-8">Distribución de Activos del Fondo</h3>
          <AssetDistributionDonut />
          
          <div className="mt-8 space-y-4">
            {[
              { label: 'Renta Variable', value: '60%', color: 'bg-accent' },
              { label: 'Bonos Corp.', value: '25%', color: 'bg-primary' },
              { label: 'Activos Digitales', value: '15%', color: 'bg-gray-400' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className={`size-3 rounded-full ${item.color} group-hover:scale-125 transition-transform`}></div>
                  <span className="text-text-main text-sm font-bold">{item.label}</span>
                </div>
                <span className="text-accent text-sm font-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid: Corporate Notices and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <BellRing className="text-red-600 size-6" />
            <h3 className="text-red-900 text-xl font-extrabold tracking-tight">Avisos Corporativos ({MOCK_NOTICES.length})</h3>
          </div>
          <div className="space-y-4">
            {MOCK_NOTICES.slice(0, 2).map((notice) => (
              <div key={notice.id} className="bg-white p-4 rounded-2xl border border-red-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                {getNoticeIcon(notice.type)}
                <div className="flex-1">
                  <p className="text-sm font-black text-accent">{notice.title}</p>
                  <p className="text-xs text-text-muted mt-1 font-medium leading-relaxed line-clamp-2">{notice.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedNotice(notice)}
                  className="text-[10px] font-black text-red-600 hover:text-red-800 uppercase tracking-widest whitespace-nowrap"
                >
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-surface-border rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-accent text-xl font-extrabold tracking-tight">Actividad del Fondo</h3>
            <button className="text-text-muted text-sm font-bold hover:text-accent transition-colors">Ver registro completo</button>
          </div>
          <div className="space-y-1">
            {[
              { 
                title: 'Adquisición Propiedad Ind.', 
                date: 'Hoy, 08:30 AM - Sector Logístico', 
                type: 'Inversión Estratégica', 
                icon: Building2,
                color: 'text-accent'
              },
              { 
                title: 'Rebalanceo de Cartera', 
                date: 'Ayer, 16:00 PM', 
                type: 'Ajuste Trimestral', 
                icon: Activity,
                color: 'text-accent'
              },
              { 
                title: 'Pago de Dividendos Q2', 
                date: '20 Oct, 10:00 AM', 
                type: 'Ejecutado', 
                icon: Landmark,
                color: 'text-green-600'
              },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-2xl bg-surface-subtle flex items-center justify-center text-accent shadow-sm group-hover:bg-white group-hover:shadow transition-all">
                    <activity.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">{activity.title}</p>
                    <p className="text-[10px] font-bold text-text-muted mt-0.5">{activity.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-black ${activity.color}`}>{activity.type}</span>
                  <ChevronRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedNotice && (
        <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
      )}
    </div>
  );
};

export default ExecutiveSummary;
