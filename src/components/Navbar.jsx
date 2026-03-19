import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NAVBAR_HEIGHT = 96;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = -Math.min(window.scrollY, NAVBAR_HEIGHT);
      if (navRef.current) {
        navRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/Horisontal logo.png" alt="JobSwiper" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/om-oss" onClick={closeMenu}>Om oss</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={closeMenu}>Kontakt oss</NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={closeMenu}>Ofte stilte spørsmål</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
