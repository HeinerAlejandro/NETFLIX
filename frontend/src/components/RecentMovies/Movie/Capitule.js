import React from 'react'
import Card from '../../Card'

import PlayIcon from '../../../statics/images/play.svg'
import { getSizeImage } from '../../../helpers'

const Capitule = ({ capitule }) => {

    const image_size = getSizeImage(capitule.presentation, 70)

    return(
    <Card
        hasShadow = { false }
        className = 'capitule'
    >
        <div
            style = { image_size }
            class = 'content-img-capitule'
        >
            <img
                alt = 'capitule'
                style = { image_size }
                src = { capitule.presentation }
               
            />
            <div 
                style = {{ 
                    ...image_size, 
                    position : 'absolute',
                  
                    left : '6.7px'
                }} 
                class = 'mask'
            >
                <img 
                    alt = 'play'
                    src = { PlayIcon }
                    width = { 30 }
                    style = {{
                        cursor : 'pointer',
                        marginTop : image_size.height/2 - 15,
                        marginLeft : image_size.width/2 - 15,
                    }}
                />
            </div>
        </div>

        <div class = 'content-description-capitule'>
            <h6> { capitule.name } </h6>
            <p> { capitule.description } </p>
        </div>
    </Card>
)
    }

export default Capitule