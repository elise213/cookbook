import React from "react";
import Head from "next/head";

const SEO = ({ title, description, image }) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{title || "Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!"}</title>
    <meta
      name="description"
      content={description || "This is a simple test."}
    />
    <meta
      property="og:image"
      content="https://example.com/img/CCEARETREATSMALLER.png"
    />
  </Head>
);

export default SEO;
