import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2300,
    // timerProgressBar: true,
    didOpen: (toast) => {
    //   toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

const user_login = createAsyncThunk("user_login", async(userData)=>{
    try {
        const userLogin =await axios.post("http://localhost:4000/api/user/login", userData)
        .then(res => {
            // console.log(res.data.user);
            localStorage.setItem("token", res.data.token) //?Se guarda el token en el localStorage
            // localStorage.setItem("user", JSON.stringify( res.data.user ) ) //? JSONstringify convierte un objeto a string

            // alert("Login Successful")
            Toast.fire({
                icon: 'success',
                title: 'Welcome back ' + res.data.user.name
              })
            return res.data
        })
        .catch((error) => {console.log( error.response.data.message ), alert( error.response.data.message )})
        // console.log(userLogin);
        return userLogin

    } catch (error) {
        console.log(error.message);
    }
})
const user_register = createAsyncThunk("user_register", async(userData)=>{
    try {
        const newUser = await axios.post("http://localhost:4000/api/user/register", userData )
            .then((res)=>{
                // console.log(res.data);
                // alert("Successful registration")
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Successful registration',
                    showConfirmButton: false,
                    timer: 1500
                  })
                localStorage.setItem("token", res.data.token)
                
                return res.data
            })
            .catch((error) => { 
                if (Array.isArray(error.response.data.message)) {
                    error.response.data.message.map(val => 
                        Swal.fire(
                            val,
                            '',
                            'error'
                        ))
                } else{
                    Swal.fire(
                        error.response.data.message,
                        '',
                        'info'
                    )
                }
            } )
        return newUser

    } catch (error) {
        console.log(error.message);   
    }
})
const user_authenticate = createAsyncThunk("user_authenticate", async()=>{
    try {
        let token = localStorage.getItem('token'); //! obtengo el token guardado al loguearse 

                //*  el 2do parametro es 'null'(o podria ser {}) porque no se mandara nada por body, el 3er es el header 
        const userAuth = await axios.post("http://localhost:4000/api/user/authenticate", null, {
                headers:{
                    'Authorization': 'Bearer ' + token  //! se guardara el token en el Authorization del navegador
                }
            })
            .then((res)=>{
                // console.log({message: "Autenticado correctamente", user: res.data.user});
                // localStorage.setItem("token", res.data.token) //? Se settea con el nuevo token generado por si ya se vencio el anterior
                
                return res.data.user
            })

        return userAuth
    } catch (error) {
        console.log(error.message);
    }
} )

const user_logout = createAsyncThunk("user_logout", async()=>{
    try {
        await axios.post("http://localhost:4000/api/user/logout")
        .then((res) => {
            console.log(res);
        })
    } catch (error) {
        console.log(error.message);
    }
})

const userActions = { user_login, user_register, user_authenticate, user_logout };

export default userActions;