import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesAction";

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

const citiesReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(citiesActions.cities_api, (state, action) =>{
        let newState = {...state, cities: action.payload};
        return newState;
    })
    .addCase(citiesActions.all_cities, (state, action) =>{
        let newState = {...state, allCities: action.payload};
        return newState;
    })
})

export default  citiesReducer