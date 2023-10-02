// pages/products.tsx

import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our products</title>
        <meta name="description" content="Get to know more details about our product line!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>
        Our products
      </h1>
    </>
  )
}

export default Products