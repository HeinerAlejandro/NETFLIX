import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const getStylesDefault = options => ({
    color : options.color,
    fontSize : options.textSize,
    backgroundColor : options.fill,
    border : options.strongBorder === 0 ? 'none' : options.strongBorder + ' solid ' + options.color,
    width : options.width,
    alignSelf : options.align,
    margin : options.margin
})

const stylesForTypeButton = {
    rounded(options) {
        return { 
            borderRadius : '5px',
            ...getStylesDefault(options)
        }
    },
    rect(options){
        return{
            ...getStylesDefault(options)
        }
        
    }
}

const getStyleForOptions = options => stylesForTypeButton[options.type](options)


const getStyleForHover = (options) => {

    let style = {
        color: 'transparent',
        fill : options.color
    }

    const newStyle = getStyleForOptions(style)

    return newStyle
}

const NetflixButton = ({ 
        click, text, link, handleClick, disabled, 
        className, onClick,
        ...styleOptions }) => {
    
    const props = {
        className,
        onClick,
        style :  getStyleForOptions(styleOptions),
    }

    return (

        <Link
            to = { link }
        >
            <button 
                { ...props }
                className = { disabled ? `${props.className} button-disable` : props.className }
                type = 'button'
                onClick = { click }
                disabled = { disabled }
            >
                { text }
            </button>
        </Link>
    )
}

NetflixButton.defaultProps = {
    className : 'button',
    textSize : '15px',
    type : 'rect',
    strongBorder : '1px',
    width : 'auto',
    fill : 'transparent',
    align : 'center',
    href : false,
    disabled : false
}

NetflixButton.propTypes = {
    click : PropTypes.func.isRequired,
    change : PropTypes.func,
    type : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    fill : PropTypes.string,
    text : PropTypes.string.isRequired,
    textSize : PropTypes.string,
    width : PropTypes.string,
    strongBorder : PropTypes.string | PropTypes.number,
    alig : PropTypes.string,
    href : PropTypes.bool,
    link : PropTypes.string,
    margin : PropTypes.string,
    disabled : PropTypes.bool
}

export default NetflixButton
