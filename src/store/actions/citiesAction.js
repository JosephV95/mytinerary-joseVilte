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

// const urlApi = "http://localhost:4000/api" //todo  esta seria la url para el trabajo local
const urlApi = "https://mytinerary-back-viltejose-production.up.railway.app/api" //! url del deploy  del back(le agregue el/api para el correcto funcionamiento)

//* Redux Asincrono   con el await le digo a la funcion que la promesa se debe resolver primero y luego continuar con lo demas
const get_cities = createAsyncThunk('get_cities', async(queries= "")=>{    //! El asyncThunk trae por defecto el payload, por lo que no se necesita definirlo
    try {
        const citiesApi = await axios.get(urlApi+"/cities" + queries)  
            .then((res) => {
                // console.log(res.data.allCities);
                return res.data.allCities   //? En axios la info viene en la respuesta.data
            })

        return {
            citiesApi: citiesApi  //! sin el await devolveria un citiesApi vacio
        }

    } catch (error) {
        console.log(error.message)
    }
}) 
const get_one_city = createAsyncThunk("get_one_city", async(id)=>{
    try {
        const oneCity = await axios.get(urlApi+"/cities/" + id)
        .then((res)=>{
            // console.log(res.data.oneCity);
            return res.data.oneCity
        })

        return {
            oneCity: oneCity
        }
    } catch (error) {
        console.log(error.message);
    }
})

//todo Nuevos actions para el crud 
const create_city = createAsyncThunk('create_city', async(dataNewCity)=>{
    try {
        const newCity = await axios.post(urlApi+"/cities", dataNewCity)
        .then((res)=> {
            // console.log(res.data);
            Toast.fire({
                icon: 'success',
                title: 'The city ' + res.data.newCity.city + ' was created'
            })
            return res.data
        })
        
        return newCity
    } catch (error) {
        console.log(error.message);
    }
})
//! solo en este caso se pasara el id por query (para ver su desarrollo), seria mejor por param 
const delete_city = createAsyncThunk('delete_city', async (query)=>{
    try {
        await axios.delete(urlApi+"/cities?id=" + query)
        .then((res)=>{
            Swal.fire({
                title: "Deleted!",
                text: "The city was erased",
                icon: "success"
              });
            return console.log(res.data.message);
        })
    } catch (error) {
        console.log(error.message);
    }
})
const update_city = createAsyncThunk('update_city', async({id, dataCityEdited})=>{
    try {
        await axios.put(urlApi+`/cities/${id}`, dataCityEdited)
        .then((res)=>{
            console.log(res.data.response);
            Toast.fire({
                icon: 'success',
                title: 'City updated successfully'
            })
        })
    } catch (error) {
        console.log(error.message);
    }
})

//!  Redux Sincrono 
const cities_api = createAction('cities_api', (payload)=>{
    return { payload }
} )
const all_cities = createAction('all_cities', (payload)=>{
    return { payload }
})

const citiesActions = {cities_api, all_cities,  get_cities, get_one_city, create_city, delete_city, update_city}

export default citiesActions;
