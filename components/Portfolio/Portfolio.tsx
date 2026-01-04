
import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Coins, 
  Bitcoin, 
  Globe, 
  ChevronDown, 
  PieChart as PieIcon,
  Activity,
  Zap
} from 'lucide-react';
import AssetDonutChart from './AssetDonutChart';

const ASSET_DATA = [
  { 
    id: 1, 
    name: 'Portafolio REIT Industrial', 
    sub: 'VNQ + O', 
    category: 'Inmobiliario', 
    cantidad: '4,200 Unidades', 
    valor: '$342,705.00', 
    retorno: '+22.5%',
    icon: Building2,
    color: 'bg-gray-100'
  },
  { 
    id: 2, 
    name: 'Tech Growth (NVDA, MSFT)', 
    sub: 'Acciones USA', 
    category: 'Bolsa', 
    cantidad: 'Variado', 
    valor: '$285,587.50', 
    retorno: '+35.8%',
    icon: TrendingUp,
    color: 'bg-green-100'
  },
  { 
    id: 3, 
    name: 'EUR/USD & GBP/USD', 
    sub: 'Forex Majors', 
    category: 'Divisas', 
    cantidad: '15 Lotes', 
    valor: '$228,470.00', 
    retorno: '+12.5%',
    icon: Globe,
    color: 'bg-blue-50'
  },
  { 
    id: 4, 
    name: 'XAU/USD (Oro)', 
    sub: 'Spot Gold', 
    category: 'Commodity', 
    cantidad: '65 Oz', 
    valor: '$171,352.50', 
    retorno: '+18.2%',
    icon: Coins,
    color: 'bg-yellow-50'
  },
  { 
    id: 5, 
    name: 'Bitcoin (BTC)', 
    sub: 'Cold Storage', 
    category: 'Cripto', 
    cantidad: '1.75 BTC', 
    valor: '$114,235.00', 
    retorno: '+45.0%',
    icon: Bitcoin,
    color: 'bg-blue-100'
  },
];

const SECTORS = [
  "Portafolio Global",
  "Inmobiliario",
  "Bolsa de Valores",
  "Cripto Activos",
  "Forex / Divisas"
];

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const MONTHLY_PERFORMANCE: Record<string, { value: string, percent: string }> = {
  "Enero": { value: "+$31,200", percent: "+2.85%" },
  "Febrero": { value: "+$28,450", percent: "+2.60%" },
  "Marzo": { value: "+$35,100", percent: "+3.10%" },
  "Abril": { value: "+$40,200", percent: "+3.45%" },
  "Mayo": { value: "-$12,500", percent: "-1.10%" },
  "Junio": { value: "+$44,800", percent: "+3.90%" },
  "Julio": { value: "+$38,900", percent: "+3.30%" },
  "Agosto": { value: "+$41,200", percent: "+3.55%" },
  "Septiembre": { value: "+$33,600", percent: "+2.95%" },
  "Octubre": { value: "+$39,150", percent: "+3.40%" },
  "Noviembre": { value: "+$42,100", percent: "+3.68%" },
  "Diciembre": { value: "+$48,300", percent: "+4.25%" },
};

