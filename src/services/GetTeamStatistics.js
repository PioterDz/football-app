import { enviroment } from '../enviroments/enviroment';
import axios from 'axios';

export async function getTeamStatistics(leagueId, teamId, season = 2021) {

    try {
        const config = { headers: enviroment.headers, params: { league: leagueId, team: teamId, season } };
        const response = await axios.get(enviroment.apiUrl + 'teams/statistics', config);
        return response.data.response;
    } catch(error) {
        return console.error(error);
    }
}