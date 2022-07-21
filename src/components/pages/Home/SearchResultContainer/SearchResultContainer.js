import { useEffect, useState } from 'react';
import { getLeagues } from '../../../../services/GetLeagues';
import { SkeletonLoader } from '../../../shared/SkeletonLoader/SkeletonLoader';
import { CountryCard } from './CountryCard/CountryCard';

export const SearchResultContainer = ({ country }) => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if(country.code) {
                const data = await getLeagues(country.code);
                console.log(data.response);
                setLeagues(data.response.map(x => x.league))
            }
        }
        fetchData();
    }, [country]);

    return (
        leagues.length > 0 ? <CountryCard country={country} leagues={leagues} /> : <SkeletonLoader />
    )
}