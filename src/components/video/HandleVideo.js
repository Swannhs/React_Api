import React, {Component} from 'react';
import SearchBarVideo from "./SearchBarVideo";
import YoutubeApi from "../../api/YoutubeApi";
import VideoList from "./VideoList";

class HandleVideo extends Component {
    state = {videos : []}
    onTermSubmit = async term => {
        const response = await YoutubeApi.get('/search',{
            q: term
        })
        this.setState({videos: response.data.items})
    }
    render() {
        return (
            <div>
                <SearchBarVideo type='text' onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default HandleVideo;