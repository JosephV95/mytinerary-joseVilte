import { createReducer } from "@reduxjs/toolkit";
import cities_api from "../actions/citiesAction";

const initialState = {
    cities: [
        {
            nation: "",
            city: "",
            img: ""
        }
    ]
}

const citiesReducer = createReducer( initialState, (builder)=>{
    
    return builder.addCase(cities_api, (state, action) =>{
        const newState = {...state, cities: action.payload};
    })
})

export default citiesReducer;