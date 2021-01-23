import React, {Component} from 'react';
import SearchBarVideo from "./SearchBarVideo";
import YoutubeApi from "../../api/YoutubeApi";

class SearchVideos extends Component {
    onTermSubmit = term => {
        YoutubeApi.get('/search',{
            q: term
        })
    }
    render() {
        return (
            <div>
                <SearchBarVideo type='text' onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default SearchVideos;