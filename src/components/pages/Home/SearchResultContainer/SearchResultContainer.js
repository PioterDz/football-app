import { useEffect, useState } from 'react';
import { getLeagues } from '../../../../services/GetLeagues';
import { SkeletonLoader } from '../../../shared/SkeletonLoader/SkeletonLoader';
import { CountryCard } from './CountryCard/CountryCard';

export const SearchResultContainer = ({ country }) => {
    const [leagues, setLeagues] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if(country.code) {
                const data = await getLeagues(country.code);
                setLeagues(data.response.map(x => x.league));
                setLoading(false);
            }
        }
        fetchData();
    }, [country]);

    return (
        isLoading ? <SkeletonLoader /> : <CountryCard country={country} leagues={leagues} />
    );
}