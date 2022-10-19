import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  sitename?: string;
}
const SEO: FC<SEOProps> = ({
  title,
  description,
  sitename = "Bazaar Next.js Ecommerce",
}) => {
  return (
    <Head>
      <title>
        {title} | {sitename}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
