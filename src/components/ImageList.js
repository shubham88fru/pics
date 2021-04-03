import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map((img) => (
    <ImageCard key={img.id} img={img} />
  ));

  return <div className="image-list">{images}</div>;
};

export default ImageList;
