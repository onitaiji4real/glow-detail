import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.packages, href: '/services' },
    { name: t.nav.portfolio, href: '/portfolio' },
    { name: t.nav.faq, href: '/booking' },
  ];

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-icon">✨</span>
          {t.nav.brand}
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/booking" className="btn btn-primary btn-sm">
            {t.nav.book}
          </Link>
          
          <div className="divider"></div>

          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleLanguage} className="icon-btn" aria-label="Toggle Language">
            <Languages size={20} />
            <span className="lang-code">{lang === 'zh-TW' ? 'EN' : '中'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/booking" 
              className="btn btn-primary mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.book}
            </Link>
            
            <div className="mobile-controls">
              <button onClick={toggleTheme} className="mobile-control-btn">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button onClick={toggleLanguage} className="mobile-control-btn">
                <Languages size={20} />
                <span>{lang === 'zh-TW' ? 'English' : '中文'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background-color: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background-color: var(--bg-primary);
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${isHome && !scrolled ? 'white' : 'var(--text-primary)'};
        }

        .desktop-menu {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }
        }

        .nav-link {
          color: ${isHome && !scrolled ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)'};
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }

        .nav-link:hover {
          color: ${isHome && !scrolled ? 'white' : 'var(--accent-primary)'};
        }

        .nav-link.active {
          color: ${isHome && !scrolled ? 'white' : 'var(--accent-primary)'};
          font-weight: 700;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: ${isHome && !scrolled ? 'white' : 'var(--accent-primary)'};
          border-radius: 2px;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .divider {
          width: 1px;
          height: 24px;
          background-color: ${isHome && !scrolled ? 'rgba(255,255,255,0.3)' : 'var(--border-color)'};
        }

        .icon-btn {
          background: none;
          border: none;
          color: ${isHome && !scrolled ? 'white' : 'var(--text-secondary)'};
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: color 0.2s;
        }

        .icon-btn:hover {
          color: ${isHome && !scrolled ? 'var(--accent-primary)' : 'var(--text-primary)'};
          background-color: ${isHome && !scrolled ? 'rgba(255,255,255,0.1)' : 'var(--bg-secondary)'};
        }

        .lang-code {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: ${isHome && !scrolled ? 'white' : 'var(--text-primary)'};
        }

        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-primary);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          border-top: 1px solid var(--border-color);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-link {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .mobile-link.active {
          color: var(--accent-primary);
        }

        .mobile-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .mobile-controls {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-control-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1rem;
          padding: 0.5rem 0;
        }
      `}</style>
    </nav>
  );
}
