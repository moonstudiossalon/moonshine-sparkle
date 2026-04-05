import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Moon Studios – The Family Salon",
      "url": "https://moonstudiossalon.in/",
      "description": "Top-rated family hair salon in Andheri East, Mumbai. Haircuts, Nanoplastia, Balayage, Olaplex & facials. Open all days.",
      "image": "https://moonstudiossalon.in/og-image.jpg",
      "telephone": "+919004832184",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar",
        "addressLocality": "Andheri East",
        "addressRegion": "Maharashtra",
        "postalCode": "400072",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.114226682023627",
        "longitude": "72.88492991149732"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:30",
          "closes": "21:00"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
      "currenciesAccepted": "INR",
      "sameAs": [
        "https://maps.app.goo.gl/YqntQGMKfKekQMN69"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "38",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const servicesSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Nanoplastia Hair Treatment",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "offers": {
          "@type": "Offer",
          "price": "3999",
          "priceCurrency": "INR"
        },
        "description": "Signature treatment for frizzy, damaged hair — most praised in reviews."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Olaplex Hair Treatment",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Advanced bond-building treatment for hair repair."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hair Coloring with Highlights and Balayage",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Global color & balayage technique with precision blending."
      }
    ];

    const reviewsSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Riddhima C."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-02-15",
        "reviewBody": "I couldn't be happier with the results of my hair highlights! The attention to detail and precision was outstanding. The color is perfectly blended, giving my hair a natural yet vibrant look that suits me perfectly."
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Anindita R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-03-15",
        "reviewBody": "I went for Nanoplastia treatment 2 days back and I am amazed by the service provided by Shehzad. Monica the owner is a sweetheart. The warmth here is unparalleled."
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Anannya D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-05-15",
        "reviewBody": "This is by far the best hair experience ever. Monica the owner is a sweetheart! Sadam was magical!! My hair has never looked better! Highly recommend Moon Studios."
      }
    ];

    // Insert schemas into head
    const schemas = [localBusinessSchema, ...servicesSchema, ...reviewsSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;
