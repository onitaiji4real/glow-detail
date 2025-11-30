import { DollarSign, Hand, ShieldCheck, Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Highlights() {
  const { t } = useLanguage();

  const icons = [DollarSign, Hand, ShieldCheck, Calendar];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t.highlights.title}</h2>
        
        <div className="highlights-grid">
          {t.highlights.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  <Icon size={32} />
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .highlight-card {
          text-align: center;
          padding: 2rem;
          background-color: var(--card-bg);
          border-radius: 1rem;
          border: 1px solid var(--border-color);
        }

        .highlight-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background-color: var(--bg-secondary);
          color: var(--accent-primary);
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }

        .highlight-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .highlight-desc {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
