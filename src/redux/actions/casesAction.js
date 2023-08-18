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
        console.log(err)
        toast.error(err)
        throw(err.response)
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
        console.log(err)
        throw(err.response)
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
        console.log(err)
        throw(err.response)
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
        console.log(err)
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
        console.log(err)
        throw(err.response)
    }
})