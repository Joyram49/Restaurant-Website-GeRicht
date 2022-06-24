import React from "react";
import "./subheading.css";
import Spoon from "../../assets/spoon.png";

const Subheading = ({ title, className }) => {
  return (
    <div className='subheading'>
      <h2 className='p_cormorant'>{title}</h2>
      <img src={Spoon} alt='spoon_image' className={className} />
    </div>
  );
};

export default Subheading;
