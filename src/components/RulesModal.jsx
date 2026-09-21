import React from 'react';
import { X, Shield, Skull, Dices, HelpCircle, AlertTriangle } from 'lucide-react';

export default function RulesModal({ isOpen, onClose }) {
  // Prevent closing when clicking inside the modal content
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`rules-overlay ${isOpen ? 'open' : ''}`} 
      onClick={onClose}
    >
      <div className="rules-modal" onClick={handleModalClick}>
        <div className="rules-modal-header">
          <div className="rules-modal-title">
            <HelpCircle size={24} color="var(--color-primary-light)" />
            <h2>¿Cómo jugar Viraxis?</h2>
          </div>
          <button className="btn-close" onClick={onClose} aria-label="Cerrar modal">
            <X size={24} />
          </button>
        </div>

        <div className="rules-modal-body">
          {/* Section: Setup & Turn start */}
          <div className="rules-section-block">
            <h3>
              <Dices size={18} />
              Inicio y Movimientos
            </h3>
            <ul className="rules-list">
              <li>
                <strong>Asignación:</strong> Introduce los nombres de los jugadores en esta web. La app asignará al azar los equipos (Superviviente o Infectado).
              </li>
              <li>
                <strong>Primer Turno:</strong> Todos lanzan el dado. El equipo con el valor más alto inicia la partida, lanzando una vez más para moverse.
              </li>
              <li>
                <strong>Desplazamiento:</strong> Cada jugador de cada equipo se moverá por el tablero según el número obtenido en su tirada de dado.
              </li>
            </ul>
          </div>

          {/* Section: Objectives */}
          <div className="rules-section-block">
            <h3>
              <Shield size={18} />
              Objetivos del juego
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>
              Tienes dos grandes objetivos que deberás cumplir a lo largo de la partida para lograr ganar.
            </p>
            <ul className="rules-list">
              <li>
                <strong>Supervivientes:</strong> Recorrer el tablero para recolectar los diferentes materiales y entregarlos al laboratorio.
              </li>
              <li>
                <strong>Infectados:</strong> Contagiar a los supervivientes y sabotearlos tomando materiales del tablero para llevarlos a la Zona Cero.
              </li>
            </ul>
          </div>

          {/* Section: Infection rules */}
          <div className="rules-section-block infection-block">
            <h3>
              <AlertTriangle size={18} />
              Reglas de Infección
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
              El contagio de un superviviente no es instantáneo, ocurre de forma progresiva en 3 fases críticas:
            </p>
            <div className="phases-grid">
              <div className="phase-card active-phase">
                <div className="phase-num">Fase 1</div>
                <div className="phase-desc">Levemente infectado. Se le resta <strong>1 casilla</strong> al total de su dado en cada turno.</div>
              </div>
              <div className="phase-card active-phase">
                <div className="phase-num">Fase 2</div>
                <div className="phase-desc">Contagio avanzado. Se le restan <strong>2 casillas</strong> al total de su dado en cada turno.</div>
              </div>
              <div className="phase-card active-phase">
                <div className="phase-num">Fase 3</div>
                <div className="phase-desc">Infección total. El jugador muta y pasa a ser <strong>aliado definitivo de los Infectados</strong>.</div>
              </div>
            </div>
          </div>

          {/* Section: Board elements */}
          <div className="rules-section-block">
            <h3>Tablero y Eventos</h3>
            <div className="board-items">
              <div className="board-item-row">
                <div className="board-item-icon">
                  <Shield size={20} color="var(--color-ice)" />
                </div>
                <div className="board-item-text">
                  <div className="board-item-name">Laboratorio</div>
                  <div className="board-item-desc">
                    Habitación donde los supervivientes inician la partida, siendo el punto de entrega de los materiales (los infectados no podrán entrar).
                  </div>
                </div>
              </div>

              <div className="board-item-row">
                <div className="board-item-icon">
                  <Skull size={20} color="var(--color-steel)" />
                </div>
                <div className="board-item-text">
                  <div className="board-item-name">Zona Cero</div>
                  <div className="board-item-desc">
                    Habitación donde los infectados inician la partida, donde a la hora de sabotear, los materiales se resguardarán en este lugar (los supervivientes sí podrán entrar).
                  </div>
                </div>
              </div>

              <div className="board-item-row">
                <div className="board-item-icon">
                  <HelpCircle size={20} color="var(--color-aqua)" />
                </div>
                <div className="board-item-text">
                  <div className="board-item-name">Casilla de evento</div>
                  <div className="board-item-desc">
                    Al caer en esta casilla toma una carta que puede ser para beneficio o pérdida.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rules-modal-footer">
          <button 
            className="btn-primary" 
            onClick={onClose}
            style={{ padding: '10px 24px', fontSize: '0.9rem' }}
          >
            Entendido, ¡a jugar!
          </button>
        </div>
      </div>
    </div>
  );
}
