import React from "react";
import "./subSpecial.css";

const SubSpecial = ({ title, price, tags }) => {
  return (
    <div className='subspecial'>
      <div className='subspecial_1st_row'>
        <h2>{title}</h2>
        <div className='subspecial_dash' />
        <p>{price}</p>
      </div>
      <div className='subspecial_2nd_row'>
        <p>{tags}</p>
      </div>
    </div>
  );
};

export default SubSpecial;
