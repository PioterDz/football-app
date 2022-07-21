import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeams } from "../../../services/GetTeams";
import { SelectComp } from "../../shared/Select/Select";
import { TeamsList } from "./TeamsList/TeamsList";

export const Teams = () => {
    const [teams, setTeams] = useState([]);
    const params = useParams();
    const seasons = [2021,2020,2019];
    const selectAttr = {
        labelId: 'select-season-label',
        label: 'Select season',
        id: 'select-season',
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getTeams(params.leagueId);
            console.log(data);
            setTeams(data.response);
        }
        fetchData();
    }, [params.leagueId]);

    return (
        <div>
            <SelectComp items={seasons.map(season => ({ value: season, label: season }))} selectAttr={selectAttr} />
            <TeamsList teams={teams} league={params.leagueId} /> 
        </div>
    )
}