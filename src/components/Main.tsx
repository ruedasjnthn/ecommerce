import Carousel from "./Carousel";
import Product from "./Product";

type Props = {
    cartCount: number;
    setCartCount: Function;
};

const Main: React.FC<Props> = ({ setCartCount, cartCount }) => {
  return (
    <main className="main">
      <Carousel />
      <Product setCartCount={setCartCount} cartCount={cartCount} />
    </main>
  );
}

export default Main;
