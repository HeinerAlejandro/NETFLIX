import React from 'react'

import BackgroundCard from '../RecentMovies/Movie/BackgroundCard'

import header_image from '../../statics/images/register-netflix.svg'

const ImageRegisterSection = props => {

    let image = new Image()
    image.src = header_image

    const styles_image = {
        marginLeft : '65px'
    }

    return (
        <div>
            <BackgroundCard 
                width = '55vw'
                height = '400px'
                presentation = { null }
                image_style = { styles_image }
                position = 'absolute'
                force = { 1 }
                clipPath = 'Polygon(0% 0%, 100% 0, 75% 100%, 0% 100%)'
                text = {
                    {
                        text : {
                            text : 'REGISTRATE',
                            options : {
                                size : '5em',
                                color : 'red',
                                weight : 'bolder',
                                height : '120px'
                            }
                        },
                        subtext : { 
                            text : 'Disfruta lo mejor de nosotros',
                            options : {
                                size : '2em',
                                color : 'red',
                                weight : 'bolder',
                                height : '50px',
                                position : 'none-y'
                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default ImageRegisterSection
