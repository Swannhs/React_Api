import React, {Component} from 'react';
import SearchBarVideo from "./SearchBarVideo";
import YoutubeApi from "../../api/YoutubeApi";
import VideoList from "./VideoList";

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
        console.log(video)
    }

    render() {
        return (
            <div>
                <SearchBarVideo type='text' onFormSubmit={this.onTermSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default HandleVideo;