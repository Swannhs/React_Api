import React from 'react';

const ImageList = props => {
    return  props.images.map((image) => {
        return (
            <div key={image.id}  className="ui card center aligned">
                <div className="ui slide masked reveal image">
                    <img src={image.urls.regular} className="visible content"/>
                </div>
            </div>
        );
    })
};

export default ImageList;