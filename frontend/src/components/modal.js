import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'
import close from './../statics/images/close.svg'
import logo from './../statics/images/logo.png'

import { 
    Modal,
    ModalHeader as Header,
    ModalBody as Body,
    ModalFooter as Footer
} from 'reactstrap'

const modal = (
    { children, isOpen, header, body, footer, classname }) => {
    
    const modal_container = document.getElementById('modal')

    return (
        createPortal(
            <Modal 
                isOpen = { isOpen }
                contentClassName = { classname }
            >
                <div class = 'close-icon'>
                    <Link to = '/'>
                        <img alt = 'close' src = { close } />
                    </Link>
                </div>
                
                <div className = 'text-center mb-4'><img alt = 'logo netflix' width = { 150 } src = { logo } /></div>

                <Header>
                    { header() }
                </Header>

                <Body>
                    { body() }
                </Body>
            
                <Footer>
                    { footer() }
                </Footer>
            </Modal>,
            modal_container
        )
    )
}


modal.propTypes = {
    header : PropTypes.func,
    body : PropTypes.func.isRequired,
    footer : PropTypes.func,
    isOpen : PropTypes.bool
}

modal.defaultProps = {
    isOpen : false
}

export default modal
