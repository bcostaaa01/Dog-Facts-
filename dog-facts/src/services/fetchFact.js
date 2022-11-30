import axios from "axios"

export const fetchFact = () => {
    const URL = 'https://dog-api.kinduff.com/api/facts';
    return axios.get(URL);
}