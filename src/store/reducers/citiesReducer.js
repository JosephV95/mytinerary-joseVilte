import { createReducer } from "@reduxjs/toolkit";
import citiesRed from "../actions/citiesAction";

const initialState = {
    cities: [
        {
            nation: "",
            city: "",
            img: ""
        }
    ],
    allCities:[
        {
            nation: "",
            city: "",
            img: ""
        }
    ]
}

const cities = createReducer( initialState, (builder)=>{
    
    builder
    .addCase(citiesRed.cities_api, (state, action) =>{
        let newState = {...state, cities: action.payload};
        return newState;
    })
    .addCase(citiesRed.all_cities, (state, action) =>{
        let newState = {...state, allCities: action.payload};
        return newState;
    })
})

// const citiesReducer = {cities}

export default  cities