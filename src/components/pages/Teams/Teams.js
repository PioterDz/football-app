import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeams } from "../../../services/GetTeams";
import { SelectComp } from "../../shared/Select/Select";
import { SkeletonLoader } from "../../shared/SkeletonLoader/SkeletonLoader";
import { TeamsList } from "./TeamsList/TeamsList";

export const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [season, setSeason] = useState(2021);
    const params = useParams();
    const seasons = [2021,2020,2019];
    const selectAttr = {
        labelId: 'select-season-label',
        label: 'Select season',
        id: 'select-season',
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getTeams(params.leagueId, season);
            setTeams(data.response);
            setLoading(false);
        }
        fetchData();
    }, [params.leagueId, season]);

    const handleItemChange = (item) => {
        setSeason(item);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <SelectComp 
              itemSelected={season} 
              items={seasons.map(season => ({ value: season, label: season }))} 
              selectAttr={selectAttr} 
              selectItem={handleItemChange} 
            />
            {isLoading ? <SkeletonLoader /> : <TeamsList teams={teams} season={season} />}
        </div>
    )
}