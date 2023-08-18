import { useState } from "react"
import CreateCase from "../../components/create.case/CreateCase"
import ShowDayCases from "../../components/show.day.cases/ShowDayCases"
import { useDispatch } from "react-redux"
import { setDecision, setDefendant, setFromSession, setNumber, setPlaintiff, setTheYear, setToSession, setTypeCase } from "../../redux/reducers/objectCaseReducer"



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
            <ShowDayCases getItemValue = {getItemValue}/>
        </div>
        </>
    )
}

export default SelectedDayCases