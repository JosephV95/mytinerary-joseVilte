import { createReducer } from "@reduxjs/toolkit"
import userActions from "../actions/authActions"

const initialState = {
    user: {
        email: "",
        _id: ""
    }
}

const userReducer = createReducer(initialState, (builder)=>{
    builder.addCase(userActions.user_login.fulfilled , (state, action)=>{
        return {user: action.payload}
    })
})

export default userReducer;