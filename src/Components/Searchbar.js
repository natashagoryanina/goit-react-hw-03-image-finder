import React, {Component} from 'react';

class Searchbar extends Component {
    state = { 
        imageTag: ''
     }

    handleNameChange = (e) => {
        this.setState({imageTag: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.imageTag.trim() === '') {
            alert('Enter image tag')
            return;
        }
        this.props.onSubmit(this.state.imageTag);
        this.setState({imageTag: ''});
    };

    render() {
        return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name = "imageTag"
                value={this.state.imageTag}
                onChange={this.handleNameChange}
                />
            </form>
        </header>
        );
    }
}

export default Searchbar;
