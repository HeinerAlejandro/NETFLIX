import React from 'react'

import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

const ImgCard = ({ image, style, className, paused = true }) => (
    <VisibilitySensor>
       <Img
            className = { className }
            src = { image }
            style = { style }
        />
    </VisibilitySensor>
    
)

export default ImgCard
