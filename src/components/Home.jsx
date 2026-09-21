import React from 'react';
import { Play } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <div className="container home-page animate-fade-in">
      <div className="hero-section">
        <div className="hero-glow"></div>
        <p className="hero-subtitle animate-float">Juego de Mesa Táctico</p>
        <h1 className="hero-title">
          BIENVENIDO A <span className="hero-brand">VIRAXIS</span>
        </h1>
        <p className="hero-desc">
          Un tenso escenario hospitalario donde la estrategia, la cooperación y el contagio chocan. ¿Completarás la cura o propagarás la epidemia?
        </p>
        <button className="btn-primary" onClick={onStart}>
          <Play size={18} fill="currentColor" />
          Preparar Partida
        </button>
      </div>
    </div>
  );
}
