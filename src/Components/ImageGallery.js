import React, {Component} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ImageGalleryItem from './ImageGalleryItem';
import galleryAPI from '../services/gallery-api';
import Button from './Button';
import Modal from './Modal';

class ImageGallery extends Component {
    state = { 
        images: [],
        error: null,
        status: 'idle',
        page: 1,
        isModalOpen: false,
        targetImg: {}
    }

    componentDidUpdate(prevProps, prevState) {
        const prevImg = prevProps.image;
        const nextImg = this.props.image;

        if (prevImg !== nextImg) {
            this.loadImages(nextImg);
        }
    }

    loadImages = (nextImg) => {
        this.setState({ status: 'pending', page: 1})
            
        galleryAPI
            .fetchGallery(nextImg, this.state.page)
            .then(img => this.setState((prev)=> 
                ({images: [...img.hits], status: 'resolved', page: prev.page+1})
            ))
            .catch(error => this.setState({error, status: 'rejected'}));
    };

    loadMore = () => {
        const nextImg = this.props.image;
        galleryAPI
            .fetchGallery(nextImg, this.state.page)
            .then(img => this.setState((prev)=> 
                ({images: [...prev.images, ...img.hits], status: 'resolved', page: prev.page+1})
            ));
    };

    toggleModal = (e) => {
        const id = e.currentTarget.id;
        const targetElement = this.state.images.find((item) => item.id == id);
        console.log(targetElement);
        this.setState((prev) => ({
          isModalOpen: !prev.isModalOpen,
          targetImg: {...targetElement}
        }));
    };


    render() {
        const {images, error, status, isModalOpen, targetImg} = this.state;

        if(status === 'idle') {
            return <div>Enter an image tag, please.</div>;
        };

        if(status === 'pending') {
            return <Loader
                type="ThreeDots"
                color="#777879"
                height={100}
                width={100}
                timeout={3000} 
            />;
        };

        if(status === 'rejected') {
            return <h3>{error.message}</h3>;
        };

        if(status === 'resolved') {
            return (
                <>
                <ul className="ImageGallery">
                    {images.map((item) => 
                        <ImageGalleryItem imgUrl={item.webformatURL} imgAlt={item.tags} 
                        imgId={item.id} onClick={this.toggleModal}/>
                    )}
                </ul>
                <Button onClick={this.loadMore}></Button>
                {isModalOpen && <Modal image={targetImg}/>}
                </>
            );
        };
    }
}

export default ImageGallery;

