// pages/cart.tsx

import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="My shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      < Header />

      <h1>
        Shopping Cart
      </h1>
    </>
  )
}

export default Cart