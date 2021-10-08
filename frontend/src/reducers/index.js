import { combineReducers } from 'redux'

import { 
    moviesReducer as movies,
    currentMovieReducer as current_movie
} from './movies'

import { blogReducer as blog } from './blog'

import { userReducer as user } from './user'

const reducer = combineReducers({
    movies,
    blog,
    current_movie,
    user
})

export default reducer