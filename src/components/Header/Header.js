import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  const itemCount = 0;
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for products"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign in</span>
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
            <strong style={{ padding: "8px" }}>{itemCount}</strong>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
