import React from 'react'

import PropTypes from 'prop-types'

const Item = ({ children, style, className }) => (

    <div 
        className = { `${className || 'list-item'} ` }
        style = { style }
    >
        { children }
    </div>

)



Item.propTypes = {
    children : PropTypes.node.isRequired,
    className : PropTypes.string,
}

export default Item
