
export interface Asset {
  id: string;
  name: string;
  category: 'Forex' | 'Acciones' | 'Cripto' | 'Inmobiliario' | 'Algorítmico' | 'Derivados';
  quantity: string;
  currentValue: number;
  return: number;
  status: 'Abierta' | 'Cerrada' | 'Pendiente';
  symbol?: string;
}

export interface Transaction {
  id: string;
  type: 'Inyección' | 'Retiro' | 'Dividendo' | 'Transferencia';
  amount: number;
  date: string;
  status: 'Completado' | 'Pendiente' | 'Fallido';
  description: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  category: 'Mensual' | 'Trimestral' | 'Auditoría' | 'Estrategia' | 'Normativa' | 'Resumen Ejecutivo' | 'Riesgos y Mitigación';
  summary: string;
  content?: string;
}

export interface CorporateNotice {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'Urgent' | 'Info' | 'Success';
  fullContent: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  memberSince: string;
  avatarUrl: string;
}
