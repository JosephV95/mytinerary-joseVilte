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
    //todo  casos Asincronos
    .addCase(citiesActions.get_cities.fulfilled, (state, action) =>{   //! el fulfilled indica que la promesa debe ser resuelta
        let newState = {...state, cities: action.payload.citiesApi}
        return newState
    })
    .addCase(citiesActions.get_one_city.fulfilled, (state, action)=>{
        let newState = {...state, cities: [action.payload.oneCity]}  //? Se debe pasar el action como array para que no produzca errores
        return newState
    })
    
    //todo  casos Sincronos
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