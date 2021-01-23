import React, {Component} from 'react';
import SearchBarVideo from "./SearchBarVideo";
import YoutubeApi from "../../api/YoutubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class HandleVideo extends Component {
    state = {videos: [], selectedVideo: null}
    onTermSubmit = async term => {
        const response = await YoutubeApi.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div>
                <SearchBarVideo type='text' onFormSubmit={this.onTermSubmit}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default HandleVideo;