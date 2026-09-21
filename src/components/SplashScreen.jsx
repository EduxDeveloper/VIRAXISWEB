import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinished }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.2 seconds, then trigger fade-out animation
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2200);

    // After fade-out animation completes (1.2 seconds in CSS), unmount the splash screen
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 3400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className={`splash-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-logo-container">
        <img 
          src="/imagenes/logoPaginaNuevo.png" 
          alt="Viraxis Logo" 
          className="splash-logo" 
        />
      </div>
      <div className="splash-loader">
        <div className="splash-loader-bar"></div>
      </div>
      <p style={{ marginTop: '16px', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-steel)', fontWeight: '600' }}>
        Cargando Infección...
      </p>
    </div>
  );
}
