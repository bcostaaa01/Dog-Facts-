import axios from "axios"

export const fetchImg = () => {
    const URL = 'https://random.dog/woof.json'
    return axios.get(URL)
}