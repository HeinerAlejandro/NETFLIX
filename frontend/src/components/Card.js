import React from 'react'

import PropTypes from 'prop-types'
import '../statics/css/card.css'
import { getDefaultShadow } from '../helpers'

import logo from '../statics/images/logo.png'

const getShadow = (hasShadow, shadow) => {
    if(hasShadow){
        if(shadow) return shadow
    }

    return null
}

const getStyle = (style, options) => (
    {
        ...style,
        ...options,
        backgroundColor : options.fill || null,
        backgroundImage : options.bgImage ? `url(${options.bgImage})` : null,
        boxShadow : getShadow(options.hasShadow, options.shadow),
        zIndex : options.force || null,
        justifyContent : options.justify || null,
        flexDirection : options.direction || null,
        alignItems : options.align || null,
        clipPath : options.clipPath || null
    }
)

const Card = ({ style, children, className, onHover, onNotHover, onClick, withLogo, optsLogo, ...options }) => (
    <div
        onMouseEnter = { onHover }
        onMouseLeave = { onNotHover }
        onClick = { onClick }
        style = { getStyle(style, options) }
        className = { `card-netflix ${className || ''}` } 
    >   
        { withLogo && <div className = 'text-center mb-4'><img alt = 'Logo Netflix' style = { optsLogo } width = { 150 } src = { logo } /></div> }

        { children }
            
    </div>
)


Card.propTypes = {
    style : PropTypes.object,
    children : PropTypes.node,
    paused : PropTypes.bool,
    shadow : PropTypes.string || PropTypes.number,
    hasShadow : PropTypes.bool,
    fill : PropTypes.string,
    bgImage : PropTypes.string,
    force : PropTypes.number,
    justify : PropTypes.string,
    align : PropTypes.string,
    direction : PropTypes.string,
    position : PropTypes.string,
    top : PropTypes.string,
    bottom : PropTypes.string,
    left : PropTypes.string || PropTypes.number,
    right : PropTypes.string || PropTypes.number,
    order : PropTypes.number,
    onHover : PropTypes.func,
    handleOnNotHover : PropTypes.func,
    withLogo : PropTypes.bool,
    clipPath : PropTypes.string, 
    optsLogo : PropTypes.object
}

Card.defaultProps = {
    hasShadow : true,
    shadow : getDefaultShadow(),
    order : 0,
    withLogo : false,
    optsLogo : {}
}


export default Card
