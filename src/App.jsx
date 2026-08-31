import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Players from './components/Players';
import RulesModal from './components/RulesModal';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'players'
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-link" onClick={() => setActiveTab('home')}>
            <img 
              src="/imagenes/Logo viraxis.png" 
              alt="Viraxis Logo" 
              className="logo-img-small" 
            />
          </div>

          <nav className="nav-menu">
            <button 
              className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Inicio
            </button>
            <button 
              className={`nav-btn ${activeTab === 'players' ? 'active' : ''}`}
              onClick={() => setActiveTab('players')}
            >
              Jugadores
            </button>
            <button 
              className="nav-btn"
              onClick={() => setIsRulesOpen(true)}
              style={{ borderLeft: '1px solid var(--color-border)', borderRadius: '0', paddingLeft: '20px', marginLeft: '8px' }}
            >
              Reglas
            </button>
          </nav>
        </div>
      </header>

      {/* Main View Area */}
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        {activeTab === 'home' ? (
          <Home onStart={() => setActiveTab('players')} />
        ) : (
          <Players />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onOpenRules={() => setIsRulesOpen(true)} />

      {/* Rules Modal (SweetAlert-Style PopUp / Mobile slide-up Drawer) */}
      <RulesModal 
        isOpen={isRulesOpen} 
        onClose={() => setIsRulesOpen(false)} 
      />
    </div>
  );
}
