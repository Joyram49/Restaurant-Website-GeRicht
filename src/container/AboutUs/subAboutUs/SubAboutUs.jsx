import React from "react";
import "./subAboutUs.css";
import Spoon from "../../../assets/spoon.png";

const SubAboutUs = (props) => {
  return (
    <div className={`subAbout ${props.className}`}>
      <h1>{props.title}</h1>
      <img src={Spoon} alt='spoon_img' style={{ width: "5rem" }} />
      <p className='p_opensans'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fuga ad
        nisi animi, assumenda cupiditate quisquam necessitatibus aliquid alias
        odit! Aspernatur id molestias maxime possimus iusto, officia dolore
        velit deserunt.
      </p>
      <button type='button' className='custom_button'>
        Know More
      </button>
    </div>
  );
};

export default SubAboutUs;
