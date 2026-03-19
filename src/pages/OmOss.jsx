import './PageLayout.css';

export default function OmOss() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Om oss</h1>
          <p className="page-hero-subtitle">Vi er et dedikert team som ønsker å gjøre jobbsøking enklere for ungdom.</p>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF6EF" />
          </svg>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--beige)' }}>
        <div className="container">
          <div className="content-block">
            <h2 className="section-title">Vår historie</h2>
            <p className="body-text">
              JobSwiper ble grunnlagt med en enkel visjon: å gjøre jobbsøking like enkelt og intuitivt
              som å scrolle gjennom sosiale medier. Vi så at tradisjonelle jobbportaler var tungvinte,
              kjedelige og dyre — vi bestemte oss for å endre det.
              </p>
            <p className="body-text">
              Vi er en ungdomsbedrift fra Akademiet Drammen med et mål om å lage en app som gjør det enklere for ungdom å finne deltidsjobber og praksisplasser som passer deres timeplan og interesser. Samtidig vil vi øke hastigheten på rekruteringsprosessen for arbeidsgivere og gi dem tilgang til et strørre talentpool av unge jobbsøkere.
            </p>
            <p className="body-text">
              Med fokus på brukeropplevelse bygger vi en plattform som
              hjelper jobbsøkere å finne sin drømmejobb raskere enn noensinne.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Jonatan Herman Lysheden-Vogt</h3>
              <span className="team-role">Daglig leder</span>
            </div>
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Even Hjelmeseth</h3>
              <span className="team-role">Produktutvikler</span>
            </div>
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Oliver Ødegaard</h3>
              <span className="team-role">Økonomi ansvarlig</span>
            </div>
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Parmis Barbari</h3>
              <span className="team-role">Nestleder</span>
            </div>
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Melissa Gökmen</h3>
              <span className="team-role">Markedsføringsansvarlig</span>
            </div>
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
