import React from "react";
import "./footer.css";
import NewsLetter from "./newsLetter/NewsLetter";
import { images } from "../../constants";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='footer app_bg'>
      {/* <div className='footer_overlay'>
        <div className='footer_overlay_black'></div>
        <div className='footer_overlay_backimg app_bg'></div>
      </div> */}
      <div className='footer_overlay_black'></div>
      <NewsLetter />
      <div className='footer_content'>
        <div className='contact_us'>
          <h1>Contact Us</h1>
          <p className='p_opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p_opensans'>+1 212-344-1230</p>
          <p className='p_opensans'>+1 212-555-1230</p>
        </div>
        <div className='contact_logo'>
          <div className='contact_logo-img'>
            <img src={images.gericht} alt='' />
          </div>
          <p className='p_opensans'>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others.”
          </p>
          <img src={images.spoon} alt='spoon_img' />
          <div className='contact_logo-icons'>
            <FaFacebookF className='contact_logo-icon' />
            <AiOutlineTwitter className='contact_logo-icon' />
            <AiOutlineInstagram className='contact_logo-icon' />
          </div>
        </div>
        <div className='contact_time'>
          <h1>Working Hours</h1>
          <p className='p_opensans'>
            Monday-Friday: <br /> 8:00Am - 12:00 Am
          </p>
          <p className='p_opensans'>
            Satureday-Sunday: <br /> 7:00Am - 11:00 Pm
          </p>
        </div>
      </div>
      <div
        className='p_opensans footer_copyright'
        style={{ alignSelf: "center" }}
      >
        <p>2021 Gerícht. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
