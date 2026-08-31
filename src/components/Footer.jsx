import React from 'react';

export default function Footer({ onOpenRules }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img 
            src="/imagenes/Logo viraxis.png" 
            alt="Viraxis Logo" 
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </div>
        
        <p className="footer-text" style={{ maxWidth: '500px', margin: '0 auto', opacity: 0.7 }}>
          Un juego donde cada decisión cuenta. Coordina tus movimientos en el laboratorio seguro o expande la plaga desde la biozona para sabotear la cura.
        </p>

        <div style={{ marginTop: '8px' }}>
          <button 
            onClick={onOpenRules}
            style={{
              background: 'rgba(166, 23, 35, 0.1)',
              border: '1px solid rgba(166, 23, 35, 0.3)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-title)',
              fontSize: '0.85rem',
              fontWeight: '600',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="footer-rules-btn"
          >
            ¿No sabes cómo jugar? Ver Reglas
          </button>
        </div>

        <div className="footer-text" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', width: '100%', fontSize: '0.8rem', marginTop: '12px' }}>
          &copy; {currentYear} Viraxis. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
