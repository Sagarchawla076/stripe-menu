import React, { createRef, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const navRef = useRef(null);
  const displaySubmenu = (e) => {
    const page = e.target.textContent.toLowerCase();
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 2;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (e.target.contains(navRef.current)) {
      closeSubmenu();
    } else {
      return;
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center" ref={navRef}>
        <div className="nav-header">
          <img src="./static/logo.svg" alt="logo" />
          <button className="btn toggle-btn" onClick={() => openSidebar()}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li className="link" onMouseOver={(e) => displaySubmenu(e)}>
            <a href="#">Products</a>
          </li>
          <li className="link" onMouseOver={(e) => displaySubmenu(e)}>
            <a href="#">Developers</a>
          </li>
          <li className="link" onMouseOver={(e) => displaySubmenu(e)}>
            <a href="#">Company</a>
          </li>
        </ul>
        <button className="sign-in">Sign in</button>
      </div>
    </nav>
  );
};
export default Navbar;
