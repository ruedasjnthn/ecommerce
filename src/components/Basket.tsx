//img imports
import CartItemImage from "../public/image-product-1-thumbnail.jpg"

type Props = {
  cartCount:number
}

const Basket:React.FC<Props> = ({ cartCount }) => {
  return (
    <div className="basket">
      <h1 className="basket__title">Cart</h1>
      {cartCount === 0 && (
        <h1 className="basket__empty">Your cart is empty.</h1>
      )}
      {cartCount > 0 && (
        <div className="basket__item">
          <img src={CartItemImage.src} alt='product-image' />
          <div className="basket__info">
            <p className="basket__product">
            Fall Limited Edition Sneakers
            </p>
            <p className="basket__price">
              $125.00 x {cartCount}
            </p>
            <span className="basket__totalPrice">
              ${(cartCount * 125.00).toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
