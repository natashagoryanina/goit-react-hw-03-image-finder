import React from 'react';

const Modal = ({image}) => {
    return (
        <div className="Overlay">
            <div className="Modal">
                <img src={image.largeImageURL} alt={image.tags} key={image.id}/>
            </div>
        </div>
    );
};

export default Modal;

