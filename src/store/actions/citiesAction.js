import { createAction } from "@reduxjs/toolkit";

const cities_api = createAction('cities_api', (payload)=>{
    return { payload }
} )

const all_cities = createAction('all_cities', (payload)=>{
    return { payload }
})

const citiesActions = {cities_api, all_cities}

export default citiesActions;
