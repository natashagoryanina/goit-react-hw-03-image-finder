import React, {Component} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                <ToastContainer/>
                <Searchbar onSubmit={this.handleFormSubmit}/>
                <ImageGallery image={this.state.image}/>
            </main>
        );
    };
};

export default App;