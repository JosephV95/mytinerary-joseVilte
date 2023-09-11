import {configureStore} from "@reduxjs/toolkit"
import citiesReducer from "./reducers/citiesReducer"
import itinerariesReducer from "./reducers/itinerariesReducer"
import userReducer from "./reducers/authReducer"

export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        itinerariesReducer : itinerariesReducer,
        userReducer: userReducer
    }
})