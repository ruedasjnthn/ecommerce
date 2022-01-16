//module imports
import { useState } from 'react';

//component imports
import Nav from '../components/Nav';
import Carousel from '../components/Carousel'
import Product from '../components/Product'

const Home = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
    <Nav cartCount={ cartCount }/>
    <Carousel />
    <Product setCartCount={setCartCount} cartCount={cartCount} />
    </>
  )
}

export default Home
