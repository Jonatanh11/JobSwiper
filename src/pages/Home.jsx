import { Link } from 'react-router-dom';
import './Home.css';

const INSTAGRAM_URL = 'https://www.instagram.com/jobswiperub?igsh=eXpjemRieXMzMW5m&utm_source=qr';
const TIKTOK_URL = 'https://www.tiktok.com/@jobswiperub?_r=1&_t=ZN-94ogT66Wapu';

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Din neste jobb er ett sveip unna</span>
            <h1 className="hero-title">
              Finn drømmejobben<br />
              med <span className="highlight">JobSwiper</span>
            </h1>
            <p className="hero-subtitle">
              Sveip deg frem til relevante jobber, send søknad på sekunder og
              koble deg til arbeidsgivere som faktisk passer deg. Vi jobber med utvikling av appen nå, så følg med for lansering i nær fremtid!
            </p>
            <div className="hero-actions">
              <a href="#last-ned" className="btn-primary">Stay tuned for appen</a>
              <Link to="/om-oss" className="btn-secondary">Les mer om oss</Link>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF6EF" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section" id="last-ned">
        <div className="container">
          <h2 className="section-title">Hvorfor velge JobSwiper?</h2>
          <p className="section-subtitle">
            Vi gjør jobbsøking enkelt, raskt og morsomt — akkurat slik det skal være.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍🎓</div>
              <h3>For skoleelever</h3>
              <p>Finne jobber som er tilpasset timeplanen din og passer dine ferdigheter og preferanser.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Søk på sekunder</h3>
              <p>Send en søknad og vis interesse med ett sveip — ingen lange skjemaer.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Effektiviser rekrutteringsprosessen</h3>
              <p>Publiser ledige stillinger og nå ut til relevante kandidater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social media */}
      <section className="section social-section">
        <div className="container social-container">
          <h2 className="section-title">Følg oss</h2>
          <p className="section-subtitle">Hold deg oppdatert på nyheter, tips og inspirasjon.</p>
          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" fill="currentColor"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <img src="/logo.png" alt="JobSwiper" className="footer-logo" />
          <div className="footer-social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} JobSwiper. Alle rettigheter forbeholdt.</p>
        </div>
      </footer>
    </div>
  );
}
