import { host } from "../constants/api";
import { getCookie } from "./../helpers"
import { fetchLogic } from ".";

const url = `${host}entries`

const headers = new Headers({
    'Content-Type' : 'application-json',
    'X-CSRFToken' : getCookie('csrftoken')
})

const options = {
    method : 'get',
    headers
}

export const getEntriesApi = () => (
    fetchLogic(url, options)
)

export const getEntryContentApi = title => {
    
    const url_entry_content = `${url}/${title}/content`

    return fetchLogic(
        url_entry_content,
        options
    )
}