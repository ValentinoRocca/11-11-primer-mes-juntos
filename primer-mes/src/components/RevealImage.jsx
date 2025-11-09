import React from 'react';

export default function RevealImage() {
  return (
    <div className="reveal-container">
      {/* Imagen frontal (ej: foto de tu novia) */}
      <img src="/novia.jpg" alt="Tu Novia" className="top-image" />
      {/* Imagen de fondo oculta (ej: sorpresa) */}
      <img src="/sorpresa.jpg" alt="Sorpresa" className="bottom-image" />
    </div>
  );
}
