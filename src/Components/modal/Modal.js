import React, {Component} from 'react';
import { ModalContainer } from './ModalStyled';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.onEscapeClose);
        const body = document.querySelector("body");
        body.style.overflow = "hidden"; 
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.onEscapeClose);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    };

    onEscapeClose = (e) => {
        if (e.code === "Escape") {
            this.props.toggleModal();
        }
    };

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
                        <img src={image.largeImg} alt={image.imgAlt}/>
                    </div>
                </div>
            </ModalContainer>
        );
    };
};

export default Modal;

