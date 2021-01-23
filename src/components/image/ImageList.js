import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = props => {
    return  props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image}/>
        );
    })
};

export default ImageList;