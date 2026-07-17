import { CLINIC_INFO, FAQS } from '../constants';
import type { Service } from '../constants';

/**
 * Returns the Dentist JSON-LD Schema
 */
export const getDentistSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_INFO.name,
    "image": "https://absolutedental.co.in/logo.png",
    "telephone": CLINIC_INFO.phoneRaw,
    "email": CLINIC_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, 43, Jacaranda Marg, Near BSNL Office, DLF Phase 2, Sector 25",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4731,
      "longitude": 77.0936
    },
    "url": "https://absolutedental.co.in",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:30"
      }
    ],
    "priceRange": "₹₹",
    "areaServed": "Gurugram, Haryana",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "812"
    }
  };
};

/**
 * Returns the Local Business Schema
 */
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": CLINIC_INFO.name,
    "image": "https://absolutedental.co.in/logo.png",
    "telephone": CLINIC_INFO.phoneRaw,
    "email": CLINIC_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, 43, Jacaranda Marg, Near BSNL Office, DLF Phase 2, Sector 25",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "url": "https://absolutedental.co.in",
    "hasMap": "https://maps.app.goo.gl/kX8yN2LwTqC7X2rR9",
    "openingHours": "Mo-Sa 10:00-19:30"
  };
};

/**
 * Returns the FAQPage JSON-LD Schema for general FAQs or custom service FAQs
 */
export const getFAQPageSchema = (customFaqs?: { question: string; answer: string }[]) => {
  const faqList = customFaqs || FAQS;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Returns the Service JSON-LD Schema
 */
export const getServiceSchema = (service: Service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Dentist",
      "name": CLINIC_INFO.name,
      "telephone": CLINIC_INFO.phoneRaw
    },
    "areaServed": "Gurugram, Haryana"
  };
};
