import React from 'react'

import { useMediaQuery } from 'react-responsive'

import Cascade from '../../Cascade'

import { getSizeImage, findData } from '../../../helpers'

import { 
    getMoviesCardLargeOption,
    getMoviesCardSmallOption,
} from '../../../constants/styles'

import NetflixCard from './NetflixCard'
import FilledCard from './FilledCard'
import BackgroundCard from './BackgroundCard'
import CapitulesCard from './CapitulesCard'

export const Movie = (
    { 
        movie,
        parent_style,
        current,
        orientation, 
        handleHover,
        handleOnNotHover,
        handleClickClose,
        handleClickMiniature,
        handleClick }) => {
        
   
        let image = null
        var sizeImage = null
        var options = []
        let image_style = null
        let show_elements = {
            text : true,
            miniatures : true
        }
        
        const isDesktopOrLaptop = useMediaQuery({
            query : '(min-device-width : 761px)'
        })

        const isTabletOrMobileDevice = useMediaQuery({
            query: '(max-device-width: 760px)'
        })

        image = movie.presentation
            
        if(isDesktopOrLaptop){
    
            sizeImage = getSizeImage(image, null, false)

            options = getMoviesCardLargeOption(sizeImage, movie, orientation)
        }

        if(isTabletOrMobileDevice){
            
            sizeImage = getSizeImage(image, window.screen.width * 0.9, false)

            options = getMoviesCardSmallOption(sizeImage, orientation)

            image_style = {
                width : '100%'
            }       
            
            show_elements = {
                text : false,
                miniatures : true
            }
        }
        
    return (
        (
            <Cascade
                orientation = { orientation }
            >
        
                <NetflixCard
                    orientation = { orientation }
                    parent_style = { parent_style }
                    shows = { show_elements }
                    optionsLogo = {{
                        top : orientation === 'vertical' ? sizeImage.height + 270 : 280,
                        left :  250
                    }}
                    { ...options[0] }
                />

                <FilledCard 
                    movie = { movie }
                    current = { current }
                    isTabletOrMobile = { isTabletOrMobileDevice }
                    orientation = { orientation }
                    handleClickMiniature = { handleClickMiniature }
                    handleHover = { handleHover }
                    handleOnNotHover = { handleOnNotHover }
                    handleClick = { handleClick }
                    { ...options[1] }
                />

                <CapitulesCard
                    movie = { movie }
                    current = { current }
                    orientation = { orientation }
                    handleClickClose = { handleClickClose(movie) }
                    capitules = { 
                        current
                        && current.movie
                        && current.season
                        && current.movie === movie.name
                        && findData(
                            movie.seasons,
                            'name',
                            current.season,
                            'capitules'
                        ) 
                    }
                    { ...options[3] }
                />

                <BackgroundCard 
                    presentation = { movie.presentation }
                    image_style = { image_style }
                    { ...options[2] }
                />
            
            </Cascade> )
        
        
    ) 
}
