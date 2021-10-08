import { getCookie } from "../helpers"

const opErrorDefault = response => (
    response.json()
)

const opSuccessDefault = response => (
    response.json()
)

export const defaultOptions = {
    method : 'get',
    headers : {
        'Content-Type' : 'application-json',
        'X-CSRFToken' : getCookie('csrftoken')
    }
}

export const getCustomOptions = custom_options => (
    {
        ...defaultOptions,
        ...custom_options
    }
)

export const fetchLogic = (url, options = defaultOptions, opSuccess = opSuccessDefault, opError = opErrorDefault) => (
    fetch(url, options)
        .then( opSuccess )
        .catch( opError )
)