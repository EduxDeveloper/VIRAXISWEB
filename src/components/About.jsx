import React from 'react';

export default function About() {
  return (
    <div className="container about-section animate-fade-in">
      <header className="about-header">
        <p className="about-kicker">Historia</p>
        <h2 className="about-title">Sobre Viraxis</h2>
      </header>

      <section className="about-block" aria-labelledby="origen-title">
        <h3 id="origen-title" className="about-label">Origen de Viraxis</h3>

        <div className="etymology" aria-hidden="true">
          <div className="etymology-item">
            <span className="etymology-word virus">Virus</span>
            <span className="etymology-hint">el contagio</span>
          </div>
          <span className="etymology-join">+</span>
          <div className="etymology-item etymology-item-end">
            <span className="etymology-word axis">Axis</span>
            <span className="etymology-hint">el eje</span>
          </div>
        </div>

        <p>
          El nombre surge de la combinación de las palabras <strong>Virus</strong> y <strong>Axis</strong>.
          El término <em>virus</em> hace referencia al agente infeccioso que desencadena la historia.
          Por su parte, <em>axis</em> es un término biológico para denominar una estructura que representa un punto de origen o eje en el cuerpo.
        </p>
        <p>
          La unión de ambos conceptos simboliza el nacimiento del virus que provoca la infección y transforma a las personas, convirtiéndose en el eje central de la narrativa.
        </p>
      </section>

      <hr className="about-rule" />

      <section className="about-block" aria-labelledby="objetivo-title">
        <h3 id="objetivo-title" className="about-label">Objetivo y temática</h3>
        <p>
          Viraxis es un juego de mesa de supervivencia ambientado en un escenario hospitalario.
          Dos equipos compiten por alcanzar sus metas en una carrera contrarreloj donde la estrategia y la tensión están siempre presentes.
        </p>

        <div className="faction-stack">
          <article className="faction-item">
            <h4 className="faction-name">Supervivientes</h4>
            <p>
              Reunir materiales en habitaciones y llevarlos al laboratorio para sintetizar la cura.
            </p>
          </article>
          <article className="faction-item">
            <h4 className="faction-name infected">Infectados</h4>
            <p>
              Contagiar a los supervivientes, sabotear materiales y llevarlos a su guarida.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
