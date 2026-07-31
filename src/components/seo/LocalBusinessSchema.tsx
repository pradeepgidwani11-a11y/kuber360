import JsonLd from './JsonLd';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'LocalBusiness'],
    name: 'KUBER360 Financial Services',
    alternateName: 'KUBER360',
    description:
      'KUBER360 is a Direct Selling Agent (DSA) and financial services facilitator in Jaipur, Rajasthan. We offer loans, credit cards, insurance, investments, tax & GST, and business registration services.',
    url: 'https://kuber360.in',
    logo: 'https://kuber360.in/assets/kuber360-logo.svg',
    image: 'https://kuber360.in/assets/kuber360-og.jpg',
    telephone: '+91-87420-19250',
    email: 'info@kuber360.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.9124',
      longitude: '75.7873',
    },
    areaServed: [
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Loan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Loan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Loan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Loan' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Credit Cards' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Life Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Health Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mutual Funds & SIP' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ITR Filing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GST Registration' } },
      ],
    },
    sameAs: [],
    priceRange: 'Free Consultation',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer',
  };

  return <JsonLd data={schema} />;
}
