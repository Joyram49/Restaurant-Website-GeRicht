import React from "react";
import "./aboutus.css";
import SubAboutUs from "./subAboutUs/SubAboutUs";
import Knife from "../../assets/knife.png";
import G from "../../assets/G.png";

const AboutUs = () => {
  return (
    <div className='aboutUs app_bg' id='about'>
      <div className='aboutUs_overlay'>
        <img src={G} alt='overlay_G' />
      </div>
      <div className='aboutUs_content'>
        <div>
          <SubAboutUs title='About Us' className='flex_end right_text' />
        </div>
        <img src={Knife} alt='Knife_img' />
        <div>
          <SubAboutUs title='Our History' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
