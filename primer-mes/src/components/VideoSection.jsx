import React, { useState } from 'react';

export default function VideoSection() {
  const [fallen, setFallen] = useState(false);

  const handleFall = () => {
    if (!fallen) setFallen(true);
  };

  return (
    <section className="romantic-card video-section" aria-labelledby="love-video-title">
      <h2 id="love-video-title" className="section-title">Video para mi Labubu</h2>
      

      <div className="video-frame">
        <video className="video-player" controls playsInline>
          <source src="/IMG_5796.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="section-subtitle">(a donde señalaba xd)</p>

      {/* 🐶 Caja con imagen que se cae */}
      <div className="fall-box" onClick={handleFall}>
        <img
          src="/labubu.jpeg"
          alt="Imagen superior"
          className={`fall-top ${fallen ? 'is-fallen' : ''}`}
        />
        <img
          src="/cantidad.jpeg"
          alt="Imagen inferior"
          className="fall-bottom"
        />
      </div>
      <p className="section-subtitle">Cliquear a John Charles luego del video</p>
    </section>
  );
}
