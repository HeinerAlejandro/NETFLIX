import React, { Component } from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import {
    getCurrentMovie as selectCurrentMovie
} from '../selectors/movies'

import { 
    getSeasonsFromSerie,
    setCurrentMovie
} from '../actions/movies'
import { Movie } from '../components/RecentMovies/Movie'
import { calculateDirCardCap } from '../constants/styles'

class MovieContainer extends Component {

    handleHoverFilledCard = (movie, isHover = true) => event => {

        //event.stopPropagation()

        if(typeof movie.seasons === 'string'){
            this.props.getSeasonsFromSerie(movie.seasons)
            this.props.setCurrentMovie({
                movie : movie.name, season : null, capitule : null, hover : isHover, capVerticalDir : calculateDirCardCap(
                    event.target, '.movie-item', '.card-cap'
                )
            }) 
        }else 
            this.props.setCurrentMovie({
                movie : movie.name, season : this.props.current_movie.season, capitule : null, hover : isHover, capVerticalDir : calculateDirCardCap(
                    event.target, '.movie-item', '.card-cap'
                )
            })

            let more_visible = document.querySelector('.more-visible')
            if(more_visible) more_visible.classList.remove('more-visible')
            event.target.closest('.movie-item').classList.add('more-visible')
    }

    handleOnMouseExitFilledCard = movie => event => { 

        event.stopPropagation()
        
        this.props.setCurrentMovie({
            movie : movie.name, season : this.props.current_movie.season, capitule : null, hover : false
        })
    }

    handleClickSeason = season => event => {

        this.props.setCurrentMovie({
            season : season, capitule : null, hover : false
        })

        const target = event.target

        let movieContainer = target.closest('.movie-item')

        this.props.setCurrentMovie(
            {
                capVerticalDir : calculateDirCardCap(target, '.movie-item', '.card-cap')
            }
        )    

        movieContainer.className = classnames({
            'more-visible' : true,
            'list-item' : true,
            'movie-item' : true
        })
    }

    handleClickMiniature = event => {
       
        this.handleHoverFilledCard(this.props.movie, false)(event)

        let targetClassName = {}
        let cardClassName = {}

        let target = event.target 

        if(!target.className.includes('rotate')){

            targetClassName = {
                'icon-filled-card' : true,
                'rotate' : true
            } 

            cardClassName = {
                'card-netflix' : true,
                'card-open' : true,
                'card-filled' : true,
                'padding-movie' : true
            }
        }else{
            
            targetClassName = {
                'icon-filled-card' : true
            } 
            cardClassName = {
                'card-netflix' : true,
                'card-filled' : true,
                'padding-movie' : true
            }

        }
           
            
        target.className = classnames(targetClassName)

        let cardFilled = target.closest('.card-filled')

        cardFilled.className = classnames(cardClassName)

        let filledsOpen = document.querySelectorAll('.card-open')
        let capsOpen = document.querySelectorAll('.card-cap-open')
        let season = event.target.closest('.movie-item').querySelector('.season-selected')

        if(season) season.classList.remove('season-selected')
        if(filledsOpen.length > 0){
            filledsOpen.forEach(card => {
                if(card !== cardFilled){
                    card.querySelector('.icon-filled-card').classList.remove('rotate')
                    card.classList.remove('card-open')
                }
            })
        }

        if(capsOpen.length > 0)
            capsOpen.forEach((card) => card.classList.remove('card-cap-open'))
    }

    handleClickCloseCapCard = movie => event => {
        event.target.closest('.card-cap').classList.remove('card-cap-open')
        this.props.setCurrentMovie(
            {
                season : null
            }
        )
        
        let season = event.target.closest('.movie-item').querySelector('.season-selected')
        if(season) season.classList.remove('season-selected')
    }

    render() {
        return (
            <Movie
                parent_style = { this.props.parent_style }
                movie = { this.props.movie }
                current = { (this.props.current_movie.movie === this.props.movie.name && this.props.current_movie) || null }
                handleHover = { this.handleHoverFilledCard }
                handleOnNotHover = { this.handleOnMouseExitFilledCard }ç
                handleClickMiniature = { this.handleClickMiniature }
                handleClickClose = { this.handleClickCloseCapCard }
                orientation = { this.props.orientation }
                handleClick = { this.handleClickSeason }
            />
        )
    }
}

const mapStateToProps = state =>({
    current_movie : selectCurrentMovie(state)
})

const mapDispatchToProps = {
    getSeasonsFromSerie,
    setCurrentMovie
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer)
