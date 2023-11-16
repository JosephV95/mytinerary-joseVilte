import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

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
        await axios.delete("http://localhost:4000/api/itineraries?id="+id)
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


const reset_ity = createAction('reset_ity', ()=>{  //! Acción que reiniciaria los valores de un estado
    return {payload : null}  
})

const itinerariesActions = { get_itineraries , reset_ity, create_itinerary, delete_itinerary}

export default itinerariesActions;