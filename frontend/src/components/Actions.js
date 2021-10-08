import React from 'react'
import PropTypes from 'prop-types'

import '../statics/css/actions.css'

const getPosition = position => {

    switch(position){
        case 'center'.toUpperCase():
            return '0 auto 0 auto';
        default :
            return '0'
    }
}

const Actions = ({ children, position, style }) => {
    return (
        <div className = 'actions' style = {{ margin : getPosition(position), ...style }}>

            { children }
            
        </div>
    )
}

Actions.propTypes = {
    position : PropTypes.string,
}

Actions.defaultProps = {
    position : 'center'
}

export default Actions
