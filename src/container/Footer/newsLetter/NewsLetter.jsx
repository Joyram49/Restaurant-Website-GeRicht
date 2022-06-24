import React from "react";
import "./newsLetter.css";
import SubHeading from "../../../components/Subheading/Subheading";

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext_cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p_opensans'>And Never Miss Latest Updates!</p>
      <div className='newsLetter-input'>
        <input type='email' placeholder='Enter Your Email' />
        <button type='button' className='custom_button'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
