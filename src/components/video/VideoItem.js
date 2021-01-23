import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './videoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="ui relaxed divided list">
            <div className="video-item item">
                <img className='ui image' src={video.snippet.thumbnails.medium.url} alt='thumbnails'/>
                <div className="content">
                    <p className="header">{video.snippet.title}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
