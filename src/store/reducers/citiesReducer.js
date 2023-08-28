import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "../actions/citiesAction";

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
    .addCase(citiesReducer.cities_api, (state, action) =>{
        let newState = {...state, cities: action.payload};
        return newState;
    })
    .addCase(citiesReducer.all_cities, (state, action) =>{
        let newState = {...state, allCities: action.payload};
        return newState;
    })
})

export default  cities