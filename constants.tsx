
import { Asset, Transaction, Report, User, CorporateNotice } from './types';

export const MOCK_USER: User = {
  id: "781211135d7940f9afb34429d1e5c056",
  name: "Alex Morgan",
  role: "Miembro Premium",
  memberSince: "Enero 2024",
  avatarUrl: "https://picsum.photos/seed/alex/200/200"
};

export const MOCK_NOTICES: CorporateNotice[] = [
  {
    id: 'n1',
    title: 'Junta General de Accionistas 2026',
    date: '15 Dic, 2025',
    description: 'Convocatoria anual programada para el 15 de Enero de 2026. Asistencia requerida para quorum.',
    type: 'Urgent',
    fullContent: 'Estimados accionistas, se les convoca formalmente a la Junta General Ordinaria que tendrá lugar el próximo mes. El orden del día incluye la aprobación de las cuentas anuales de 2025 y el plan estratégico 2026-2028.'
  },
  {
    id: 'n2',
    title: 'Informe Anual Consolidado 2025',
    date: '10 Dic, 2025',
    description: 'El reporte consolidado de resultados financieros de todo el año 2025 ya está disponible.',
    type: 'Info',
    fullContent: 'El informe de cierre de año refleja un crecimiento récord del 18.2% en los activos bajo gestión durante 2025. Hemos consolidado nuestra posición en mercados emergentes y optimizado la cartera algorítmica.'
  },
  {
    id: 'n3',
    title: 'Cierre de Ejercicio Fiscal',
    date: '05 Dic, 2025',
    description: 'Instrucciones para la declaración de beneficios y dividendos del periodo 2025.',
    type: 'Success',
    fullContent: 'Se informa a los accionistas sobre el calendario de pagos de dividendos correspondientes al cuarto trimestre de 2025, los cuales se harán efectivos en los primeros 5 días de enero 2026.'
  }
];

export const MOCK_ASSETS: Asset[] = [
  { id: '1', name: 'EUR/USD Long', category: 'Forex', quantity: '2.5k Lotes', currentValue: 94390000, return: 12.5, status: 'Abierta', symbol: 'EURUSD' },
  { id: '2', name: 'S&P 500 Futures', category: 'Derivados', quantity: '5k Contratos', currentValue: 141580000, return: 8.9, status: 'Abierta', symbol: 'ES1!' },
  { id: '3', name: 'REIT Index Fund', category: 'Inmobiliario', quantity: '1.25M Unidades', currentValue: 118220000, return: 6.8, status: 'Abierta', symbol: 'VNQ' },
  { id: '4', name: 'Quantum Algo A', category: 'Algorítmico', quantity: 'Participación', currentValue: 56820000, return: 22.1, status: 'Abierta' },
  { id: '5', name: 'Apple Inc.', category: 'Acciones', quantity: '264k Acciones', currentValue: 47190000, return: 15.2, status: 'Abierta', symbol: 'AAPL' },
];

export interface WatchlistItem {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  type: 'crypto' | 'etf' | 'stock';
}

export const MOCK_WATCHLIST: WatchlistItem[] = [
  { id: 'w1', name: 'Bitcoin', symbol: 'BTC/USD', price: '$98,430.00', change: '4.2%', isPositive: true, type: 'crypto' },
  { id: 'w2', name: 'Vanguard Real Estate', symbol: 'VNQ (ETF)', price: '$92.10', change: '1.2%', isPositive: true, type: 'etf' },
  { id: 'w3', name: 'NVIDIA Corp', symbol: 'Nasdaq', price: '$142.60', change: '5.12%', isPositive: true, type: 'stock' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: 'Inyección', amount: 3200, date: 'Hoy, 09:00 AM', status: 'Completado', description: 'Renta REIT Industrial' },
  { id: 'tx2', type: 'Retiro', amount: -15000, date: 'Ayer, 4:15 PM', status: 'Completado', description: 'Compra Bitcoin' },
  { id: 'tx3', type: 'Retiro', amount: -25000, date: '12 Dic, 09:30 AM', status: 'Completado', description: 'Compra NVDA' },
];

export const MOCK_REPORTS: Report[] = [
  { 
    id: 'rep1', 
    title: 'Cierre Anual - Diciembre 2025', 
    date: '15 Dic, 2025', 
    category: 'Mensual', 
    summary: 'Análisis detallado del cierre del ejercicio fiscal 2025. El portafolio de Caishen Capital Group ha superado todos los objetivos de rentabilidad proyectados al inicio del bienio.',
    content: "Contenido detallado del reporte anual de 2025..."
  },
  { 
    id: 'rep2', 
    title: 'Auditoría de Riesgos Q4 2025', 
    date: '10 Dic, 2025', 
    category: 'Auditoría', 
    summary: 'Evaluación final de riesgos del año. Se confirma una exposición controlada y una mitigación efectiva de la volatilidad en el sector tecnológico y de criptoactivos.',
    content: "Análisis técnico de riesgos Q4..."
  },
  { 
    id: 'rep3', 
    title: 'Estrategia de Inversión 2026', 
    date: '01 Dic, 2025', 
    category: 'Estrategia', 
    summary: 'Hoja de ruta para el primer trimestre de 2026. Ajustes tácticos en derivados y expansión en el sector de energías renovables mediante fondos algorítmicos.',
    content: "Proyecciones estratégicas para el nuevo año..."
  },
  { 
    id: 'rep4', 
    title: 'Actualización Normativa Fiscal 2025', 
    date: '25 Nov, 2025', 
    category: 'Normativa', 
    summary: 'Cumplimiento de las nuevas directrices fiscales emitidas para el cierre de año y proyecciones de impacto tributario para los accionistas.',
    content: "Nuevas reglas de cumplimiento fiscal..."
  },
];
