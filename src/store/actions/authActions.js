import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

import { urlApi } from "../../utils/urlApiBackend"; //! aqui esta la url de la Api del Backend

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
        const userLogin =await axios.post( urlApi+"/user/login", userData)
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
        .catch((error) => {console.log( error.response.data.message ), 
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
        // console.log(userLogin);
        return userLogin

    } catch (error) {
        console.log(error.message);
    }
})
const user_register = createAsyncThunk("user_register", async(userData)=>{
    try {
        const newUser = await axios.post( urlApi+"/user/register", userData )
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
        const userAuth = await axios.post( urlApi+"/user/authenticate", null, {
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
        return {
            user: {
                name: "Fallido",
                email: "",
                photo: "../MyTineraryLogo.png"
            }
        }
    }
} )

const user_logout = createAsyncThunk("user_logout", async()=>{
    try {
        await axios.post( urlApi+"/user/logout")
        .then((res) => {
            console.log(res.data.message);
        })
    } catch (error) {
        console.log(error.message);
    }
})

const user_update = createAsyncThunk("user_update", async( {id, updateData}, { rejectWithValue })=>{
    //todo  El parametro {rejectWithValue} no es necesario para el correcto funcionamiento del update, pero es una práctica común en Redux Toolkit para manejar errores en acciones asíncronas.
    //! {id, updateData} fue necesario enviarlo asi para que funcione. Al pasar los argumento como un solo objeto tiene ventajas en Claridad y Legibilidad, Flexibilidad; y facilita la Desetructuraci+on.
    try {
        let updateUser = await axios.put( urlApi+`/user/${id}` , updateData)
        .then((res) => {
            // console.log(res.data.upUser)

            Toast.fire({
                icon: 'success',
                title: 'Updated successfully'
              })
            return res.data.upUser
        })
        return updateUser;
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const userActions = { user_login, user_register, user_authenticate, user_logout, user_update };

export default userActions;