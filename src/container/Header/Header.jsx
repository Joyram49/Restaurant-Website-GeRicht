import React from "react";
import "./header.css";
import Subheading from "../../components/Subheading/Subheading";
import Welcome from "../../assets/welcome.png";

const Header = () => {
  return (
    <div className='header' id='home'>
      <div className='header_left'>
        <Subheading title='Chase The New Flavour' />
        <h1>The Key To Fine Dining</h1>
        <p className='p_opensans'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type='button' className='custom_button'>
          Explore Now
        </button>
      </div>
      <div className='header_right'>
        <img src={Welcome} alt='welcome_img' />
      </div>
    </div>
  );
};

export default Header;
