import React from 'react';
import './videoItem.css';

const VideoItem = props => {
    return (
        <div className='video-item item'>
            <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt='thumbnails'/>
            <div className='content'>
                <div className='header'>
                    <p>{props.video.snippet.title}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;