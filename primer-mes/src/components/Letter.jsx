import React from 'react';

export default function Letter() {
  return (
    <section className="letter-section" aria-labelledby="love-letter-title">
      <div className="letter-paper">
        <h2 id="love-letter-title" className="letter-title">Mi carta para ti</h2>

        <p className="letter-paragraph">
          Querida [Nombre de tu novia],
          aquí escribe con tu propia voz todo lo que sientes. Imagina que cada línea
          es un susurro al oído, algo que sólo ella puede escuchar y atesorar.
        </p>

        <p className="letter-paragraph">
          Puedes contar algún recuerdo del mes que acaban de compartir, agradecer por
          sus risas, por los abrazos y por las aventuras que vivieron juntos. Háblale
          de cómo te hace sentir su sonrisa, lo que más admiras de ella y lo que sueñas
          para los meses que vendrán.
        </p>

        <p className="letter-paragraph">
          Termina recordándole cuánto la amas y lo especial que es para ti. Deja que este
          espacio se llene de tus palabras, tus promesas y todo ese cariño que solo tú sabes
          darle.
        </p>

        <footer className="letter-signature">
          Con amor,<br />
          [Tu nombre]
        </footer>
      </div>
    </section>
  );
}
