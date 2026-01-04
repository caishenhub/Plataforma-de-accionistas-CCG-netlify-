
import React from 'react';
import { Wallet, PiggyBank, ShieldCheck, Activity, Target, ArrowUpRight, Building2, Bitcoin, LineChart, ChevronRight, CheckCircle2, TrendingUp, TrendingDown, Cpu } from 'lucide-react';
import StatCard from './StatCard';
import PerformanceChart from './Charts/PerformanceChart';
import AllocationPieChart from './Charts/AllocationPieChart';
import { MOCK_TRANSACTIONS, MOCK_WATCHLIST } from '../constants';

const Dashboard: React.FC = () => {
  // We use the real current date as requested
  const currentDate = new Intl.DateTimeFormat('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date());

  const getTransactionIcon = (description: string) => {
    if (description.includes('REIT')) return <Building2 className="size-5" />;
    if (description.includes('Bitcoin')) return <Bitcoin className="size-5" />;
    if (description.includes('NVDA')) return <LineChart className="size-5" />;
    return <ArrowUpRight className="size-5" />;
  };

  const getWatchlistIcon = (type: string, symbol: string) => {
    switch (type) {
      case 'crypto': return <div className="size-10 rounded-full bg-[#f7931a] flex items-center justify-center text-white"><Bitcoin size={20} fill="currentColor" /></div>;
      case 'etf': return <div className="size-10 rounded-full bg-[#1d1c2d] flex items-center justify-center text-white"><Building2 size={20} /></div>;
      case 'stock': return <div className="size-10 rounded-full bg-[#76b900] flex items-center justify-center text-white"><Cpu size={20} /></div>;
      default: return <div className="size-10 rounded-full bg-gray-200" />;
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-accent text-4xl font-black tracking-tighter mb-1">Bienvenido, Accionista.</h1>
        <p className="text-text-secondary font-medium">Estado del portafolio consolidado al {currentDate}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Balance Total" 
          value="$142,592,450.00" 
          change="+4.2%" 
          changeLabel="+$5.92M hoy" 
          icon={Wallet} 
          variant="light"
        />
        <StatCard 
          title="Ganancia Total 2025" 
          value="$42,450,120.00" 
          change="+18.2%" 
          changeLabel="Retorno Anual" 
          icon={PiggyBank} 
          variant="light"
        />
        <StatCard 
          title="Fondo de Reserva" 
          value="$9,850,000.00" 
          change="98.5%" 
          changeLabel="de la meta ($10M)" 
          icon={ShieldCheck} 
          variant="light"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-3xl p-8 border border-surface-border shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-surface-subtle rounded-2xl">
                <Activity className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-accent text-xl font-extrabold tracking-tight">Rendimiento Anual 2025</h3>
                <p className="text-text-muted text-xs font-medium">Comparativa histórica contra S&P 500</p>
              </div>
            </div>
          </div>
          <PerformanceChart />
        </div>

        <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-sm flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Target className="size-5 text-accent" />
            </div>
            <h3 className="text-accent text-xl font-extrabold tracking-tight">Asignación Final</h3>
          </div>
          
          <AllocationPieChart />

          <div className="mt-10 space-y-4">
            {[
              { label: 'Acciones', value: '60%', color: 'bg-primary' },
              { label: 'Cripto', value: '25%', color: 'bg-accent' },
              { label: 'Efectivo', value: '15%', color: 'bg-gray-400' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className={`size-3 rounded-full ${item.color} ring-4 ring-gray-50 group-hover:scale-125 transition-transform`}></span>
                  <span className="text-text-main text-sm font-bold">{item.label}</span>
                </div>
                <span className="text-accent text-sm font-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transacciones Recientes */}
        <div className="bg-white rounded-3xl border border-surface-border shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 flex justify-between items-center">
            <h3 className="text-accent text-xl font-extrabold tracking-tight">Transacciones Recientes</h3>
            <button className="text-text-muted text-sm font-bold hover:text-accent transition-colors">Ver Todo</button>
          </div>
          <div className="flex-1 divide-y divide-gray-100">
            {MOCK_TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-surface-subtle rounded-2xl text-accent group-hover:bg-white group-hover:shadow-sm transition-all">
                    {getTransactionIcon(tx.description)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">{tx.description}</p>
                    <p className="text-[11px] font-medium text-text-muted mt-0.5">{tx.date}</p>
                  </div>
                </div>
                
                <div className="flex-1 hidden sm:block text-center">
                  <span className="text-[11px] font-bold text-text-muted bg-surface-subtle px-3 py-1 rounded-full uppercase tracking-wider">
                    {tx.description.includes('REIT') ? 'Inmobiliario' : tx.description.includes('Bitcoin') ? 'Cripto' : 'Acciones'}
                  </span>
                </div>

                <div className="text-right">
                  <p className={`text-sm font-black ${tx.amount > 0 ? 'text-green-600' : 'text-accent'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    <span className="text-[10px] font-bold text-text-muted uppercase">Recibido</span>
                    <CheckCircle2 size={10} className="text-text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Seguimiento */}
        <div className="bg-white rounded-3xl border border-surface-border shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-accent text-xl font-extrabold tracking-tight">Lista de Seguimiento</h3>
            <button className="text-text-muted text-sm font-bold hover:text-accent transition-colors">Añadir Activo</button>
          </div>
          
          <div className="space-y-3">
            {MOCK_WATCHLIST.map((item) => (
              <div key={item.id} className="p-4 rounded-[20px] border border-gray-100 flex items-center justify-between hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-4">
                  {getWatchlistIcon(item.type, item.symbol)}
                  <div>
                    <p className="text-sm font-extrabold text-accent">{item.name}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{item.symbol}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-black text-accent">{item.price}</p>
                  <div className={`flex items-center justify-end gap-1 mt-0.5 text-[11px] font-bold ${item.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {item.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    <span>{item.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
