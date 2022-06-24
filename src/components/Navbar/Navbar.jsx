import React, { useState } from "react";
import "./navbar.css";

import images from "../../constants/images";
import { MdRestaurantMenu, MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <img src={images.gericht} alt='website_logo' />
      </div>
      <ul className='nav_items'>
        <li className='nav_item'>
          <a href='#'>Home</a>
        </li>
        <li className='nav_item'>
          <a href='#aboutus'>About</a>
        </li>
        <li className='nav_item'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='nav_item'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='nav_item'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='logIn'>
        <div className='logIn_reg'>
          <a href='#'>Log In / Register</a>
        </div>
        <div />
        <div className='booking'>
          <a href='#'>Book Table</a>
        </div>
      </div>
      <div className='navbar_sm'>
        <MdOutlineMenu
          fontSize={32}
          color='white'
          cursor='pointer'
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className='navbar_sm-overlay slide-bottom'>
            <MdRestaurantMenu
              className='sm_nav_close'
              fontSize={32}
              cursor='pointer'
              onClick={() => setShowMenu(!showMenu)}
            />
            <ul className='nav_items_sm'>
              <li
                className='nav_item_sm'
                onClick={() => setShowMenu(!showMenu)}
              >
                <a href='#'>Home</a>
              </li>
              <li
                className='nav_item_sm'
                onClick={() => setShowMenu(!showMenu)}
              >
                <a href='#aboutus'>About</a>
              </li>
              <li
                className='nav_item_sm'
                onClick={() => setShowMenu(!showMenu)}
              >
                <a href='#menu'>Menu</a>
              </li>
              <li
                className='nav_item_sm'
                onClick={() => setShowMenu(!showMenu)}
              >
                <a href='#awards'>Awards</a>
              </li>
              <li
                className='nav_item_sm'
                onClick={() => setShowMenu(!showMenu)}
              >
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
