import React, {Component} from 'react';
import Api from "./api/Api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
    state = {images: []}
    onSearchSubmit = async (term) => {
        const response = await Api.get('/search/photos', {
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

export default App;