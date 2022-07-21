import { useEffect, useState } from "react";
import { getCountries } from "../../../../services/GetCountries";
import { Typeahead } from "../../../shared/Typeahead/Typeahead"

export const SearchBar = ({ itemSelected }) => {
    const [countries, setCountries] = useState([]);

    const handleItemSelection = (country) => {
        itemSelected(country);
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
            <Typeahead options={countries} handleSelection={handleItemSelection} />
        </div>
    )
}