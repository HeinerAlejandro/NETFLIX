import { createSelector } from 'reselect'

export const getMovies = createSelector(
    state => (state.movies),
    movies => (movies)
)

export const getCurrentMovie = createSelector(
    state => state.current_movie ,
    current_movie => current_movie
)