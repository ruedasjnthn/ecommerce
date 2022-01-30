import { useState } from "react";
import logo from "../public/logo.svg";
import userAvatar from "../public/image-avatar.png";
import Basket from "./Basket";

type Props = {
  cartCount: number;
  setCartCount: Function;
};

const Nav: React.FC<Props> = ({ cartCount, setCartCount }) => {
  const [sidebar, setSidebar] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // //for screen width
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   setSidebar(windowWidth >= 1280 ? false : true);
  // }, [windowWidth]);

  const showSidebar = () => setSidebar(true);

  const closeSidebar = () => setSidebar(false);

  const handleDropdown = () => setDropdown(!dropdown);

  return (
    <nav className="nav">
      <div className="nav__container">
        <svg
          className="nav__menuBar"
          onClick={showSidebar}
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fillRule="evenodd"
          />
        </svg>
        <img className="nav__logo" src={logo.src} alt="sneaker" />
        <div className={sidebar ? "nav__menu active" : "nav__menu"}>
          <ul className="nav__sidebarItems">
            <li className="nav__close" onClick={closeSidebar}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fillRule="evenodd"
                />
              </svg>
            </li>
            <li className="nav__sidebarItem" onClick={closeSidebar}>
              Collections
            </li>
            <li className="nav__sidebarItem" onClick={closeSidebar}>
              Men
            </li>
            <li className="nav__sidebarItem" onClick={closeSidebar}>
              Women
            </li>
            <li className="nav__sidebarItem" onClick={closeSidebar}>
              About
            </li>
            <li className="nav__sidebarItem" onClick={closeSidebar}>
              Contact
            </li>
          </ul>
        </div>
        <div className="nav__cart" onClick={handleDropdown}>
          <svg
            className="nav__cartIcon"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          {cartCount > 0 && <div className="nav__badge">{cartCount}</div>}
        </div>
        {dropdown && (
          <Basket cartCount={cartCount} setCartCount={setCartCount} />
        )}
        <img
          className="nav__userAvatar"
          src={userAvatar.src}
          alt="user avatar"
        />
      </div>
    </nav>
  );
};

export default Nav;
