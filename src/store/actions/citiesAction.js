import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* Redux Asincrono   con el await le digo a la funcion que la promesa se debe resolver primero y luego continuar con lo demas
const get_cities = createAsyncThunk('get_cities', async(queryParams= "")=>{    //! El asyncThunk trae por defecto el payload, por lo que no se necesita definirlo
    try {
        const citiesApi = await axios.get("http://localhost:4000/api/cities"+queryParams)  
            .then((res) => {
                console.log(res.data.allCities);
                return res.data.allCities     //? En axios la info viene en la respuesta.data
            })

        return {
            citiesApi: citiesApi  //! sin el await devolveria un citiesApi vacio
        }

    } catch (error) {
        console.log(error.message)
    }
}) 

//!  Redux Sincrono 
const cities_api = createAction('cities_api', (payload)=>{
    return { payload }
} )

const all_cities = createAction('all_cities', (payload)=>{
    return { payload }
})


const citiesActions = {cities_api, all_cities,  get_cities}

export default citiesActions;
