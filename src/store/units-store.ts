import { UnitTypeSelect, UnitFeild } from "../types/type";

const AllData={
    "Temparature":{
        "Celcius":{name:"celcius"},
        "Fahrenheit":{name:"fahrenheit"}
    },
    "Length":{
        "CentiMeter":{name:"centimeter"},
        "MilliMeter":{name:"millimeter"}
    }
}

export function allUnits(){
    return Object.keys(AllData);
}

export function allSubUnits(unit: UnitTypeSelect): UnitFeild[] {
    return Object.values(AllData[unit]);
}

export function unitsGenerator(inputValueFirst:number,firstSelectedUnit:string,secondSelectedUnit:string){
    if(firstSelectedUnit=='celcius'){
        if(secondSelectedUnit=='fahrenheit'){
            return (inputValueFirst*9/5)+32;
        }
    }
    else if(firstSelectedUnit=='fahrenheit'){
        if(secondSelectedUnit=='celcius'){
            return (5 / 9) * (inputValueFirst - 32)
        }
    }
    else if(firstSelectedUnit=='centimeter'){
        if(secondSelectedUnit=='millimeter'){
            return inputValueFirst*10
        }
    }
    else if(firstSelectedUnit=='millimeter'){
        if(secondSelectedUnit=='centimeter'){
            return inputValueFirst/10
        }
    }
}