import React from "react";
import "./special.css";
import Subheading from "../../components/Subheading/Subheading";
import SubSpecial from "./subSpecial/SubSpecial";
import { data, images } from "../../constants/index.js";

const Special = () => {
  return (
    <div className='special' id='menu'>
      <div className='special_heading'>
        <Subheading
          title='Menu That Fits You Palatte'
          className='center_text'
        />
        <h1 className='headtext_cormorant'>Today's Special</h1>
      </div>
      <div className='special_content'>
        <div className='special_content-left'>
          <h2> Wine & Beer</h2>
          <div className='special_content-menu'>
            {data.wines.map(({ title, price, tags }, index) => {
              return (
                <SubSpecial
                  key={index + price}
                  title={title}
                  price={price}
                  tags={tags}
                />
              );
            })}
          </div>
        </div>
        <div className='special_content-img'>
          <img src={images.menu} alt='item_pic' />
        </div>
        <div className='special_content-right'>
          <h2>Cocktails</h2>
          <div className='special_content-menu'>
            {data.cocktails.map(({ title, price, tags }, index) => {
              return (
                <SubSpecial
                  key={index + price}
                  title={title}
                  price={price}
                  tags={tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button
        type='button'
        className='custom_button'
        style={{ marginTop: "4rem" }}
      >
        View More
      </button>
    </div>
  );
};

export default Special;
