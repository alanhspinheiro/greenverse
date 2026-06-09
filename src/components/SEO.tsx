import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = 'gestão de fornecedores, engenharia industrial, facilities, ESG, compliance, mercado livre de energia, adequação NR-13, gestão de resíduos, terceirização de serviços, instalações elétricas, obras civis, logística corporativa, Greenverse, governança corporativa, porto seco',
  ogType = 'website'
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    const formattedTitle = title.includes('Greenverse') ? title : `${title} | Greenverse`;
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const updateOrCreateMeta = (nameAttr: string, valueAttr: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update meta description and keywords
    updateOrCreateMeta('name', 'description', description);
    updateOrCreateMeta('name', 'keywords', keywords);

    // 3. Update Open Graph tags for rich social snippets
    updateOrCreateMeta('property', 'og:title', formattedTitle);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:url', window.location.href);
    
    // 4. Update Twitter Card tags
    updateOrCreateMeta('name', 'twitter:title', formattedTitle);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');

  }, [title, description, keywords, ogType]);

  // This component doesn't render any visible UI elements
  return null;
}
