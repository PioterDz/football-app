import { useEffect, useState } from "react";
import { getCountries } from "../../../../services/GetCountries";
import { Typeahead } from "../../../shared/Typeahead/Typeahead"

export const SearchBar = () => {
    const [countries, setCountries] = useState([]);
    const [countrySelected, selectCountry] = useState([]);

    const handleCountrySelection = (country) => {
        selectCountry(country);
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getCountries();
            setCountries(data.response);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Typeahead options={countries} handleItemSelection={handleCountrySelection} />
        </div>
    )
}