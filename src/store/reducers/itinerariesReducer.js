import { createReducer } from "@reduxjs/toolkit"
import itinerariesActions from "../actions/itinerariesAction"


const initialState = {
    itineraries: [

    ]
}

const itinerariesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(itinerariesActions.get_itineraries.fulfilled, (state, action) =>{
        const newState = {...state, itineraries: action.payload}
        
        return newState
    })
})

export default itinerariesReducer