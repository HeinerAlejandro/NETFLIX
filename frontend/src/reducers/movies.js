import { handleActions } from 'redux-actions'
import {
    FETCH_MOVIES,
    SET_CURRENT_MOVIE
} from '../constants/actions'

import {
    getSeasonsFromSerie
} from '../actions/movies'

import { logicReduceDefault } from '../helpers'

const defaultValue = []

const movies = (state, action) => {
    return [...action.payload]
}

const seasons = (state, action) => {
    
    const initialValue = []
    const { serie, seasons } = action.payload
    
    const fields = {
        compare : 'name',
        modify : 'seasons'
    }

    const values = {
        compare : serie, 
        modify : seasons
    }
    
    const series = state.reduce(
        logicReduceDefault(fields, values),
        initialValue
    )
    
    return [ ...series ]
}

export const moviesReducer = handleActions(
    {
        [FETCH_MOVIES] : movies,
        [getSeasonsFromSerie] : seasons,
    },
    defaultValue
)

const currentMovie = (state, action) => (
    {
        ...state,
        ...action.payload
    }
)

export const currentMovieReducer = handleActions(
    {
        [SET_CURRENT_MOVIE] : currentMovie
    },
    {
        movie : null,
        season : null,
        capitule : null,
        hover : false,
        capVerticalDir : 'right'
    }
)