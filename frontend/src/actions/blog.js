import { createAction } from 'redux-actions'

import { 

    FETCH_ENTRIES,
    FETCH_ENTRY_CONTENT

} from '../constants/actions';

import { 

    getEntriesApi,
    getEntryContentApi

} from '../api/blog';

export const getEntries = createAction(
    FETCH_ENTRIES,
    getEntriesApi
)

export const getEntryContent = createAction(
    FETCH_ENTRY_CONTENT,
    getEntryContentApi
)