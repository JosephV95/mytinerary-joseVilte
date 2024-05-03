import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

import { urlApi } from "../../utils/urlApiBackend";

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const get_itineraries = createAsyncThunk('get_itineraries', async(id)=>{
    try {
        const itinerariesApi = await axios(urlApi+"/itineraries/city/" + id)
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
const get_itinerary = createAsyncThunk('get_itinerary', async({id})=>{
    const oneItinerary = await axios.get(urlApi+"/itineraries/"+id)
    .then((res)=>{
        // console.log(res.data.oneItinerary);
        return res.data.oneItinerary
    })
    return oneItinerary
})
const create_itinerary = createAsyncThunk('create_itinerary', async({id, dataNewItinerary}) =>{
    try {
        await axios.post(urlApi+"/itineraries?id="+id, dataNewItinerary)
        .then((res)=>{
            console.log(res.data);
            Toast.fire({
                icon: 'success',
                title: res.data.message
            })
        })
    } catch (error) {
        console.log(error.message);
    }
})
const delete_itinerary = createAsyncThunk('delete_itinerary', async({id})=>{
    try {
        await axios.delete(urlApi+"/itineraries?id="+id)
        .then((res)=>{
            console.log(res.data);
            Swal.fire({
                title: "Deleted!",
                text: res.data.message,
                icon: "success"
            });
        })
    } catch (error) {
        console.log(error.message);
        Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error"
        });
    }
})
const update_itinerary = createAsyncThunk('update_itinerary', async ({id, dataEdit})=>{
    await axios.put(urlApi+"/itineraries/"+id, dataEdit)
    .then((res)=>{
        // console.log(res.data.response);
        Toast.fire({
            icon: 'success',
            title: 'Updated successfully'
        })
        return res.data.response
    })
})

const reset_ity = createAction('reset_ity', ()=>{  //! Acción que reiniciaria los valores de un estado
    return {payload : null}  
})

const itinerariesActions = { get_itineraries , reset_ity, get_itinerary, create_itinerary, delete_itinerary, update_itinerary}

export default itinerariesActions;