import React from "react";

import ImageToggle from "../src/ImageToggle";
const ImageChange = () => {
  return (
    <div>
      <ImageToggle
        primaryImgSrc="https://i.imgur.com/WomlR1v.jpg"
        secondaryImgSrc="https://i.imgur.com/mZEK92H.jpg"
        alt="dog-with-mask"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggle
        primaryImgSrc="https://i.imgur.com/mZEK92H.jpg"
        secondaryImgSrc="https://i.imgur.com/WomlR1v.jpg"
        alt="scooby-with-velma-and-fred"
      />
    </div>
  );
};

export default ImageChange;
