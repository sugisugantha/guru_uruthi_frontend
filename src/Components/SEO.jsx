import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from "../assets/Images/logo.png"

const SEO = ({ 
  title = 'Guru uruthi',
  description = 'Welcome to our Guru uruthi. Discover amazing products and services',
  keywords = 'home, products, services, company',
  image = logo,
  url = 'https://www.guruvalueproducts.com',
  type = 'website',
  author = 'Guru uruthi',
  siteName = 'guruvalueproducts'
}) => {
  const siteUrl =  'https://www.guruvalueproducts.com';
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO;