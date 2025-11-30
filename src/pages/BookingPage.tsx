import Booking from '../components/Booking';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

export default function BookingPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-28">
      <SEO 
        title={t.seo.booking.title} 
        description={t.seo.booking.description} 
      />
      <Booking />
      <FAQ />
    </div>
  );
}
