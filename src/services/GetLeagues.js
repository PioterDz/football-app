import { enviroment } from '../enviroments/enviroment';
import axios from 'axios';

export async function getLeagues(code) {

    try {
        const config = { headers: enviroment.headers, params: { code } };
        const response = await axios.get(enviroment.apiUrl + 'leagues', config);
        return response.data;
    } catch(error) {
        return console.error(error);
    }
}