const Portfolio: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);
  const [selectedMonth, setSelectedMonth] = useState("Diciembre");
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  const performance = MONTHLY_PERFORMANCE[selectedMonth] || MONTHLY_PERFORMANCE["Diciembre"];

  return (
    <div className="p-10 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-accent text-4xl font-black tracking-tighter mb-2">Composición del Portafolio</h1>
        <p className="text-text-secondary font-medium">Diversificación consolidada al cierre de 2025.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left: Asset Distribution Chart */}
        <div className="xl:col-span-5 bg-white rounded-3xl border border-surface-border p-8 shadow-sm h-full flex flex-col">
          <h3 className="text-accent text-xl font-extrabold tracking-tight mb-8">Distribución de Activos</h3>
          <div className="flex-1 flex items-center justify-center min-h-[300px]">
            <AssetDonutChart />
          </div>
        </div>

        {/* Right: Summary and Table */}
        <div className="xl:col-span-7 space-y-8">
          {/* Top Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Sector Analyzed Dropdown */}
            <div className="bg-white border border-surface-border rounded-3xl p-6 shadow-sm relative">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Sector Analizado</span>
                <PieIcon size={18} className="text-primary" />
              </div>
              <div className="relative">
                <button 
                  onClick={() => setIsSectorOpen(!isSectorOpen)}
                  className="w-full flex items-center justify-between bg-surface-subtle border border-surface-border rounded-xl px-4 py-3 text-sm font-bold text-accent group hover:bg-white transition-all focus:ring-2 focus:ring-primary/20"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="size-2 bg-accent rounded-full shrink-0"></span>
                    <span className="truncate">{selectedSector}</span>
                  </div>
                  <ChevronDown size={16} className={`text-text-muted transition-transform duration-300 ${isSectorOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSectorOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-surface-border rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="max-h-48 overflow-y-auto hide-scrollbar">
                      {SECTORS.map((sector) => (
                        <button
                          key={sector}
                          onClick={() => {
                            setSelectedSector(sector);
                            setIsSectorOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm font-bold transition-colors ${
                            selectedSector === sector ? 'bg-primary text-accent' : 'text-accent hover:bg-surface-subtle'
                          }`}
                        >
                          {sector}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className="text-[10px] text-text-muted font-bold mt-2 ml-1">Selecciona para filtrar</p>
              </div>
            </div>

            {/* Performance Dropdown */}
            <div className="bg-white border border-surface-border rounded-3xl p-6 shadow-sm relative">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Rendimiento</span>
                <div className="relative">
                  <button 
                    onClick={() => setIsMonthOpen(!isMonthOpen)}
                    className="flex items-center gap-1 bg-surface-subtle px-2 py-1 rounded-lg text-[10px] font-bold text-accent border border-surface-border hover:bg-white transition-colors"
                  >
                    <span>{selectedMonth}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${isMonthOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMonthOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-surface-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="max-h-48 overflow-y-auto hide-scrollbar">
                        {MONTHS.map((month) => (
                          <button
                            key={month}
                            onClick={() => {
                              setSelectedMonth(month);
                              setIsMonthOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-[10px] font-bold transition-colors ${
                              selectedMonth === month ? 'bg-primary text-accent' : 'text-accent hover:bg-surface-subtle'
                            }`}
                          >
                            {month}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h4 className={`text-2xl font-black tracking-tighter mb-2 transition-all ${performance.value.startsWith('-') ? 'text-red-500' : 'text-accent'}`}>
                {performance.value}
              </h4>
              <div className={`flex items-center gap-1 font-bold text-xs transition-colors ${performance.percent.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                <Activity size={12} />
                <span>{performance.percent} Mensual</span>
              </div>
            </div>

            {/* Accumulated Benefit */}
            <div className="bg-white border border-surface-border rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Beneficio Acumulado</span>
                <div className="p-1.5 bg-primary rounded-lg">
                  <Zap size={14} className="text-accent fill-accent" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-accent tracking-tighter mb-2">+$485,350</h4>
              <div className="inline-flex items-center gap-1.5 bg-primary/20 text-accent px-2 py-1 rounded-lg">
                 <span className="text-[10px] font-black">↗ +58.21%</span>
                 <span className="text-[10px] font-bold text-text-secondary">Total Histórico</span>
              </div>
            </div>
          </div>

          {/* Asset Detail Table */}
          <div className="bg-white rounded-3xl border border-surface-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-surface-border">
              <h3 className="text-accent text-xl font-extrabold tracking-tight">Detalle de Activos - Cierre 2025</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-subtle text-[10px] font-black uppercase tracking-widest text-text-muted border-b border-surface-border">
                    <th className="px-6 py-4">Activo</th>
                    <th className="px-6 py-4">Categoría</th>
                    <th className="px-6 py-4">Cantidad</th>
                    <th className="px-6 py-4 text-right">Valor Actual</th>
                    <th className="px-6 py-4 text-right">Retorno</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {ASSET_DATA.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl ${asset.color} text-accent shadow-sm group-hover:scale-110 transition-transform`}>
                            <asset.icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-accent">{asset.name}</p>
                            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{asset.sub}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-surface-subtle border border-surface-border text-[10px] font-bold text-text-secondary uppercase">
                          {asset.category}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-bold text-text-secondary">{asset.cantidad}</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="text-sm font-black text-accent">{asset.valor}</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className={`text-sm font-black ${asset.retorno.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                          {asset.retorno}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
