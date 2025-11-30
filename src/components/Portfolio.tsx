import { Instagram } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title mb-0">{t.portfolio.title}</h2>
          <p className="portfolio-subtitle">{t.portfolio.subtitle}</p>
          <a 
            href={`https://instagram.com/${t.portfolio.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ig-link"
          >
            <Instagram size={20} />
            {t.portfolio.instagram}
          </a>
        </div>
        
        <div className="portfolio-grid">
          {t.portfolio.items.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .mb-0 {
          margin-bottom: 0.5rem;
        }

        .portfolio-subtitle {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .ig-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #E1306C;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .ig-link:hover {
          opacity: 0.8;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .portfolio-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
        }

        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-item:hover img {
          transform: scale(1.05);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-overlay span {
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          text-align: center;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
}
