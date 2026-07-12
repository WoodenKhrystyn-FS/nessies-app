import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  image = "/Logo.png",
  url = "https://threelittlesistersbakery.com",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Three Little Ladies Bakery" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
