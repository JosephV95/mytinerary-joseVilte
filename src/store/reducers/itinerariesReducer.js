import { createReducer } from "@reduxjs/toolkit"
import itinerariesActions from "../actions/itinerariesAction"

const initialState = {
    itineraries: [
         
    ]
}

const itinerariesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(itinerariesActions.get_itineraries.fulfilled, (state, action) =>{
        let newState = {...state, itineraries: action.payload.itinerariesApi}
        // console.log(newState);
        return newState
    })
    // .addCase(itinerariesActions.reset_ity(), (state, action)=>{  //!caso para reiniciar valores al salir
    //     return {...state, itineraries: action.payload}
    // })
})

export default itinerariesReducer