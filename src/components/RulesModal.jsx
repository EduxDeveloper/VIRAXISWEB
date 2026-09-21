import React from 'react';
import { X, Shield, Skull, Dices, HelpCircle, AlertTriangle, EyeOff } from 'lucide-react';

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

          {/* Section: Survivors */}
          <div className="rules-section-block survivals-block">
            <h3>
              <Shield size={18} />
              Objetivo: Supervivientes
            </h3>
            <ul className="rules-list">
              <li>
                <strong>Punto de Partida:</strong> Comienzan en el <strong>Laboratorio</strong> (marcado con la cruz).
              </li>
              <li>
                <strong>Búsqueda:</strong> Deben recorrer las habitaciones del tablero buscando materiales para fabricar la cura.
              </li>
              <li>
                <strong>Entrega Segura:</strong> Al conseguir un material, deben regresarlo al Laboratorio. El laboratorio es una zona 100% segura donde los Infectados no pueden ingresar.
              </li>
              <li>
                <strong>Penalización de Entrega:</strong> El jugador que entregue un material deberá <strong>descansar 1 turno completo</strong> sin participar, reincorporándose en el siguiente.
              </li>
            </ul>
          </div>

          {/* Section: Infected */}
          <div className="rules-section-block infected-block">
            <h3>
              <Skull size={18} />
              Objetivo: Infectados
            </h3>
            <ul className="rules-list">
              <li>
                <strong>Punto de Partida:</strong> Comienzan en la <strong>Habitación Infectada</strong> (marcada con el símbolo de biohazard).
              </li>
              <li>
                <strong>Contagio:</strong> Su fin es recorrer el tablero para infectar a todos los supervivientes antes de que completen la cura.
              </li>
              <li>
                <strong>Sabotaje:</strong> Pueden robar materiales de cura del tablero y llevarlos a su <strong>Guarida</strong>. Esto obliga a los supervivientes a adentrarse en territorio peligroso si quieren recuperarlos.
              </li>
            </ul>
          </div>

          {/* Section: Infection rules */}
          <div className="rules-section-block infected-block">
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
                  <HelpCircle size={20} color="var(--color-primary-light)" />
                </div>
                <div className="board-item-text">
                  <div className="board-item-name">Casillas de Interrogación (?)</div>
                  <div className="board-item-desc">
                    Espacios donde los jugadores pueden caer múltiples veces. Al aterrizar en ellos, deben robar una carta aleatoria que puede beneficiar o perjudicar su camino.
                  </div>
                </div>
              </div>
              
              <div className="board-item-row">
                <div className="board-item-icon">
                  <EyeOff size={20} color="var(--color-slate)" />
                </div>
                <div className="board-item-text">
                  <div className="board-item-name">Guarida Infectada</div>
                  <div className="board-item-desc">
                    El nido del virus. Zona de almacenamiento de materiales robados, altamente peligrosa y custodiada por los jugadores infectados.
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
