import React from 'react';
import Title from './components/Title.jsx';
import Letter from './components/Letter.jsx';
import VideoSection from './components/VideoSection.jsx';
import RevealImage from './components/RevealImage.jsx';

function CollageBackground() {
  const images = [
    '/imagen.jpeg',
    '/imagen1.jpeg',
    '/imagen2.jpeg',
    '/imagen3.jpeg',
    '/imagen4.jpeg',
    '/imagen5.jpeg',
    '/imagen6.jpeg',
    '/imagen7.jpeg'
  ];

  // Duplicamos para que se repita verticalmente
  const repeated = [...images, ...images, ...images];

  return (
    <div className="collage-bg">
      {repeated.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      {/* 💖 Fondo de collage */}
      <CollageBackground />

      {/* 🌸 Contenido principal */}
      <div className="page">
        <header className="page-header">
          <Title />
        </header>

        <main>
          <Letter />
          <section className="final-section" aria-label="Video y foto interactiva">
            <VideoSection />
            <RevealImage />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
