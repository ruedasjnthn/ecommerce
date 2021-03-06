import CartItemImage from "../public/image-product-1-thumbnail.jpg";
import getStripe from "../utils/get-stripejs";
import axios from "axios";

type Props = {
  cartCount: number;
  setCartCount: Function;
};

const Basket: React.FC<Props> = ({ cartCount, setCartCount }) => {
  const handleCheckout = async () => {
    const {
      data: { id },
    } = await axios.post("/api/checkout_session", {
      name: "Fall Limited Edition Sneakers",
      image:
        "https://sneakers-ecom.vercel.app/_next/static/media/image-product-1-thumbnail.1a9cfb29.jpg",
      quantity: cartCount,
      price: 125,
    });

    // Redirect to Checkout.
    const stripe = await getStripe();
    await stripe!.redirectToCheckout({ sessionId: id });
  };
  const handleRemoveItems = () => setCartCount(0);

  return (
    <div className="basket">
      <h1 className="basket__title">Cart</h1>
      {cartCount === 0 && (
        <h1 className="basket__empty">Your cart is empty.</h1>
      )}
      {cartCount > 0 && (
        <div className="product__filled">
          <div className="basket__item">
            <img
              className="basket__image"
              src={CartItemImage.src}
              alt="product-image"
            />
            <div className="basket__info">
              <p className="basket__product">Fall Limited Edition Sneakers</p>
              <span className="basket__price">$125.00 x {cartCount}</span>
              <span className="basket__totalPrice">
                ${(cartCount * 125.0).toFixed(2)}
              </span>
            </div>
            <svg
              onClick={handleRemoveItems}
              className="basket__removeBtn"
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <button onClick={handleCheckout} className="basket__btn">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
