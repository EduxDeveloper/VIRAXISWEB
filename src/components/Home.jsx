import React from 'react';
import { BookOpen, ShieldAlert, Skull, Syringe, Sparkles, Play } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <div className="container animate-fade-in">
      <div className="hero-section">
        <div className="hero-glow"></div>
        <p className="hero-subtitle animate-float">Juego de Mesa Táctico</p>
        <h1 className="hero-title">
          BIENVENIDO A <span style={{ color: 'var(--color-primary-light)' }}>VIRAXIS</span>
        </h1>
        <p className="hero-desc">
          Un tenso escenario hospitalario donde la estrategia, la cooperación y el contagio chocan. ¿Completarás la cura o propagarás la epidemia?
        </p>
        <button className="btn-primary" onClick={onStart}>
          <Play size={18} fill="currentColor" />
          Preparar Partida
        </button>
      </div>

      <div className="info-grid">
        {/* Name Origin Card */}
        <div className="info-card name-origin">
          <div className="info-card-icon">
            <BookOpen size={24} />
          </div>
          <h3>Origen de Viraxis</h3>
          <p>
            El nombre surge de la combinación de las palabras <strong>Virus</strong> y <strong>Axis</strong>. 
            El término <em>virus</em> hace referencia al agente infeccioso que desencadena la historia. 
            Por su parte, <em>axis</em> es un término biológico para denominar una estructura que representa un punto de origen o eje en el cuerpo.
          </p>
          <p style={{ marginTop: '12px' }}>
            La unión de ambos conceptos simboliza el nacimiento del virus que provoca la infección y transforma a las personas, convirtiéndose en el eje central de la narrativa.
          </p>
        </div>

        {/* Objective & Theme Card */}
        <div className="info-card theme">
          <div className="info-card-icon">
            <ShieldAlert size={24} />
          </div>
          <h3>Objetivo y Temática</h3>
          <p>
            Viraxis es un juego de mesa de supervivencia ambientado en un escenario hospitalario. 
            Dos equipos compiten por alcanzar sus metas en una carrera contrarreloj donde la estrategia y la tensión están siempre presentes.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-slate)', display: 'inline-flex' }}><Syringe size={16} /></span>
              <span style={{ fontSize: '0.85rem' }}>
                <strong>Supervivientes:</strong> Reunir materiales en habitaciones y llevarlos al laboratorio para sintetizar la cura.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--color-primary)', display: 'inline-flex' }}><Skull size={16} /></span>
              <span style={{ fontSize: '0.85rem' }}>
                <strong>Infectados:</strong> Contagiar a los supervivientes, sabotear materiales y llevarlos a su guarida.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
