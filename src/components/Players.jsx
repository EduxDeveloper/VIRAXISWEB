import React, { useState, useEffect } from 'react';
import { Users, User, Shuffle, RefreshCw, Syringe, Skull, AlertCircle } from 'lucide-react';

export default function Players() {
  const [numPlayers, setNumPlayers] = useState(4); // 4 or 6
  const [names, setNames] = useState(['', '', '', '', '', '']); // Store up to 6 names
  const [errors, setErrors] = useState('');
  const [assignments, setAssignments] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Reset assignments and clear errors if number of players changes
  useEffect(() => {
    setAssignments(null);
    setErrors('');
  }, [numPlayers]);

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
    if (errors) setErrors('');
  };

  const handleRandomNames = () => {
    const sampleNames = ['Carlos', 'Ana', 'Diego', 'Beatriz', 'Eduardo', 'Sofía'];
    const newNames = [...names];
    for (let i = 0; i < numPlayers; i++) {
      newNames[i] = sampleNames[i];
    }
    setNames(newNames);
    setAssignments(null);
    setErrors('');
  };

  const handleAssignRoles = (e) => {
    e.preventDefault();
    
    // Validate names
    const activeNames = names.slice(0, numPlayers).map(n => n.trim());
    
    // Check if any empty name
    if (activeNames.some(name => name === '')) {
      setErrors('Por favor, ingresa los nombres de todos los jugadores.');
      return;
    }

    // Check for duplicates
    const uniqueNames = new Set(activeNames);
    if (uniqueNames.size !== activeNames.length) {
      setErrors('Todos los nombres de los jugadores deben ser únicos.');
      return;
    }

    setErrors('');
    setIsGenerating(true);

    // Simulate a cool shuffling/card dealing experience for 1.2 seconds
    setTimeout(() => {
      // Shuffle names array using Fisher-Yates
      const shuffled = [...activeNames];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      // Split 50/50
      const halfSize = numPlayers / 2;
      const survivorsList = shuffled.slice(0, halfSize);
      const infectedList = shuffled.slice(halfSize);

      setAssignments({
        survivors: survivorsList,
        infected: infectedList
      });
      setIsGenerating(false);
    }, 1200);
  };

  const handleReset = () => {
    setAssignments(null);
    setErrors('');
  };

  return (
    <div className="container setup-section animate-fade-in">
      <h2 className="section-title">Asignación de Roles</h2>
      <p className="section-desc">
        Configura los nombres de los participantes y el virus seleccionará al azar quiénes serán los Supervivientes y quiénes serán los Infectados.
      </p>

      {!assignments && (
        <div className="setup-box">
          <div className="team-size-selector">
            <div 
              className={`selector-option ${numPlayers === 4 ? 'active' : ''}`}
              onClick={() => setNumPlayers(4)}
            >
              <div className="selector-title">4 Jugadores</div>
              <div className="selector-subtitle">2 Supervivientes vs 2 Infectados</div>
            </div>
            <div 
              className={`selector-option ${numPlayers === 6 ? 'active' : ''}`}
              onClick={() => setNumPlayers(6)}
            >
              <div className="selector-title">6 Jugadores</div>
              <div className="selector-subtitle">3 Supervivientes vs 3 Infectados</div>
            </div>
          </div>

          <form onSubmit={handleAssignRoles}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 className="form-title" style={{ border: 'none', margin: 0, padding: 0 }}>Nombres de Jugadores</h3>
              <button 
                type="button" 
                onClick={handleRandomNames}
                style={{ background: 'transparent', border: 'none', color: 'var(--color-slate)', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'underline' }}
              >
                Rellenar nombres de muestra
              </button>
            </div>

            <div className="players-inputs-grid">
              {Array.from({ length: numPlayers }).map((_, index) => (
                <div key={index} className="input-wrapper">
                  <label className="input-label">Jugador {index + 1}</label>
                  <input
                    type="text"
                    maxLength={15}
                    value={names[index] || ''}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    placeholder={`Nombre jugador ${index + 1}`}
                    className="input-field"
                    disabled={isGenerating}
                  />
                </div>
              ))}
            </div>

            {errors && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-red-bright)', backgroundColor: 'rgba(198, 28, 30, 0.1)', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', fontSize: '0.9rem', border: '1px solid rgba(198, 28, 30, 0.25)' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errors}</span>
              </div>
            )}

            <div className="action-bar">
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isGenerating}
                style={{ width: '220px', justifyContent: 'center' }}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Infección mutando...
                  </>
                ) : (
                  <>
                    <Shuffle size={18} />
                    Asignar Equipos
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {assignments && !isGenerating && (
        <div className="results-container">
          <div className="results-title-bar">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>
              Equipos Asignados
            </h3>
            <p className="section-desc" style={{ margin: 0 }}>
              Los roles han sido sellados. Revisa tu dispositivo y prepárate para la partida.
            </p>
          </div>

          <div className="results-teams-grid">
            {/* Survivors Column */}
            <div className="team-column survivors">
              <div className="team-header">
                <Syringe size={24} color="var(--color-survivor-glow)" />
                <h3>Supervivientes</h3>
              </div>
              <div className="players-list">
                {assignments.survivors.map((name, i) => (
                  <div key={i} className="player-result-card">
                    <div className="player-card-info">
                      <div className="player-avatar">
                        <User size={18} />
                      </div>
                      <span className="player-name-display">{name}</span>
                    </div>
                    <span className="role-badge">Cura</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infected Column */}
            <div className="team-column infected">
              <div className="team-header">
                <Skull size={24} color="var(--color-infected-glow)" />
                <h3>Infectados</h3>
              </div>
              <div className="players-list">
                {assignments.infected.map((name, i) => (
                  <div key={i} className="player-result-card">
                    <div className="player-card-info">
                      <div className="player-avatar">
                        <User size={18} />
                      </div>
                      <span className="player-name-display">{name}</span>
                    </div>
                    <span className="role-badge">Virus</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="action-bar">
            <button 
              onClick={handleReset} 
              className="btn-primary" 
              style={{ 
                background: 'transparent', 
                border: '1px solid var(--color-slate)', 
                color: 'var(--text-main)', 
                boxShadow: 'none',
                gap: '8px'
              }}
            >
              <RefreshCw size={18} />
              Reasignar Roles
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for custom loader animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
