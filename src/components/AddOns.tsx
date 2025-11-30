import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function AddOns() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('exterior');

  const filteredItems = t.addons.items.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="addons" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">{t.addons.title}</h2>
        
        <div className="tabs">
          {t.addons.categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="addons-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="card addon-card">
              <div className="addon-info">
                <h3 className="addon-name">{item.name}</h3>
                <p className="addon-desc">{item.desc}</p>
              </div>
              <div className="addon-meta">
                <span className="addon-time">{item.time}</span>
                <span className="addon-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          background-color: var(--card-bg);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          font-weight: 600;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        .tab-btn.active {
          background-color: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        .addons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .addons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .addon-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .addon-info {
          flex: 1;
        }

        .addon-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .addon-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .addon-meta {
          text-align: right;
          min-width: 80px;
        }

        .addon-time {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .addon-price {
          display: block;
          font-weight: 700;
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}
