import React from 'react';

const VideoDetails = ({video}) => {
    if (video) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <>
                <div className='ui embed'>
                    <iframe src={videoSrc} frameborder="0"/>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>
                        {video.snippet.title}
                    </h4>
                    <p>{video.snippet.description}</p>
                </div>
            </>
        );
    } else {
        return (<h1>Loading......</h1>)
    }
};

export default VideoDetails;