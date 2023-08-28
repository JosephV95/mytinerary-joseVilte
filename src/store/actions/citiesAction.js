import { createAction } from "@reduxjs/toolkit";

const cities_api = createAction( 'cities_api', (payload)=>{
    return { payload}
} )

export default cities_api;
