import React, {Component} from 'react';

class SearchBar extends Component {
    onInputChange(event){
        console.log(event.target.value)
    }
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <input type="text" placeholder="Search image" onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;