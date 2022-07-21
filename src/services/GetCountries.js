import { enviroment } from '../enviroments/enviroment';
import axios from 'axios';

export async function getCountries() {

    try {
        const config = { headers: enviroment.headers };
        const response = await axios.get(enviroment.apiUrl + 'countries', config);
        return response.data;
    } catch(error) {
        return console.error(error);
    }
}
