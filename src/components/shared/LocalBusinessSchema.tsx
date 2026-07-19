import { Helmet } from "react-helmet-async";

const schema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Bhanwar Pet Hospital",
  image: "https://www.bhanwarpethospital.in/og-image.jpg",
  url: "https://www.bhanwarpethospital.in",
  telephone: "+91-141-400-0000",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 14, Vaishali Nagar Main Road",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 emergency care",
    },
  ],
  sameAs: [] as string[],
};

export function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
