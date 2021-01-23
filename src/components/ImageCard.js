import React, {Component} from 'react';

class ImageCard extends Component {
    render() {
        const {description, urls} = this.props.image;

        return (
            <div className="ui card">
                <div className="ui slide masked reveal image">
                    <img src={urls.regular} className="visible content" alt={description}/>
                </div>
            </div>
        );
    }
}

export default ImageCard;