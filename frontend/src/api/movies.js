import { fetchLogic } from '.'
import { host } from '../constants/api'

const url = `${host}series/`

const getQueryStrings = q => (
    Object.keys(q).map(key => key + '=' + q[key]).join('&')
)

export const getMoviesApi = (queryStringsJson = {}) => () => {
    
    const queryStrings = getQueryStrings(queryStringsJson)

    return fetchLogic(
        url + queryStrings
    )
}

export const fetchingMovies = payload => (payload)

export const getSeasonsApi = url => (
    fetchLogic(url)
)