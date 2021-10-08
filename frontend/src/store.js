import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddelware from 'redux-promise'
import thunkMiddelware from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers, {},
    composeEnhancers(
        applyMiddleware(
            promiseMiddelware,
            thunkMiddelware
        )
    )
)

export default store