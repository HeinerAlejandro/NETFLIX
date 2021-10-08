import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Masonry from 'react-masonry-component'
import Carousel from 'react-multi-carousel'

import Section from '../Section'
import List from '../ListItems'

import MovieContainer from '../../containers/MovieContainer'

import { 
    CarouselOptions, 
    getOrientation, 
    getStylesContainer 
} from '../../constants/styles'

import './styles.css'
import 'react-multi-carousel/lib/styles.css';

class RecentMovies extends Component {

    iterLogic = (movie, index) => {

        //let movie_with_image = { ...movie, presentation : image }

        let orientation = getOrientation(movie.presentation)
        let style = getStylesContainer(movie.presentation, orientation)

        return(
            (window.screen.width > 760) 
                ? <div 
                    key = { index }
                    className = 'movie-item list-item'
                    style = { style }
                >
                    <MovieContainer 
                        movie = { movie }
                        parent_style = { style }
                        orientation = { orientation }
                    />
                </div>
                : <MovieContainer 
                    parent_style = { style }
                    movie = { movie }
                    orientation = { orientation }
                />
        )
    }

    render() {
        
        const isMovil = window.screen.width < 761 ? true : false
        
        return (
            <Section 
                type = { this.props.id || '' }
            >
                
                {this.props.movies && <List
                    wrapped = { isMovil ? Carousel : Masonry }
                    items = { this.props.movies }
                    iterLogic = { this.iterLogic }
                    propsWrapped = {{
                        options : {
                            gutter : 21,
                            columnWidth : 1,
                            horizontalOrder : false,
                        },
                        ...CarouselOptions
                    }}
                /> }

            </Section>
        )
    }
}

RecentMovies.propTypes = {
    movies : PropTypes.array.isRequired,
    id : PropTypes.string.isRequired,

}

RecentMovies.defaultProps = {

    iterLogic : RecentMovies.iterLogic

}

export default RecentMovies
