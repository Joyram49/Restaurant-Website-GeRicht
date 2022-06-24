import React from "react";
import "./chef.css";
import chef from "../../assets/chef.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";
import SubHeading from "../../components/Subheading/Subheading";

const Chef = () => {
  return (
    <div className='chef app_bg'>
      <div className='chef_img'>
        <img src={chef} alt='chef_img' />
      </div>
      <div className='chef_content'>
        <SubHeading title={`Chef's Word`} />
        <h1 className='headtext_cormorant'>What We Believe in</h1>
        <div className='chef_content-desc'>
          <img src={quote} alt='qoute_img' />
          <p className='p_opensans'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
          </p>
        </div>
        <p className='p_opensans'>
          illum? In perferendis ut nisi natus impedit velit amet obcaecati odio,
          excepturi cum vitae enim eos temporibus nemo ullam quisquam eveniet
          voluptatibus praesentium debitis non placeat dolor cumque. Distinctio,
          blanditiis cum?
        </p>
        <h4>Kevin Luo</h4>
        <h2 className='p_opensans'>Chef & Founder</h2>
        <img src={sign} alt='sign_img' />
      </div>
    </div>
  );
};

export default Chef;
