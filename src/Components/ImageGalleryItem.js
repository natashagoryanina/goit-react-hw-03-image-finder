import React from 'react';

const ImageGalleryItem = ({imgUrl, imgAlt}) => {
    return (
        <li className="ImageGalleryItem">
            <img src={imgUrl} alt={imgAlt} className="ImageGalleryItem-image" />
        </li>
    );
}

export default ImageGalleryItem;