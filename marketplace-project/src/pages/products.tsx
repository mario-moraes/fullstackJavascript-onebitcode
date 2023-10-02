// pages/products.tsx

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Container } from 'reactstrap'


import { fetchProducts, ProductType } from '../services/products'
import Header from '@/components/Header'
import ProductsList from '@/components/ProductsList'

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts()
  return { props: { products } }
}

const Products: NextPage = (props: {
  children?: ReactNode
  products?: ProductType[]
}) => {
  return (
    <>
      <Head>
        <title>Our products</title>
        <meta name="description" content="Get to know the details about the product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Our Products
          </h1>

          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  )
}

export default Products