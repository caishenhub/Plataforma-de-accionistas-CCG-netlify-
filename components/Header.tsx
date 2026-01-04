
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Bell, 
  Menu, 
  History,
  TrendingUp,
  Wallet,
  Clock,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { MOCK_TRANSACTIONS, MOCK_WATCHLIST } from '../constants';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

interface DashboardNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'transaction' | 'watchlist' | 'balance';
  icon: React.ReactNode;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dashboardNotifications = useMemo(() => {
    const notifications: DashboardNotification[] = [];

    if (MOCK_TRANSACTIONS.length > 0) {
      const latestTx = MOCK_TRANSACTIONS[0];
      notifications.push({
        id: 'ntx-1',
        title: 'Transacción Confirmada',
        description: `${latestTx.description}: ${latestTx.amount > 0 ? '+' : ''}${latestTx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`,
        time: latestTx.date,
        type: 'transaction',
        icon: <History size={16} className="text-green-500" />,
        path: '/'
      });
    }

    const topMover = MOCK_WATCHLIST.reduce((prev, current) => {
      return parseFloat(current.change) > parseFloat(prev.change) ? current : prev;
    }, MOCK_WATCHLIST[0]);

    if (topMover) {
      notifications.push({
        id: 'nw-1',
        title: 'Alerta de Mercado',
        description: `${topMover.name} (${topMover.symbol}) registra un movimiento de ${topMover.change}`,
        time: 'Hace 5 min',
        type: 'watchlist',
        icon: <TrendingUp size={16} className="text-primary" />,
        path: '/'
      });
    }

    notifications.push({
      id: 'nb-1',
      title: 'Balance Actualizado',
      description: 'El portafolio global ha sido recalculado con los cierres de mercado más recientes.',
      time: 'Hoy, 08:00 AM',
      type: 'balance',
      icon: <Wallet size={16} className="text-accent" />,
      path: '/'
    });

    return notifications;
  }, []);

  return (
    <header className="h-20 flex-shrink-0 border-b border-surface-border bg-white/80 backdrop-blur-xl sticky top-0 z-20 flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Menu className="size-6 text-accent" />
        </button>
        <div>
          <h2 className="text-accent text-lg font-extrabold tracking-tight">{title}</h2>
        </div>
      </div>

      <div className="flex items-center">
        {/* Notification Bell Section */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2.5 rounded-xl transition-all ${showNotifications ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
          >
            <Bell className="size-5" />
            {dashboardNotifications.length > 0 && (
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute top-full right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl border border-surface-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-surface-subtle/50">
                <h3 className="text-[10px] font-black text-accent uppercase tracking-widest">Actividad Reciente</h3>
                <span className="bg-primary text-accent text-[9px] font-black px-2 py-0.5 rounded-full">
                  {dashboardNotifications.length} Alertas
                </span>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {dashboardNotifications.map((notif) => (
                  <button 
                    key={notif.id}
                    onClick={() => {
                      navigate(notif.path);
                      setShowNotifications(false);
                    }}
                    className="w-full p-4 flex gap-4 hover:bg-surface-subtle transition-colors border-b border-gray-50 last:border-0 text-left"
                  >
                    <div className="mt-1 shrink-0 bg-white p-2 rounded-xl shadow-sm border border-gray-50">
                      {notif.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-black text-accent leading-tight">{notif.title}</p>
                      <p className="text-[10px] text-text-muted mt-0.5 line-clamp-2 font-medium">{notif.description}</p>
                      <div className="flex items-center gap-1 mt-2 text-text-muted">
                        <Clock size={10} />
                        <span className="text-[9px] font-bold uppercase tracking-tighter">{notif.time}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => {
                  navigate('/');
                  setShowNotifications(false);
                }}
                className="w-full py-4 text-center text-[10px] font-black text-text-muted hover:text-accent transition-colors uppercase tracking-widest bg-gray-50/50"
              >
                Ver todas las transacciones
              </button>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="h-10 w-px bg-surface-border mx-6"></div>

        {/* Corporate Identity Section (Requested Design) */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-sm font-black text-accent tracking-tight">Portal de Accionistas</span>
            <span className="text-[11px] font-bold text-text-secondary">Vista Consolidada</span>
          </div>
          <div className="size-10 rounded-full bg-surface-subtle border border-surface-border flex items-center justify-center text-text-secondary/60">
            <Building2 size={20} strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
