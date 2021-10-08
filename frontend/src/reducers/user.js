import { handleActions } from 'redux-actions'

import { USER } from "../constants/actions"

const setUser = (state, action) => ({...state, ...action.payload})

export const userReducer = handleActions(
	{
		[USER] : setUser
	},
	{}
)

