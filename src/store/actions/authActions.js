import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";


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

const userActions = { user_register };

export default userActions;