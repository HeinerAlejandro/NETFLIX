import { host, rest_common } from "../constants/api";
import { fetchLogic, getCustomOptions } from ".";


const url = `${host}${rest_common}registration/`

custom_options = getCustomOptions(
    method = 'post'
)

export const registationApi = () => (
    fetchLogic(url, custom_options)
)

