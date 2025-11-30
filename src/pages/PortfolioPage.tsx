import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function PortfolioPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-28">
      <SEO 
        title={t.seo.portfolio.title} 
        description={t.seo.portfolio.description} 
      />
      <Portfolio />
    </div>
  );
}
