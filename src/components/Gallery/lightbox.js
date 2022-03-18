import React from "react";
import LightboxReact from "lightbox-react";
import "lightbox-react/style.css";

import { GalleryImage } from "./style";

import Image from "gatsby";

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
  showLightbox,
}) => {
  const array = [];
  images.forEach((image) =>
    array.push(
      <GalleryImage className={`gallery ${showLightbox ? "open" : ""}`}>
        <Image layout="fill" src={image} />
      </GalleryImage>
    )
  );

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  );
};

export default Lightbox;
