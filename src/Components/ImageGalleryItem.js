import React from 'react';

const ImageGalleryItem = ({imgUrl, imgAlt, imgId, onClick}) => {
    return (
        <li className="ImageGalleryItem">
            <img src={imgUrl} alt={imgAlt} key={imgId} id={imgId} onClick={onClick} className="ImageGalleryItem-image" />
        </li>
    );
}

export default ImageGalleryItem;