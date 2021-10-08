import React, { Component } from 'react'

import RecentMovies from '../components/RecentMovies'

import { connect } from 'react-redux'

import { 
    getMovies
} from '../actions/movies'

import {
    getMovies as selectMovies,
} from '../selectors/movies'

class RecentMoviesContainer extends Component {

    componentDidMount = () => {

        if( !this.props.movies === false ) this.props.getMovies()

    }
    
    render() {
        return (
            <RecentMovies
                id = 'list-recent-movies'
                movies = { this.props.movies }
            />
        )
    }
}

const mapStateToProps = state =>({
    movies : selectMovies(state)
})

const mapDispatchToProps = {
    getMovies
}

export default connect(

    mapStateToProps, 
    mapDispatchToProps

)(RecentMoviesContainer)
