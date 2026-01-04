
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio/Portfolio';
import ExecutiveSummary from './components/ExecutiveSummary/ExecutiveSummary';
import Reports from './components/Reports/Reports';
import Support from './components/Support/Support';

const Layout: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => {
  return (
    <div className="flex h-screen bg-[#fcfcfc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout title="Panel de Control"><Dashboard /></Layout>} />
        <Route path="/portfolio" element={<Layout title="Mi Portafolio"><Portfolio /></Layout>} />
        <Route path="/summary" element={<Layout title="Resumen Ejecutivo"><ExecutiveSummary /></Layout>} />
        <Route path="/reports" element={<Layout title="Reportes Administrativos"><Reports /></Layout>} />
        <Route path="/support" element={<Layout title="Soporte y Ayuda"><Support /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
