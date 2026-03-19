import { useState } from 'react';
import './PageLayout.css';

const faqs = [
  {
    question: 'Hva er JobSwiper?',
    answer:
      'JobSwiper er en app som gjør jobbsøking enklere og raskere. Du sveiper gjennom relevante jobbannonser, og viser interesse ved å svipe til høyre sviper til venstre om du ikke er interissert. Arbeidsgiver får oversikt over hvem som har vist interesse og kan velge hvem de vil kontakte videre.',
  },
  {
    question: 'Er JobSwiper gratis å bruke?',
    answer:
      'Ja! JobSwiper skal være helt gratis for jobbsøkere. Last ned appen og kom i gang på under ett minutt.',
  },
  {
    question: 'Er appen ferdig utviklet?',
    answer:
      'JobSwiper er ikke lansert enda, men vi jobber hardt for å få den ut så snart som mulig. Den vil være tilgjengelig for både iOS (App Store) og Android (Google Play), og vi lover at det blir verdt ventetiden! Følg med på sosiale medier for oppdateringer om lanseringsdato og funksjoner.',
  },
  {
    question: 'Skal appen erstatte jobbintervjuer og tradisjonelle søknadsprosesser?',
    answer:
      'Arbeidsgiver velger selv hvordan de vil gå videre med kandidater som har vist interesse. Noen vil kanskje kontakte deg direkte i appen dersom vi har en chatt-funksjon, mens andre foretrekker å gjennomføre et tradisjonelt intervju. Vår jobb er å gjøre det enklere for både jobbsøkere og arbeidsgivere å finne hverandre, uansett hvordan de velger å kommunisere videre.',
  },
  {
    question: 'Jeg er arbeidsgiver – hvilke stillinger kan jeg legge ut?',
    answer:
      'Vi ønsker å være en plattform for ungdommer som søker deltidsjobber eller praksisplasser som er tilpasset timeplanen, men vi har lyst til å åpne for flere stillingstyper i fremtiden.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Ofte stilte spørsmål</h1>
          <p className="page-hero-subtitle">
            Finner du ikke svaret du leter etter? Ta gjerne kontakt med oss.
          </p>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF6EF" />
          </svg>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <div className="container">
          <img src="/logo.png" alt="JobSwiper" className="footer-logo-small" />
          <p className="footer-copy">&copy; {new Date().getFullYear()} JobSwiper. Alle rettigheter forbeholdt.</p>
        </div>
      </footer>
    </div>
  );
}
