import {createSlice} from "@reduxjs/toolkit"
import { removeAccount } from "../actions/authAction"
const userStorage = JSON.parse(window.localStorage.getItem("currentUser"))

const authReducer = createSlice({
    name: "auth",
    initialState: {
        // login initialState
        currentUser: userStorage ? userStorage : null,
        loginLoading: false,
        loginError: false,
        removeLoading: false
    },
    reducers: {
        // handle Login reducer functions
        loginPending: (state)=>{
            state.loginLoading = true
        },
        loginFulfilled: (state, action)=>{
            state.loginLoading = false
            state.currentUser = action.payload
        },
        loginRejected: (state)=>{
            state.loginLoading = false
            state.loginError = true
        },
        logOut: (state)=>{
            state.currentUser = null
            window.localStorage.removeItem("currentUser")
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(removeAccount.pending, (state)=>{
            state.removeLoading = true
        }),
        builder.addCase(removeAccount.fulfilled, (state)=>{
            state.removeLoading = false
                state.currentUser = null
                window.localStorage.removeItem("currentUser")
        }),
        builder.addCase(removeAccount.rejected, (state)=>{
            state.removeLoading = false
        })
    }
})

export default authReducer.reducer
export const {loginPending, loginFulfilled, loginRejected, logOut} = authReducer.actions