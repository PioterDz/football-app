import { enviroment } from '../enviroments/enviroment';
import axios from 'axios';

export async function getTeams(leagueId, season) {

    try {
        const config = { headers: enviroment.headers, params: { league: leagueId, season } };
        const response = await axios.get(enviroment.apiUrl + 'teams', config);
        return response.data
    } catch(error) {
        return console.error(error);
    }
}

