// Dependencies
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// Styled
import { Overlay, Container, Header, Body, Footer } from './style';

const Modal = (props) => {
    const {
        buttons,
        color,
        content,
        show,
        title,
    } = props;

    if (typeof show === 'undefined' || show === false) {
        return '';
    }

    return (
        createPortal(
            <Overlay>
                <Container color={ color }>
                    <Header>{ title }</Header>
                    <Body>{ content }</Body>
                    <Footer>{ buttons }</Footer>
                </Container>
            </Overlay>
            ,
            document.body
        )
    )
}

Modal.propTypes = {
    buttons: PropTypes.node,
    color: PropTypes.string,
    content: PropTypes.node,
    footer: PropTypes.node,
}

Modal.defaultProps = {
    color: '#FFFFFF',
    show: false,
};

export default Modal;