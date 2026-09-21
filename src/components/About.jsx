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
          Todo comenzó en un hospital donde se desarrollaba un proyecto experimental para crear un tratamiento capaz de combatir enfermedades resistentes. El proyecto fue identificado como <strong>VX-13</strong>. Al principio, los resultados parecían prometedores, pero algo salió mal durante las pruebas.
        </p>
        <p>
          La infección comenzó a propagarse dentro del hospital y, en poco tiempo, las instalaciones quedaron completamente aisladas. Los médicos intentaron contenerla pero fue en vano, mientras los supervivientes buscan los materiales necesarios para desarrollar una cura. Sin embargo, el VX-13 no solo se extendía: también había convertido el hospital en un lugar cada vez más peligroso.
        </p>
        <p>
          Ahora, el hospital permanece infectado y dividido entre zonas seguras, áreas contaminadas y habitaciones donde todavía quedan recursos esenciales. Los supervivientes deberán trabajar juntos para reunir los componentes de la cura antes de que la infección se propague por completo.
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
