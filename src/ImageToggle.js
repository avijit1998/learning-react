import React, { useRef, props } from "react";

const ImageToggle = (props) => {
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = props.secondaryImgSrc;
      }}
      onMouseOut={() => {
        imageRef.current.src = props.primaryImgSrc;
      }}
      src={props.primaryImgSrc}
      width="500px"
      height="500px"
      alt={props.alt}
      ref={imageRef}
    />
  );
};

export default ImageToggle;
