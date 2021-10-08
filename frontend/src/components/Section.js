import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ type, children, style, classname }) => {
    return (
        <div 
            id = { type }
            style = { style }
            className = { 'section ' + classname || '' }>

            { children }

        </div>
    )
}

Section.defaultProps = {
    style : {}
}

Section.propTypes = {
    type : PropTypes.string.isRequired,
    children : PropTypes.node.isRequired,
}

export default Section
