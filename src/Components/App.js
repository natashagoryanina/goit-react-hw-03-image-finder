import React, {Component} from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

class App extends Component {
    state = {
        image: '',
    };

    handleFormSubmit = (imageTag) => {
       this.setState({image : imageTag})
    };

    render() {
        return (
            <main>
                <Searchbar onSubmit={this.handleFormSubmit}/>
                <ImageGallery image={this.state.image}/>
            </main>
        );
    }
}

export default App;