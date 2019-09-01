import React from "react";
import Head from "next/head";

const SEO = props => {
  return (
    <Head>
      <title>Jdyn</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A Developer Portfolio - Engineer and Visionary" />
      <meta name="og:description" content="A Developer Portfolio - Engineer and Visionary" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://i.imgur.com/eOTFEq0.png" />
      <meta property="og:url" content="https://jdyn.dev" />
      <link href="/static/styles/global.css" rel="stylesheet" />
    </Head>
  );
};

export default SEO;