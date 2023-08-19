import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

// add new cases
export const addNewCase = createAsyncThunk("cases/addNewCase", async(item)=>{
    try{
        const res = await axios.post(`http://localhost:4000/api/v1/cases/newCase`, {
            number: item.number,
            theYear: item.theYear,
            plaintiff: item.plaintiff, 
            defendant: item.defendant, 
            typeCase: item.typeCase, 
            toSession: item.toSession, 
            fromSession: item.fromSession, 
            decision: item.decision
        },
        {
            headers:{
                Authorization: `${item.token}`
            }
        }
        )
        toast.success("تم بنجاح")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})
// get cases
export const getCases = createAsyncThunk("cases/getCases", async(item)=>{
    try{
        const res = await axios.get(`http://localhost:4000/api/v1/cases/getCases/${item.date}`,
        {
            headers:{
                Authorization: `${item.token}`
            }
        }
        )
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})
// get single case
export const getSingleCase = createAsyncThunk("cases/getSingleCases", async(item)=>{
    try{
        const res = await axios.get(`http://localhost:4000/api/v1/cases/oneCase/${item.id}`,
        {
            headers:{
                Authorization: `${item.token}`
            }
        }
        )
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})

// update cases 
export const updateCases = createAsyncThunk("cases/updateCases", async(item)=>{
    try{
        const res = await axios.patch(`http://localhost:4000/api/v1/cases/updateCase/${item.id}`,{
            number: item.number,
            theYear: item.theYear,
            plaintiff: item.plaintiff, 
            defendant: item.defendant, 
            typeCase: item.typeCase, 
            toSession: item.toSession, 
            fromSession: item.fromSession, 
            decision: item.decision
        },{
            headers:{
                Authorization: `${item.token}`
            }
        })
        toast.success("تم التعديل بنجاح")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})
// delete case
export const deleteCase = createAsyncThunk("cases/deleteCase", async(item)=>{
    try{
        const res = await axios.delete(`http://localhost:4000/api/v1/cases/deleteCase/${item.id}`,
        {
            headers:{
                Authorization: `${item.token}`
            }
        }
        )
        toast.success("تم الحذف بنجاج")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})

// delete All user cases
export const deleteAllUserCases = createAsyncThunk("cases/deleteAllUserCases", async(item)=>{
    try{
        const deleteUserCases = await axios.delete(`http://localhost:4000/api/v1/cases/deleteUserCases`,{
            headers:{
                Authorization: `${item.token}`
            }
        })
        return deleteUserCases.data 
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
            throw("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.message){
            toast.error(err.response.data.message)
            throw(err.response.data.message)
        }else{
            toast.error(err.response.data)
            throw(err.response.data)
        }
    }
})

