import React from 'react'
import Cascade from '../../Cascade'
import BackgroundCard from './../../RecentMovies/Movie/BackgroundCard'
import { getMoviesCardSmallOption } from '../../../constants/styles'
import { getSizeImage } from '../../../helpers'
import NetflixCard from '../../RecentMovies/Movie/NetflixCard'
import EntryTitle from '../EntryTitle'

const BlogMovil = ({ entry }) => {

    const size_image = getSizeImage(entry.presentation, window.screen.width * 0.9, false)
    
    const options = getMoviesCardSmallOption(size_image, 'vertical')

    const show_elements = {
        text : false,
        miniatures : true
    }

    const image_style = {
        width : '100%'
    }

    const actions = [
        {
            title : 'LEER MAS',
            'link' : `blog/${entry.title}`
        }
    ]
    console.log(entry.actions)
    return(
        <>
            <Cascade>
                <NetflixCard
                    orientation = 'vertical'
                    shows = { show_elements }
                    { ...options[0] }
                    height = { `${size_image.height + 180}px` }
                    position = 'static'
                    actions = { actions }
                />

                <EntryTitle
                    title = { entry.title }
                    color = { 'white' }
                    style = {{
                        position : 'absolute',
                        top : 30,
                        left : 30,
                        zIndex : 5
                    }}
                />
                
                <BackgroundCard
                    presentation = { entry.presentation }
                    image_style = { image_style }
                    { ...options[2] }
                    top = '30px'
                />
            </Cascade>
        </>
    )
}

export default BlogMovil 
