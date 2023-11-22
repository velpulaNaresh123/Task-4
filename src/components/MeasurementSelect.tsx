import { useContext, useMemo, useState } from "react"
import UnitContext from "../context/unitContext";
import { UnitTypeSelect } from "../types/type";
import { allSubUnits,unitsGenerator } from "../store/units-store";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SubUnitSelect from "./ConvertingTypeUnit";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const MeasurementSelect = () => {
    const {selectedUnit}=useContext(UnitContext);
    
    const [firstSelectedUnit,setFirstSelectedUnit]=useState('');
    const [secondSelectedUnit,setSecondSelectedUnit]=useState('');

    const [inputValueFirst,setInputValueFirst]=useState<any>()
    const [inputValueSecond,setInputValueSecond]=useState<any>()

    let units = useMemo(() => {
        return selectedUnit ? allSubUnits(selectedUnit as UnitTypeSelect) : [];
    }, [selectedUnit]);

    function handleUnitOneChange(unit: string) {
        setFirstSelectedUnit(unit);
    }

    function handleUniTwoChange(unit: string) {
        setSecondSelectedUnit(unit);
    }

    function handleInputOneChange(input: number){
        setInputValueFirst(input);
    }

    function handleInputTwoChange(input: number){
        setInputValueSecond(input)
    }
    const result1 = useMemo(() => unitsGenerator(inputValueFirst, firstSelectedUnit, secondSelectedUnit), [inputValueFirst, firstSelectedUnit, secondSelectedUnit]);
    const result2 = useMemo(() => unitsGenerator(inputValueSecond, secondSelectedUnit,firstSelectedUnit), [inputValueSecond, secondSelectedUnit, firstSelectedUnit]);

    return (
    <>
       <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                    <SubUnitSelect units={units} selected={firstSelectedUnit} onUnitChange={handleUnitOneChange}  onInputChange={handleInputOneChange} data={result2} />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                    <SubUnitSelect units={units} selected={secondSelectedUnit} onUnitChange={handleUniTwoChange}  onInputChange={handleInputTwoChange} data={result1} />
                    </Item>
                </Grid>
            </Grid>
        </Paper>
    </>
  )
}


export default MeasurementSelect
