// SEO Metadata configuration for Photobooth Canada

export const siteMetadata = {
  title: 'Photobooth Canada | Premium Photo Booth Rentals in Ontario',
  description: 'Professional photo booth rentals for weddings, corporate events, and parties across Ontario. Serving Toronto, Mississauga, Brampton, and all GTA cities. Book your photo booth today!',
  url: 'https://photoboothcanada.ca',
  siteName: 'Photobooth Canada',
  locale: 'en_CA',
  type: 'website',
  
  // Contact Information
  contact: {
    phone: '+1 (705) 970-7860',
    email: 'support@photoboothcanada.ca',
    address: 'Ontario, Canada'
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/photoboothcanada',
    instagram: 'https://instagram.com/photoboothcanada',
    twitter: 'https://twitter.com/photoboothca'
  },
  
  // Business Information
  business: {
    name: 'Photobooth Canada',
    legalName: 'Photobooth Canada',
    foundingDate: '2020',
    priceRange: '$$',
    areaServed: ['Ontario', 'Toronto', 'GTA', 'Canada'],
    serviceType: 'Photo Booth Rental Service'
  }
};

// Generate page metadata
export const generatePageMetadata = ({
  title,
  description,
  path = '',
  image = '/images/og-image.jpg',
  type = 'website'
}) => {
  const fullTitle = title 
    ? `${title} | Photobooth Canada`
    : siteMetadata.title;
  
  const fullUrl = `${siteMetadata.url}${path}`;
  
  return {
    title: fullTitle,
    description: description || siteMetadata.description,
    keywords: [
      'photo booth rental',
      'photo booth Ontario',
      'wedding photo booth',
      'corporate photo booth',
      'Toronto photo booth',
      'GTA photo booth',
      '360 photo booth',
      'mirror booth',
      'open air photo booth',
      'event photo booth'
    ],
    authors: [{ name: 'Photobooth Canada' }],
    creator: 'Photobooth Canada',
    publisher: 'Photobooth Canada',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteMetadata.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description || siteMetadata.description,
      url: fullUrl,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: siteMetadata.locale,
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || siteMetadata.description,
      images: [image],
      creator: '@photoboothca',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      bing: 'your-bing-verification-code',
    },
  };
};

// Generate JSON-LD structured data
export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        name: siteMetadata.business.name,
        url: siteMetadata.url,
        logo: `${siteMetadata.url}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteMetadata.contact.phone,
          contactType: 'customer service',
          email: siteMetadata.contact.email,
          areaServed: 'CA',
          availableLanguage: 'English'
        },
        sameAs: Object.values(siteMetadata.social),
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CA',
          addressRegion: 'ON'
        }
      };

    case 'localBusiness':
      return {
        ...baseData,
        '@type': 'LocalBusiness',
        '@id': siteMetadata.url,
        name: siteMetadata.business.name,
        image: `${siteMetadata.url}/images/og-image.jpg`,
        telephone: siteMetadata.contact.phone,
        email: siteMetadata.contact.email,
        priceRange: siteMetadata.business.priceRange,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CA',
          addressRegion: 'ON'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.6532,
          longitude: -79.3832
        },
        url: siteMetadata.url,
        areaServed: siteMetadata.business.areaServed.map(area => ({
          '@type': 'City',
          name: area
        })),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:00'
        }
      };

    case 'service':
      return {
        ...baseData,
        '@type': 'Service',
        serviceType: data.serviceType || 'Photo Booth Rental',
        provider: {
          '@type': 'Organization',
          name: siteMetadata.business.name,
          url: siteMetadata.url
        },
        areaServed: {
          '@type': 'State',
          name: 'Ontario'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Photo Booth Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Open Air Photo Booth',
                description: 'Classic open air photo booth with unlimited prints'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mirror Booth',
                description: 'Interactive mirror photo booth experience'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '360 Photo Booth',
                description: 'Slow-motion 360-degree video booth'
              }
            }
          ]
        }
      };

    case 'breadcrumb':
      return {
        ...baseData,
        '@type': 'BreadcrumbList',
        itemListElement: data.items?.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${siteMetadata.url}${item.path}`
        })) || []
      };

    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Person',
          name: data.author
        },
        publisher: {
          '@type': 'Organization',
          name: siteMetadata.business.name,
          logo: {
            '@type': 'ImageObject',
            url: `${siteMetadata.url}/logo.png`
          }
        }
      };

    default:
      return baseData;
  }
};
