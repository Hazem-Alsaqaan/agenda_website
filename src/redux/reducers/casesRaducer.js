import {createSlice} from "@reduxjs/toolkit"
import { addNewCase, deleteAllUserCases, deleteCase, getCases, getSingleCase, updateCases } from "../actions/casesAction"



const casesSlice = createSlice({
    name: "cases",
    initialState: {
        cases: [],
        casesLoading: false,
        casesByDate: [],
        casesByDateLoading: false,
        singleCase: {},
        singleCaseLoading: false,
    },
    extraReducers: (builder)=>{
        // add new cases
        builder.addCase(addNewCase.pending, (state)=>{
            state.casesLoading = true
        }),
        builder.addCase(addNewCase.fulfilled, (state, action)=>{
            state.casesLoading = false
            state.cases = [...state.cases, action.payload]
        }),
        builder.addCase(addNewCase.rejected, (state)=>{
            state.casesLoading = false
        }),
        // get cases by date
        builder.addCase(getCases.pending, (state)=>{
            state.casesByDateLoading = true
        }),
        builder.addCase(getCases.fulfilled, (state, action)=>{
            state.casesByDateLoading = false
            state.casesByDate = action.payload
        }),
        builder.addCase(getCases.rejected, (state)=>{
            state.casesByDateLoading = false
        }),
        // get single case 
        builder.addCase(getSingleCase.pending, (state)=>{
            state.singleCaseLoading = true
        }),
        builder.addCase(getSingleCase.fulfilled, (state, action)=>{
            state.singleCaseLoading = false
            state.singleCase = action.payload
        }),
        builder.addCase(getSingleCase.rejected, (state)=>{
            state.singleCaseLoading = false
        }),
        //update case 
        builder.addCase(updateCases.pending, (state)=>{
            state.casesLoading = true
        }),
        builder.addCase(updateCases.fulfilled, (state, action)=>{
            state.casesLoading = false
            state.cases = [...state.cases, action.payload]
        }),
        builder.addCase(updateCases.rejected, (state)=>{
            state.casesLoading = false
        })
        //delete case 
        builder.addCase(deleteCase.pending, (state)=>{
            state.casesLoading = true
        }),
        builder.addCase(deleteCase.fulfilled, (state, action)=>{
            state.casesLoading = false
            state.cases = [...state.cases, action.payload]
        }),
        builder.addCase(deleteCase.rejected, (state)=>{
            state.casesLoading = false
        })
        //delete all user cases 
        builder.addCase(deleteAllUserCases.pending, (state)=>{
            state.casesLoading = true
        }),
        builder.addCase(deleteAllUserCases.fulfilled, (state, action)=>{
            state.casesLoading = false
            state.cases = [...state.cases, action.payload]
        }),
        builder.addCase(deleteAllUserCases.rejected, (state)=>{
            state.casesLoading = false
        })
    }
})

export default casesSlice.reducer