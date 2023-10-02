// pages/cart.tsx

import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import CartTable from "../../src/components/CartTable";
import { Container } from "reactstrap";
import CartTotal from "../../src/components/CartTotal";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="My shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      < Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Shopping Cart
          </h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  )
}

export default Cart