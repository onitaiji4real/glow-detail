import Process from '../components/Process';
import Packages from '../components/Packages';
import ComparisonTable from '../components/ComparisonTable';
import AddOns from '../components/AddOns';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="pt-28">
      <SEO 
        title={t.seo.services.title} 
        description={t.seo.services.description} 
      />
      <Process />
      <Packages />
      <ComparisonTable />
      <AddOns />
    </div>
  );
}
