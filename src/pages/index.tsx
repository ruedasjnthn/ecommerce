//module imports
import Head from 'next/head';
import { useState } from 'react';

//component imports
import Nav from '../components/Nav';
import Carousel from '../components/Carousel'
import Product from '../components/Product'

const Home = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
    <Head>
        <title>sneakers</title>
      </Head>
    <Nav cartCount={cartCount} setCartCount={setCartCount}/>
    <Carousel />
    <Product setCartCount={setCartCount} cartCount={cartCount} />
    </>
  )
}

export default Home
