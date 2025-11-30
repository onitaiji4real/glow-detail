import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
  const { lang } = useLanguage();
  const siteUrl = 'https://www.glowdetail.com';
  const defaultImage = 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  const ogImage = image || defaultImage;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
