import { host, rest_common } from "../constants/api";
import { fetchLogic, getCustomOptions } from ".";


const url = `${host}${rest_common}login/`

const custom_options = getCustomOptions({ method:'post' })

export const loginApi = (response) => {

	const json = response.json()

	const opSuccess = response => {

		if (response.ok) {
			
			localStorage.setItem(
				{ ...json }
			)

		} else 
			throw json
	}

	const opError = response => {

	}

    return fetchLogic(url, custom_options)
}


