import React from 'react';
import './NotFound.css';
import back from "../../../public/images/Activity03/hero.png"
export const NotFound = () => {
  return (
    <div className="slide-wrapper">
      <div className="slide-container">
        {/* Imagen de fondo */}
        <img 
          src={back}
          alt="Fondo de la actividad" 
          className="slide-bg" 
        />

        {/* Elemento / Actividad posicionada en % respecto al fondo */}
        <div className="activity-item item-button" style={{ top: '76%', left: '75%' }}>
          <button onClick={() => alert('¡Actividad iniciada!')}>
            Grupo de 23 objetos
          </button>
        </div>

        {/* Otra actividad o texto */}
        <div className="activity-item item-text" style={{ top: '16%', left: '26%' }}>
          <h2>Nociones Espaciales</h2>
        </div>
      </div>
    </div>
  );
};