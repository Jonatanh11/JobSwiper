import './PageLayout.css';

const INSTAGRAM_URL = 'https://www.instagram.com/FYLL_INN_HER';
const TIKTOK_URL = 'https://www.tiktok.com/@FYLL_INN_HER';

export default function Kontakt() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Kontakt oss</h1>
          <p className="page-hero-subtitle">
            Har du spørsmål eller tilbakemeldinger? Vi hører gjerne fra deg!
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
          <h2 className="section-title">Kontaktinformasjon</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Ta kontakt med oss via e-post, telefon eller sosiale medier.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>E-post</h3>
                <a href="mailto:hei@jobswiper.no">j.lysheden.vogt@icloud.com</a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Telefon</h3>
                <a href="tel:+4792010250">+47 920 10 250</a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Adresse</h3>
                <p>Skogliveien 4, 3047 Drammen</p>
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '16px' }}>Sosiale medier</h2>
          <p className="section-subtitle" style={{ marginBottom: '28px' }}>Følg oss for oppdateringer om appen.</p>
          <div className="social-contact-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" fill="currentColor"/>
              </svg>
              TikTok
            </a>
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
