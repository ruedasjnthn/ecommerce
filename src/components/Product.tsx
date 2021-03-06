//module imports
import { useState } from "react";

type Props = {
  cartCount: number;
  setCartCount: Function;
};

const Product: React.FC<Props> = ({ setCartCount, cartCount }) => {
  const [count, setCount] = useState(0);
  const maxCount = 50;
  const increaseCount = () => setCount(count === maxCount ? 0 : count + 1);
  const decreaseCount = () => setCount(count === 0 ? maxCount : count - 1);
  const addCart = () => {
    console.log(count)
    setCartCount(cartCount + count);
    setCount(0);
  };
  return (
    <section className="product">
      <div className="product__container">
        <h2 className="product__brand">SNEAKER COMPANY</h2>
        <h1 className="product__name">Fall Limited Edition Sneakers</h1>
        <p className="product__info">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&#39;ll withstand
          everything the weather can offer.
        </p>
        <div className="product__pricing">
          <span className="product__discountedPrice">$125.00</span>
          <span className="product__discount">50%</span>
          <span className="product__originalPrice">$250.00</span>
        </div>
        <div className="product__quantityConfirmationContainer">
          <div className="product__counter">
            <svg
              className="product__countBtn product__minus"
              onClick={decreaseCount}
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                fillRule="nonzero"
              />
            </svg>
            <span className="product__count">{count}</span>
            <svg
              className="product__countBtn product__plus"
              onClick={increaseCount}
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <button className="product__btn" onClick={addCart} disabled={count === 0}>
            <svg
              className="product__btnIcon"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
