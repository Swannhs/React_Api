import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => {
        console.log(video)
        return <VideoItem video={video}/>
    })
    return (
        <div>
            {renderedList}
        </div>
    );
};

export default VideoList;