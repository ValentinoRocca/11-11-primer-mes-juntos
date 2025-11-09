import React from 'react';

export default function VideoSection() {
  return (
    <section className="romantic-card video-section" aria-labelledby="love-video-title">
      <h2 id="love-video-title" className="section-title">Un mensaje desde mi corazón</h2>
      <p className="section-subtitle">Dale play para ver lo mucho que significas para mí</p>

      <div className="video-frame">
        {/* Reemplaza la ruta del video por tu archivo dentro de public/ */}
        <video className="video-player" controls playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  );
}
