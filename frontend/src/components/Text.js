import React from 'react'
import PropTypes from 'prop-types'

const getMargin = position => {
    switch (position) {
        case 'none' :
            return '0 20px'
        case 'none-0' :
            return 'none'
        case 'none-y':
            return '0 auto'
        case 'center':
            return 'auto'
        case 'left':
            return 'auto auto auto 0'
        default:
            return '0px 20px 0px 0px'
    }
}

const getStyle = (style, options) => {
    
    var newStyle = {
        ...style,
        fontSize : options.size,
        color : options.color,
        textAlign : options.align,
        margin : getMargin(options.position),
        width : options.width,
        fontWeight : options.weight,
        height : options.height
    }
    

    return newStyle

}

const getTagForTypeText = (type, text, style) => (
    type === 'principal'
        ? <h1 style = { style } className = 'text text-1'>{ text }</h1>
        : <p style = { style } className = 'text text-2'>{ text }</p>
)

const Text = ({ type, text, style, ...options }) => (
    getTagForTypeText(type, text, getStyle(style, options)) 
)

Text.defaultProps = {
    size : '2em',
    color : 'white',
    position : 'center',
    width : 'auto',
    align : 'justify'
}

Text.propTypes = {
    text : PropTypes.string.isRequired,
    style : PropTypes.object,
    type : PropTypes.string.isRequired,
    position : PropTypes.string,
    size : PropTypes.string,
    color : PropTypes.string,
    width : PropTypes.string,
    align : PropTypes.string,
}

export default Text