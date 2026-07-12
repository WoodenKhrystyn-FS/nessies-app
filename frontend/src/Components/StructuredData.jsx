import { Helmet } from "react-helmet-async";
import businessInfo from "../utils/businessInfo";

function StructuredData() {
  const bakerySchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: businessInfo.name,
    url: businessInfo.url,
    image: businessInfo.image,
    description: businessInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    servesCuisine: "Bakery",
    priceRange: "$$",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(bakerySchema)}</script>
    </Helmet>
  );
}

export default StructuredData;
