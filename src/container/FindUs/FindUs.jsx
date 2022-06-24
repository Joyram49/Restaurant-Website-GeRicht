import React from "react";
import "./findus.css";
import SubHeading from "../../components/Subheading/Subheading";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className='contact app_bg' id='contact'>
      <div className='contact_left'>
        <SubHeading title='Contact' />
        <h1 className='headtext_cormorant'>Find Us</h1>
        <p className='p_opensans'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <div className='contact_time'>
          <p>Opening Hours</p>
          <p className='p_opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className='p_opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button type='button' className='custom_button'>
          Visit Us
        </button>
      </div>
      <div className='contact_right'>
        <img src={images.findus} alt='contact_img' />
      </div>
    </div>
  );
};

export default FindUs;
