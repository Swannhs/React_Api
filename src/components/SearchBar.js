import React, {Component} from 'react';


class SearchBar extends Component {

    state = {term: ''}

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <input type="text" placeholder="Search image" value={this.state.term}
                           onChange={event => this.setState({term: event.target.value})}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;