import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import Image from "./Image";
function SlideShow({ slideshowData, className }) {
  const [index, setIndex] = useState(0);

  const length = slideshowData.length;
  console.log(index);
  console.log(length);
  const handleNext = () => {
    index === length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  return (
    <div className={className}>
      <Image
        src={slideshowData[index]?.image}
        alt={slideshowData[index]?.alt}
      />

      <div className="buttons">
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  );
}
export default SlideShow;
