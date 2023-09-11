import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

const user_login = createAsyncThunk("user_login", async(userData)=>{
    try {
        await axios.post("http://localhost:4000/api/user/login", userData)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token) //?Se guarda el token en el localStorage
            // localStorage.setItem("user", JSON.stringify( res.data.user ) ) //? JSONstringify convierte un objeto a string

            return res.data
        })
        .catch((error) => console.log( error.response.data.message ))

    } catch (error) {
        console.log(error.message);
    }
})
const user_register = createAsyncThunk("user_register", async(user)=>{
    try {
        await axios.post("http://localhost:4000/api/user/register", user )
            .then((res)=>{
                console.log(res.data);
                return res.data
            })
    } catch (error) {
        console.log(error.message);   
    }
})

const userActions = { user_login, user_register };

export default userActions;