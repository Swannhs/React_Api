import React, {Component} from 'react';

class ImageCard extends Component {
    render() {
        const {description, urls} = this.props.image;

        return (
            <div className="ui card">
                <div className="content">
                    <img className="ui avatar image" src={urls.regular}
                         alt={description}/>
                </div>
            </div>
        );
    }
}

export default ImageCard;