import React from 'react';
import Title from './components/Title.jsx';
import Letter from './components/Letter.jsx';
import VideoSection from './components/VideoSection.jsx';
import RevealImage from './components/RevealImage.jsx';

function App() {
  return (
    <div>
      {/* Título de la página */}
      <header>
        <Title />
      </header>

      {/* Sección de la carta de amor */}
      <Letter />

      {/* Sección final con video e imagen interactiva */}
      <section className="final-section">
        <VideoSection />
        <RevealImage />
      </section>
    </div>
  );
}

export default App;
