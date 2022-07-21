import { useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar'
import { SearchResultContainer } from './SearchResultContainer/SearchResultContainer'

export const Home = () => {
    const [country, selectCountry] = useState([]);

    const handleCountriesSelection = (country) => {
        selectCountry(country);
    }

    return (
        <div>
            <SearchBar itemSelected={handleCountriesSelection} />
            {country.code ? <SearchResultContainer country={country} /> : null}
        </div>
    )
}
