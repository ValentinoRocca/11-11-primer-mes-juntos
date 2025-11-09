import React from 'react';

export default function VideoSection() {
  return (
    <div className="video-container">
      {/* Video con controles. Reemplaza "video.mp4" con el nombre de tu archivo de video en public/ */}
      <video controls width="320">
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
