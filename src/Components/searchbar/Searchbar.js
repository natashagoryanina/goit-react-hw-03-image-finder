import React, {Component} from 'react';
import { toast } from 'react-toastify';
import {SearchbarContainer} from './SearchbarStyled';

class Searchbar extends Component {
    state = { 
        imageTag: ''
    };

    handleNameChange = (e) => {
        this.setState({imageTag: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.imageTag.trim() === '') {
            toast.error('Enter an image tag, please.');
            return;
        };
        this.props.onSubmit(this.state.imageTag);
        this.setState({imageTag: ''});
    };

    render() {
        return (
            <SearchbarContainer>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
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
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                </form>
            </SearchbarContainer>
        );
    };
};

export default Searchbar;
