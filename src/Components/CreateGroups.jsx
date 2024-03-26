import { Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const CreateGroups = ({table}) => {
  const [colHeaderName, setColHeaderName] = useState('');

  const handleChange = (event) => {
    setColHeaderName(event.target.value);
  };

  const handleClearGrouping = () => {
    setColHeaderName('')
  }
  console.log('clear', colHeaderName, table);
  
  return (
    <>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colHeaderName}
          onChange={handleChange}
        >
          <MenuItem value={'Category'}>Category</MenuItem>
          <MenuItem value={'Subcategory'}>Subcategory</MenuItem>
        </Select>
      </FormControl>

      <Stack  paddingTop={12}>
      <Button sx={{ height: '45px' }} variant="outlined"
      onClick={handleClearGrouping}
        >Clear sort</Button>
      </Stack>
    </>
  );
};

export default CreateGroups;