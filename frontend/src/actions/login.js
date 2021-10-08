import { createAction } from 'redux-actions'
import { loginApi } from '../api/login'
import { USER } from '../constants/actions'

export const doLogin = () => dispatch => {
	
	dispatch({
		type: USER, 
		loginApi
	})
}
   
