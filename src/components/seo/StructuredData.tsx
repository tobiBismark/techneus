import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'Product' | 'Service';
  data?: any;
}

export const StructuredData = ({ type = 'Organization', data = {} }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      "name": "Technexus Solutions Limited",
      "description": "Leading Nigerian technology company providing premium web development, fire & safety services, and VoIP solutions.",
      "url": "https://technexussolutions.com",
      "logo": "https://technexussolutions.com/logo.png",
      "image": "https://technexussolutions.com/og-image.jpg",
      "telephone": "+234-800-TECHNEXUS",
      "email": "info@technexussolutions.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lagos Business District",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State",
        "addressCountry": "Nigeria"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "serviceArea": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "priceRange": "₦₦₦",
      "currenciesAccepted": "NGN",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "openingHours": "Mo-Fr 08:00-18:00",
      "sameAs": [
        "https://linkedin.com/company/technexus-solutions",
        "https://twitter.com/technexussolutions",
        "https://facebook.com/technexussolutions"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Premium websites and web applications"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Fire & Safety Services",
              "description": "Comprehensive fire safety solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "VoIP Solutions",
              "description": "Advanced call center and IP PBX systems"
            }
          }
        ]
      },
      ...data
    };

    return JSON.stringify(baseData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {getStructuredData()}
      </script>
    </Helmet>
  );
};