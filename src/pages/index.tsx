//module imports
import Head from "next/head";
import { useState } from "react";

//component imports
import Nav from "../components/Nav";
import Main from "../components/Main";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Head>
        <title>sneakers</title>
      </Head>
      <Nav cartCount={cartCount} setCartCount={setCartCount} />
      <Main cartCount={cartCount} setCartCount={setCartCount}/>
    </>
  );
};

export default Home;
