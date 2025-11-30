import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Highlights />
      
      <section className="section bg-secondary text-center">
        <div className="container">
          <h2 className="section-title">{t.packages.title}</h2>
          <p className="mb-8 text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            {t.hero.subtitle}
          </p>
          <Link to="/services" className="btn btn-primary">
            {t.hero.ctaPrimary} <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
