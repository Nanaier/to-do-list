import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Status } from '../../types/Task';

export default function BasicSelect(props:{status: Status, setStatus: React.Dispatch<React.SetStateAction<Status>>}) {

  const handleChange = (event: SelectChangeEvent) => {
    props.setStatus(event.target.value as Status);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select">Status</InputLabel>
        <Select
          labelId="simple-select"
          id="simple-select-id"
          value={props.status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={"planned"}>Planned</MenuItem>
          <MenuItem value={"in-progress"}>In Progress</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}