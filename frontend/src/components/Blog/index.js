import React from 'react'
import PropTypes from 'prop-types'

import { useMediaQuery } from 'react-responsive'

import Section from '../Section'
import BlogDesktop from './BlogDesktop'
import BlogMovil from './BlogMovil/index'

import ImageLoaded from './../ImgLoaded'

import './styles.css'

const stylesDefault = {
    width : '100vw',
    height : 'auto'
}

const Blog =  props => {

    const isDesktop = useMediaQuery({
        query : '(min-device-width : 760px)'
    })

    return (         
        <Section
            type = 'blog'
            style = { stylesDefault }
            classname = 'section-padding'
        >
            
            { 
                props.entry && (
                    isDesktop && <BlogDesktop { ...props } /> |
                    (
                        <ImageLoaded data = { props.entry.presentation }>
                            { image => (
                                <BlogMovil 
                                    { ...props } 
                                    entry = {{ ...props.entry, presentation : image }}
                                />
                             )
                            }
                        </ImageLoaded>
                    )
                )
            }

        </Section>   
    )
}


Blog.propTypes = {
    entry : PropTypes.object.isRequired,
    isOpenEntry : PropTypes.bool.isRequired,
    handleClickAction : PropTypes.func.isRequired
}

export default Blog
