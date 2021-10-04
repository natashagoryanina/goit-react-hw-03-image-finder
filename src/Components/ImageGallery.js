import React, {Component} from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const API_KEY = '23294287-f28ad0716a186f6195177ba0b';

class ImageGallery extends Component {
    state = { 
        images: [],
        loading: false
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.image !== this.props.image) {
            console.log('image tag have changed');
            
            this.setState({ loading: true })
            fetch(`https://pixabay.com/api/?q=${this.props.image}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(img => this.setState({images: [...img.hits]}))
            .finally(() => this.setState({loading: false}))
        }
    }
    render() {
        return (
            <ul className="ImageGallery">
                {this.state.images.map((item) => 
                    <ImageGalleryItem imgUrl={item.previewURL} imgAlt={item.tags}/>
                )}
            </ul>
        );
    }
}

export default ImageGallery;

