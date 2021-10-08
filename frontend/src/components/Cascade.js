import React, {
    
    Children,
    cloneElement
    
} from 'react'

import PropTypes from 'prop-types'

const proccessChildren = children => (

    orientation => {

        const arrayChildren = Children.toArray(children).sort(
            (a, b) => {
                if(a.props.order < b.props.order) return -1
                else if(a.props.order > b.props.order) return 1
                else return 0
            }
        )

        
        var advance = 0

        const dataOrientation = orientation === 'vertical' 
            ? 'top'
            : 'left'

        const newChildren = arrayChildren.map(
            (child, index) => {
                
                const position = child.props.position || index !== 0 && (orientation === 'vertical' || orientation === 'horizontal')
                        ? 'absolute'    
                        :'static'

                let element = cloneElement(child, {
                    style : {       
                        position : position,
                        [dataOrientation] : `${advance}px`,
                        ...child.props.style,
                    }
                })   
                
                if( !child.props.paused ) advance = advance + 80
                
                return element
            }
        )

        return newChildren

    }
)

const Cascade = ({ children, orientation }) => {
    return (
        <>
            { proccessChildren(children)(orientation) }
        </>
    )
}


Cascade.defaultProps = {
    orientation : 'vertical'
}

Cascade.propTypes = {
    orientation : PropTypes.string,
}



export default Cascade
