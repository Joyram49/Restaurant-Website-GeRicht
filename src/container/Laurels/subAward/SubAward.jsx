import React from "react";
import "./subAward.css";
const SubAward = ({ image, title, subtitle }) => {
  return (
    <div className='subAward'>
      <img src={image} alt='award_image' />
      <div className='subAward_content'>
        <h4>{title}</h4>
        <p className='p_opensans'>{subtitle}</p>
      </div>
    </div>
  );
};
export default SubAward;
