import { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { v4 as uuid } from 'uuid';

export const Typeahead = ({ options, handleSelection }) => {
  const [value, setValue] = useState(null);

  function handleValueChange(newValue) {
    setValue(newValue);
    handleSelection(newValue);
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => handleValueChange(newValue)}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={uuid()}
      options={options}
      getOptionLabel={option => option.name}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ 
        width: 600,
        color: 'primary',
     }}
      renderInput={(params) => (
        <TextField {...params} label="Search country" />
      )}
    />
  );
}
