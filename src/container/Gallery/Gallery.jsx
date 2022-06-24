import React, { useRef } from "react";
import "./gallery.css";
import SubHeading from "../../components/Subheading/Subheading";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='gallery'>
      <div className='gallery_content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext_cormorant'>Photo Gallery</h1>
        <p className='p_opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut
          dolorem, doloribus quod odit distinctio.
        </p>
        <button type='button' className='custom_button'>
          View More
        </button>
      </div>
      <div className='gallery_images'>
        <div className='gallery_images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div className='gallery_images_card' key={index}>
                <img src={image} alt='gallery_img' />
                <BsInstagram className='gallery_image-icon' />
              </div>
            );
          })}
        </div>
        <div className='gallery_images_arrows'>
          <BsArrowLeftShort
            className='gallery_images-arrow_icon'
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className='gallery_images-arrow_icon'
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
