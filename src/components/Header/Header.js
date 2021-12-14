import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    // when user is logged in the user will see the sign out button after pressing that the user can sign out with the help of this function
    if (user) {
      auth.signOut(); // sign out the user
    }
  };

  const itemCount = 0;
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for products"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          {/* //display name of user after signin */}
          <span
            style={{ textDecoration: "none", textAlign: "left" }}
            className="header__optionLineOne"
          >
            Hey, <b>{user ? `${user.email}` : "Guest"}</b>{" "}
          </span>
          <Link
            to={!user && "/login"}
            style={{ textDecoration: "none", color: "#fff" }}
            className="header__optionLineTwo"
          >
            {user ? "Sign out" : "Sign In"}
          </Link>{" "}
          {/*there it checks if there is no user only then we will be redirected to login page*/}
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <nav className="header__option">
          <Link to="/cart" className="header__optionIcon">
            <BsFillBasket3Fill />
            <strong style={{ padding: "8px" }}>{basket?.length}</strong>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
