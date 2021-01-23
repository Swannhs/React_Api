import React, {Component} from 'react';
import ImageApi from "../../api/ImageApi";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class SearchImage extends Component {
    state = {images: []}
    onSearchSubmit = async (term) => {
        const response = await ImageApi.get('/search/photos', {
            params: {query: term},

        })
        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} style={{marginTop: '10px'}}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default SearchImage;