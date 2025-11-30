import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <Link to="/services" className="btn btn-primary">
            {t.hero.ctaPrimary}
          </Link>
          <Link to="/booking" className="btn btn-outline-light">
            {t.hero.ctaSecondary} <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          background-image: url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding-top: 70px; /* Ensure content is centered relative to viewport, not top of file */
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-outline-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
          background-color: transparent;
          border: 2px solid white;
          color: white;
          gap: 0.5rem;
        }

        .btn-outline-light:hover {
          background-color: white;
          color: black;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
