import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_itineraries = createAsyncThunk('get_itineraries', async(queryCity = "")=>{
    try {
        const itinerariesApi = axios.get("http://localhost:4000/api/itineraries" + queryCity)
            .then((res)=>{
                return res.data
            })

        return itinerariesApi
        
    } catch (error) {
        console.log(error.message);
    }
})

const itinerariesActions = { get_itineraries }

export default itinerariesActions;