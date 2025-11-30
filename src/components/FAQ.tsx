import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">{t.faq.title}</h2>
        
        <div className="faq-list">
          {t.faq.items.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.q}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background-color: var(--card-bg);
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
        }

        .faq-question:hover {
          background-color: var(--bg-secondary);
        }

        .faq-answer {
          height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
        }

        .faq-answer.open {
          height: auto;
          border-top: 1px solid var(--border-color);
        }

        .faq-answer-content {
          padding: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
