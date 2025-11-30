import { Check, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Packages() {
  const { t } = useLanguage();

  return (
    <section id="packages" className="section">
      <div className="container">
        <h2 className="section-title">{t.packages.title}</h2>
        
        <div className="packages-grid">
          {t.packages.items.map((pkg) => (
            <div key={pkg.id} className="card package-card">
              <div className="package-header">
                <span className="package-id">{pkg.id}</span>
                <h3 className="package-name">{pkg.name.split('｜')[1]}</h3>
              </div>
              
              <p className="package-tagline">{pkg.tagline}</p>
              
              <div className="package-price-box">
                <span className="package-price">{pkg.price}</span>
                <span className="package-note">{pkg.note}</span>
              </div>

              <div className="package-time">
                <Clock size={16} />
                <span>{pkg.time}</span>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="package-footer">
                <a href="#booking" className="btn btn-primary btn-block">
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .packages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .packages-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .package-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .package-header {
          margin-bottom: 1rem;
        }

        .package-id {
          display: inline-block;
          background-color: var(--bg-secondary);
          color: var(--accent-primary);
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .package-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .package-tagline {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          min-height: 3rem;
        }

        .package-price-box {
          margin-bottom: 1rem;
        }

        .package-price {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .package-note {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .package-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .package-features {
          flex: 1;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .feature-icon {
          color: var(--accent-primary);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .btn-block {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
