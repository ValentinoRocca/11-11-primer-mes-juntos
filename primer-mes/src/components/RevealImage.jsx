import React, { useState } from 'react';

export default function RevealImage() {
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isActive, setIsActive] = useState(false);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateCoords = (clientX, clientY, currentTarget) => {
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();
    const relativeX = ((clientX - rect.left) / rect.width) * 100;
    const relativeY = ((clientY - rect.top) / rect.height) * 100;

    setCoords({
      x: clamp(relativeX, 0, 100),
      y: clamp(relativeY, 0, 100),
    });
  };

  const handleMouseMove = (event) => {
    updateCoords(event.clientX, event.clientY, event.currentTarget);
  };

  const handleTouchMove = (event) => {
    if (!event.touches || !event.touches[0]) return;
    const touch = event.touches[0];
    updateCoords(touch.clientX, touch.clientY, event.currentTarget);
  };

  return (
    <section
      className="romantic-card reveal-section"
      aria-labelledby="reveal-title"
    >
      <h2 id="reveal-title" className="section-title">El rincón secreto</h2>
      <p className="section-subtitle">
        Mueve el cursor o toca suavemente para descubrir más
      </p>

      <div
        className={`reveal-card ${isActive ? 'is-active' : ''}`}
        style={{
          '--reveal-x': `${coords.x}%`,
          '--reveal-y': `${coords.y}%`,
        }}
        onMouseEnter={() => setIsActive(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={(event) => {
          setIsActive(true);
          handleTouchMove(event);
        }}
        onTouchMove={(event) => {
          event.preventDefault();
          handleTouchMove(event);
        }}
        onTouchEnd={() => setIsActive(false)}
        onTouchCancel={() => setIsActive(false)}
      >
        {/* Imagen que se ve siempre al inicio */}
        <img
          src="/ceboia.jpeg"
          alt="Tu fotografía favorita de ella"
          className="reveal-top"
        />

        {/* Imagen sorpresa que se revela con el círculo */}
        <img
          src="/perrito.png"
          alt=""
          className="reveal-bottom"
          aria-hidden="true"
        />

        <span className="reveal-hint">Desliza para descubrir</span>
      </div>
    </section>
  );
}
