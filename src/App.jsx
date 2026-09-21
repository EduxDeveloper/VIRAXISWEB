import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import About from './components/About';
import Players from './components/Players';
import RulesModal from './components/RulesModal';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const goTo = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const openRules = () => {
    setMenuOpen(false);
    setIsRulesOpen(true);
  };

  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="header">
        <div className="container header-container">
          <div className="logo-link" onClick={() => goTo('home')}>
            <img
              src="/imagenes/logoPaginaNuevo.png"
              alt="Viraxis Logo"
              className="logo-img-small"
            />
          </div>

          <button
            type="button"
            className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <nav
        id="mobile-nav"
        className={`nav-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <p className="nav-drawer-label">Menú</p>
        <button
          className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => goTo('home')}
        >
          Inicio
        </button>
        <button
          className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => goTo('about')}
        >
          El juego
        </button>
        <button
          className={`nav-btn ${activeTab === 'players' ? 'active' : ''}`}
          onClick={() => goTo('players')}
        >
          Jugadores
        </button>
        <button className="nav-btn" onClick={openRules}>
          Reglas
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'home' && (
          <Home onStart={() => setActiveTab('players')} />
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'players' && <Players />}
      </main>

      <Footer onOpenRules={openRules} />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </div>
  );
}
