import React from 'react';
import {ImageItemContainer} from './ImageGalleryItemStyled';

const ImageGalleryItem = ({imgUrl, imgAlt, imgId, largeImg, onClick}) => {
    const onHandleClick = () => {
        onClick({largeImg, imgAlt});
    };

    return (
        <ImageItemContainer>
            <img src={imgUrl} alt={imgAlt} key={imgId} id={imgId} onClick={onHandleClick} className="ImageGalleryItem-image" />
        </ImageItemContainer>
    );
};

export default ImageGalleryItem;