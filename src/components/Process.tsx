import { CalendarCheck, Car, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Process() {
  const { t } = useLanguage();

  const icons = [CalendarCheck, Car, CheckCircle2, MessageSquare];

  return (
    <section id="process" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">{t.process.title}</h2>
        
        <div className="process-grid">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="process-card">
                <div className="process-icon-wrapper">
                  <Icon size={32} className="process-icon" />
                  <span className="process-number">{index + 1}</span>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: var(--text-primary);
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .process-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
        }

        .process-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          background-color: var(--card-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .process-icon {
          color: var(--accent-primary);
        }

        .process-number {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background-color: var(--accent-primary);
          color: white;
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .process-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
