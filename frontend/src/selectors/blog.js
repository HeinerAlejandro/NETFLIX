import { createSelector } from 'reselect'

const getEntries = createSelector(
    state => ( state.blog ),
    entries => (entries)
)

const getEntry = createSelector(
    (state, title) => (
        state.blog.find(
            entry => entry.title === title
        )
    ),
    entry => (entry)
)

export{
    getEntries,
    getEntry
}