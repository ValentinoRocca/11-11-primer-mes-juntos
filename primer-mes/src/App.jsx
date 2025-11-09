import React from 'react';
import Title from './components/Title.jsx';
import Letter from './components/Letter.jsx';
import VideoSection from './components/VideoSection.jsx';
import RevealImage from './components/RevealImage.jsx';

function App() {
  return (
    <>
      
      

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
