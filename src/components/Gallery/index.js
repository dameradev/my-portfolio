import React, { useState } from "react";
import LightBox from "./lightbox";
import Image from "next/image";
import { GalleryImage } from "./style";

const GalleryComponent = (props) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };
  return (
    <GalleryImage className="gallery">
      <div className="image-wrapper">
        {props.images[0] && (
          <Image fluid={props.images[0]} onClick={handleOpen(0)} />
        )}
      </div>

      {showLightbox && selectedImage !== null && (
        <LightBox
          showLightbox={showLightbox}
          images={props.images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </GalleryImage>
  );
};
export default GalleryComponent;
