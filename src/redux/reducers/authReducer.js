import {createSlice} from "@reduxjs/toolkit"
const userStorage = JSON.parse(window.localStorage.getItem("currentUser"))

const authReducer = createSlice({
    name: "auth",
    initialState: {
        // login initialState
        currentUser: userStorage ? userStorage : null,
        loginLoading: false,
        loginError: false,
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
    
    }
})

export default authReducer.reducer
export const {loginPending, loginFulfilled, loginRejected, logOut} = authReducer.actions