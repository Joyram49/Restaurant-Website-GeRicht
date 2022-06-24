import React from "react";
import "./laurels.css";
import { images, data } from "../../constants";
import SubHeading from "../../components/Subheading/Subheading";
import SubAward from "./subAward/SubAward";

const Laurels = () => {
  return (
    <div className='laurels app_bg' id='award'>
      <div className='laurels_left'>
        <SubHeading title='Awards & Recognition' />
        <h1 className='headtext_cormorant'>Our Laurels</h1>
        <div className='laurels_left-content'>
          {data.awards.map(({ imgUrl, title, subtitle }, index) => {
            return (
              <SubAward
                key={title + index}
                image={imgUrl}
                title={title}
                subtitle={subtitle}
              />
            );
          })}
        </div>
      </div>
      <div className='laurels_right-content'>
        <img src={images.laurels} alt='laurels_img' />
      </div>
    </div>
  );
};

export default Laurels;
