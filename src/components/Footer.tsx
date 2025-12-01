import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-icon">✨</span>
            <span className="brand-name">{t.nav.brand}</span>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} {t.nav.brand}. All rights reserved.
          </p>
          <div className="attribution">
            Designed & Operated by <a href="#" className="attribution-link">維度立方科技 Dimension Cube Tech</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: 3rem 0;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .attribution {
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.8;
          margin-top: 0.5rem;
        }

        .attribution-link {
          color: var(--text-secondary);
          text-decoration: none;
          border-bottom: 1px dotted var(--text-secondary);
          transition: color 0.2s;
        }

        .attribution-link:hover {
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }
      `}</style>
    </footer>
  );
}
