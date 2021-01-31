import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ id, urls, alt_description }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
