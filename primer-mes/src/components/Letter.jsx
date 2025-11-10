import React from 'react';

export default function Letter() {
  return (
    <section className="letter-section" aria-labelledby="love-letter-title">
      <div className="letter-paper">
        <h2 id="love-letter-title" className="letter-title">Abril Lesiuk</h2>

        <p className="letter-paragraph">
          Gordita, me la pusiste dificil. Te gustan muchos las cartas y justo particularmente
          yo no soy la persona con mejor letra, pero siempre se le puede dar la vuelta a todo. Esta vez te traigo a mi mundo, donde empezo todo, en esa charla de que es un servidor(🤓), en ese barcito donde probe posiblemente los peores tragos de mi vida, pero que sin saberlo, estaba siendo participe de algo que cambiaria mi vida por completo.
        </p>

        <p className="letter-paragraph">
          Algo que me alegra, algo que me hace reir, algo que me tiene en videollamada 2 horas antes de irme a dormir todas las noches, algo que me emociona, algo que me completa.
        </p>

        <p className="letter-paragraph">
          Algo, que me hizo viajar a San Juan para que, en frente de ese hermoso dique y con lagrimas en los ojos, te pidiera ser mi novia.
        </p>

        <p className="letter-paragraph">
          Ese algo hoy cumple 1 mes y espero, con todo mi corazon, que cumpla muchos mas. 
        </p>

        <footer className="letter-signature">
          Con una inumerable cantidad de amor,<br />
          Valen
        </footer>
      </div>
    </section>
  );
}
