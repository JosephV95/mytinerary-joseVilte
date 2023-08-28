import {configureStore} from "@reduxjs/toolkit"
import citiesReducer from "./reducers/citiesReducer"

export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer
    }
})