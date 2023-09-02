import {configureStore} from "@reduxjs/toolkit"
import citiesReducer from "./reducers/citiesReducer"
import itinerariesReducer from "./reducers/itinerariesReducer"

export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        itinerariesReducers : itinerariesReducer
    }
})