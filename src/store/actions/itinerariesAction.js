import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_itineraries = createAsyncThunk('get_itineraries', async(id)=>{
    try {
        const itinerariesApi = await axios("http://localhost:4000/api/itineraries/city/" + id)
            .then((res)=>{
                // console.log(res.data.itineraries);
                return res.data.itineraries
            })
        return {
            itinerariesApi: itinerariesApi
        }
    } catch (error) {
        console.log(error.message);
    }
})
const create_itinerary = createAsyncThunk('create_itinerary', async({id, dataNewItinerary}) =>{
    try {
        await axios.post("http://localhost:4000/api/itineraries?id="+id, dataNewItinerary)
        .then((res)=>{
            console.log(res.data);
        })
    } catch (error) {
        console.log(error.message);
    }
})

const reset_ity = createAction('reset_ity', ()=>{  //! Acción que reiniciaria los valores de un estado
    return {payload : null}  
})

const itinerariesActions = { get_itineraries , reset_ity, create_itinerary}

export default itinerariesActions;