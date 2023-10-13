import { createReducer } from "@reduxjs/toolkit"
import userActions from "../actions/authActions"

const initialState = {
    user: {
        name: "",
        email: "",
        photo: "",
        _id: ""
    },
    isLogged: false,

    // userCreated:{
    //     email: ""
    // }
}

const userReducer = createReducer(initialState, (builder)=>{
    builder.addCase(userActions.user_login.fulfilled , (state, action)=>{
        return { ...state, user: action.payload.user, isLogged: action.payload.success}
    })
    .addCase(userActions.user_authenticate.fulfilled, (state, action) =>{
        return { ...state, user: action.payload , isLogged: true}
    })
    .addCase(userActions.user_logout.fulfilled, () =>{
        localStorage.removeItem('token'); //! Se borrara el token con Logout
        return initialState  //* se volvera a tener los estados iniciales
    })
    .addCase(userActions.user_register.fulfilled, (state,action)=>{
        return {...state, user: action.payload.userCreated, isLogged:action.payload.success}
    })
    .addCase(userActions.user_update.fulfilled, ()=>{
        console.log("Se actualizo");
    })
})

export default userReducer;