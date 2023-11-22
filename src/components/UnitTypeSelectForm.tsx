import { allUnits } from "../store/units-store";
import { UnitTypeSelect } from "../types/type";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const UnitTypeSelectForm = ({unit,onUnitChange}:{unit:string,onUnitChange:(unit:string)=>void}) => {
  const allUnit = React.useMemo(allUnits, []);
  
  const handleChange =(event:SelectChangeEvent)=>{
    onUnitChange as any as (unit: UnitTypeSelect) => void;
    onUnitChange(event.target.value as UnitTypeSelect);
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-city">Units</InputLabel>
        <Select
          labelId="select-city-label"
          id="select-city-select"
          value={unit}
          label="Unit"
          onChange={handleChange}
        >
          {
            allUnit.map((units) => (<MenuItem  value={units}>{units}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
    </>
  )
}

export default UnitTypeSelectForm