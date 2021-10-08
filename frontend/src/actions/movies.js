import { createAction } from 'redux-actions'

import { 
    getMoviesApi,
    getSeasonsApi,
    fetchingMovies
} from '../api/movies'

import { 
    FETCH_MOVIES,
    FETCH_SEASONS,
    FETCHING_MOVIES,
    SET_CURRENT_MOVIE,
} from '../constants/actions'

export const setMovies = payload => ({
    type : FETCH_MOVIES,
    payload
})

export const getMovies = () => dispatch => {

    const moviesWithImage = []

    const imageOnload = serie => event => {
        moviesWithImage.push({...serie, presentation: event.target})
        dispatch(setMovies(moviesWithImage))
    }

    const seriesPromise = Promise.resolve(getMoviesApi()())

    seriesPromise.then(
        series => {
            series.map(serie => {
                let image = new Image()
                
                image.onload = imageOnload(serie)
                image.src = serie.presentation
            })
    })
    
}

export const fetchingMoviesList = createAction(
    FETCHING_MOVIES,
    fetchingMovies
)

export const getSeasonsFromSerie = createAction(
    FETCH_SEASONS,
    url => getSeasonsApi(url)
)

export const setCurrentMovie = createAction(
    SET_CURRENT_MOVIE,
    current => (current)
)