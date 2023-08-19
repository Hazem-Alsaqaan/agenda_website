import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const removeAccount = createAsyncThunk("auth/removeAccount", async(item)=>{
    try{
        const deleteUserAccount = await axios.delete(`http://localhost:4000/api/v1/users/deleteUser/${item.user._id}`,{
            headers:{
                Authorization: `${item.token}`
            }
        })
        return deleteUserAccount.data 
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