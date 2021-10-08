import { handleActions } from 'redux-actions'

import {
    getEntries,
    getEntryContent
} from '../actions/blog'
import { logicReduceDefault } from '../helpers'

const defaultValue = []

const entries = (state, action) => (
    [ ...state, ...action.payload ]  
)

const entry_content = (state, action) => {

    const { title, content } = action.payload

    const fields = {
        compare : 'title',
        modify : 'content'
    }

    const values = {
        compare : title, 
        modify : content
    }

    const entriesUpdated = state.reduce(
        logicReduceDefault(fields, values),
        []
    )
    
    return entriesUpdated
    
}

 

export const blogReducer = handleActions({
    [getEntries] : entries,
    [getEntryContent] : entry_content
}, defaultValue)