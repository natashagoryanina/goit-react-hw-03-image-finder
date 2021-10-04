import React, {Component} from 'react';
import { ModalContainer } from './ModalStyled';

class Modal extends Component {

    closeModal = (e) => {
        if(e.target === e.currentTarget) {
            const overlay = document.querySelector('.Overlay');
            overlay.style.opacity = '0';
            this.props.toggleModal();
        };
    };

    render() {
        const {image} = this.props;
        return (
            <ModalContainer>
                <div className="Overlay" onClick={this.closeModal}>
                    <div className="Modal">
                        <img src={image.largeImageURL} alt={image.tags} key={image.id}/>
                    </div>
                </div>
            </ModalContainer>
        );
    };
};

export default Modal;
