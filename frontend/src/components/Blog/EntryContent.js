import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../modal'

const EntryContent = ({
    isOpen,
    header,
    content,
    footer
}) => {
    return (
        <div>
            <Modal 
                isOpen = { isOpen }
                header = {  header }
                body = { content }
                footer = { footer }
            />
        </div>
    ) 
}

EntryContent.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    header : PropTypes.func.isRequired,
    content : PropTypes.func.isRequired,
    footer : PropTypes.func,
}

export default EntryContent