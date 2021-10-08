import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


const ImgLoaded = ({ data, children }) => {

    const [image, setImage] = useState(null)

    useEffect(() => {

        const onload = (event) => { setImage(event.target) }
            
        let image = new Image()
        
        image.onload = onload

        image.src = data
        
    })

    return (
        <>
            { image && children(image) }
        </>
    )
}

ImgLoaded.propTypes = {
    data : PropTypes.object.isRequired,
    children : PropTypes.func.isRequired,
}

export default ImgLoaded
