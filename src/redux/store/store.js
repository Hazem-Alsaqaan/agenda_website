import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../reducers/authReducer"
import casesSlice from "../reducers/casesRaducer"
import objectCaseSlice from "../reducers/objectCaseReducer"
const store = configureStore({
    reducer:{
        authReducer: authReducer,
        casesSlice: casesSlice,
        objectCaseSlice: objectCaseSlice,
    }
})

export default store