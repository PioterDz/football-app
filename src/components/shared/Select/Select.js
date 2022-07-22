import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuid } from 'uuid';

export const SelectComp = ({ selectAttr, items, itemSelected, selectItem }) => {

  const handleChange = (event) => {
    selectItem(event.target.value);
  };

  return (
    <Box sx={{ width: 600 }}>
      <FormControl fullWidth>
        <InputLabel id={selectAttr.labelId}>{selectAttr.label}</InputLabel>
        <Select
          labelId={selectAttr.labelId}
          id={selectAttr.id}
          value={itemSelected || null}
          label={selectAttr.label}
          onChange={handleChange}
        >
            {items.map(item => (
              <MenuItem key={uuid()} value={item.value}>{item.label}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}