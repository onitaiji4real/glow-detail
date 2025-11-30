import { Check, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function ComparisonTable() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t.comparison.title}</h2>
        
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>L1</th>
                <th>L2</th>
                <th>L3</th>
                <th>L4</th>
                <th>L5</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.features.map((feature, index) => (
                <tr key={index}>
                  <td className="feature-name">{feature.name}</td>
                  <td>{feature.l1 ? <Check className="icon-check" size={20} /> : <X className="icon-x" size={20} />}</td>
                  <td>{feature.l2 ? <Check className="icon-check" size={20} /> : <X className="icon-x" size={20} />}</td>
                  <td>{feature.l3 ? <Check className="icon-check" size={20} /> : <X className="icon-x" size={20} />}</td>
                  <td>{feature.l4 ? <Check className="icon-check" size={20} /> : <X className="icon-x" size={20} />}</td>
                  <td>{feature.l5 ? <Check className="icon-check" size={20} /> : <X className="icon-x" size={20} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .table-container {
          overflow-x: auto;
          background-color: var(--card-bg);
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        th, td {
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid var(--border-color);
        }

        th {
          background-color: var(--bg-secondary);
          font-weight: 700;
          color: var(--text-primary);
        }

        th:first-child {
          text-align: left;
          width: 30%;
          position: sticky;
          left: 0;
          background-color: var(--bg-secondary);
          z-index: 1;
        }

        td:first-child {
          text-align: left;
          font-weight: 500;
          color: var(--text-primary);
          position: sticky;
          left: 0;
          background-color: var(--card-bg);
          border-right: 1px solid var(--border-color);
        }

        .icon-check {
          color: #10b981; /* Emerald 500 */
          margin: 0 auto;
        }

        .icon-x {
          color: var(--border-color);
          margin: 0 auto;
        }

        tr:last-child td {
          border-bottom: none;
        }

        tr:hover td {
          background-color: var(--bg-secondary);
        }
      `}</style>
    </section>
  );
}
