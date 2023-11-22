// App.js

import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MeasurementSelect from './components/MeasurementSelect';
import UnitContext from './context/unitContext';
import UnitTypeSelectForm from "./components/UnitTypeSelectForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('');

  function handleUnitChange(unit: string) {
    setSelectedUnit(unit);
  }

  return (
    <UnitContext.Provider value={{ selectedUnit }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item></Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <UnitTypeSelectForm unit={selectedUnit} onUnitChange={handleUnitChange} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              {selectedUnit && <MeasurementSelect />}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </UnitContext.Provider>
  );
}

export default App;
