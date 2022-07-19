import { enviroment } from '../enviroments/enviroment';

const axios = require('axios');

export async function getCountries() {

    try {
        const config = {
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_VERSION_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_VERSION_API_HOST
            }
        }
        const response = await axios.get(enviroment.apiUrl + 'countries', config);
        return response.data;
    } catch(error) {
        return console.error(error);
    }
}
