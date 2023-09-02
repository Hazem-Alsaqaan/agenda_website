import { useState } from "react"
import CreateCase from "../../components/create.case/CreateCase"
import { useDispatch } from "react-redux"
import { setDecision, setDefendant, setFromSession, setNumber, setPlaintiff, setTheYear, setToSession, setTypeCase } from "../../redux/reducers/objectCaseReducer"
import { ToastContainer } from 'react-toastify';
import SingleRow from "../../components/single.row/SingleRow"



const SelectedDayCases = ()=>{
    const [item, setItem] = useState({})
    const dispatch = useDispatch()

    // get selected case value to update
    const getItemValue = (selectedItem)=>{
        setItem(selectedItem)
        dispatch(setNumber(selectedItem.number))
        dispatch(setTheYear(selectedItem.theYear))
        dispatch(setPlaintiff(selectedItem.plaintiff))
        dispatch(setDefendant(selectedItem.defendant))
        dispatch(setTypeCase(selectedItem.typeCase))
        dispatch(setToSession(selectedItem.toSession))
        dispatch(setFromSession(selectedItem.fromSession))
        dispatch(setDecision(selectedItem.decision))
        
    }
    return(
        <>
        <div className="min-h-screen bg-cover bg-no-repeat" style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg)"}}>
            <CreateCase  item={item}/>
            <SingleRow getItemValue = {getItemValue}/>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </div>
        </>
    )
}

export default SelectedDayCases