import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Booking() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="section">
      <div className="container">
        <h2 className="section-title">{t.booking.title}</h2>
        
        <div className="booking-grid">
          <div className="booking-form-wrapper card">
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>{t.booking.form.name}</label>
                <input type="text" required className="form-input" />
              </div>
              
              <div className="form-group">
                <label>{t.booking.form.phone}</label>
                <input type="tel" required className="form-input" />
              </div>

              <div className="form-group">
                <label>{t.booking.form.carModel}</label>
                <input type="text" required className="form-input" placeholder="e.g. 2023 Toyota RAV4" />
              </div>

              <div className="form-group">
                <label>{t.booking.form.service}</label>
                <select className="form-input">
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                  <option value="L4">L4</option>
                  <option value="L5">L5</option>
                  <option value="other">Other / Add-ons</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t.booking.form.date}</label>
                <input type="datetime-local" required className="form-input" />
              </div>

              <div className="form-group full-width">
                <label>{t.booking.form.note}</label>
                <textarea className="form-input" rows={3}></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width">
                {t.booking.form.submit}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card card">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>{t.booking.contact.address}</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3>Hours</h3>
                  <p>{t.booking.contact.hours}</p>
                </div>
              </div>

              <a href="#" className="line-btn btn">
                <MessageCircle size={24} />
                {t.booking.contact.line}
              </a>
            </div>

            <div className="map-placeholder">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .booking-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .booking-grid {
            grid-template-columns: 3fr 2fr;
          }
        }

        .booking-form {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .booking-form {
            grid-template-columns: 1fr 1fr;
          }
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .form-input {
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .info-item h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .info-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .line-btn {
          background-color: #06c755;
          color: white;
          width: 100%;
          gap: 0.5rem;
        }

        .line-btn:hover {
          background-color: #05b34c;
        }

        .map-placeholder {
          background-color: var(--bg-secondary);
          height: 250px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
