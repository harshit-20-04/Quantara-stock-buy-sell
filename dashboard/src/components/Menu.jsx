import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menus, setMenus] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setMenus(index);
  };

  const handleProfileDropDown = () => {
    setIsProfileDropDown(!isProfileDropDown);
  };

  const menuClass = "menu";

  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="image.svg" alt="image" style={{ width: "15px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={menus === 0 ? activeMenuClass : menuClass}>
                DashBoard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={menus === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={menus === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={menus === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={menus === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={menus === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleMenuClick}>
          <div className="avatar">Zu</div>
          <p className="username">USERID</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
