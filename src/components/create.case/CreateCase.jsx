import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addNewCase, updateCases } from '../../redux/actions/casesAction';
import { memo } from 'react';
import { setDecision, setDefendant, setFromSession, setNumber, setPlaintiff, setTheYear, setToSession, setTypeCase } from '../../redux/reducers/objectCaseReducer';

// eslint-disable-next-line react-refresh/only-export-components,, react/prop-types, no-unused-vars
const CreateCase = ({item})=>{
    const {date_id} = useParams()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state)=>state.authReducer)
    const { number,
            theYear,
            plaintiff, 
            defendant, 
            typeCase, 
            fromSession, 
            toSession, 
            decision, } = useSelector((state)=>state.objectCaseSlice)

    // add new cases
    const handleCreate = (e)=>{
        e.preventDefault()
        dispatch(addNewCase(
            {
                token: currentUser.token,
                number: number,
                theYear: theYear,
                plaintiff: plaintiff, 
                defendant: defendant, 
                typeCase: typeCase, 
                toSession: toSession, 
                fromSession: fromSession, 
                decision: decision
            }
            ))
        window.scrollBy(0, window.innerHeight)
        setTimeout(()=>{
            window.location.reload()
        },[1000])
    }

    // update the cases
    const handleUpdate =()=>{
        dispatch(updateCases({
            // eslint-disable-next-line react/prop-types
            id: item._id, 
            token: currentUser.token,
            number: number,
            theYear: theYear,
            plaintiff: plaintiff, 
            defendant: defendant, 
            typeCase: typeCase, 
            toSession: toSession, 
            fromSession: fromSession, 
            decision: decision
        }))
        setTimeout(()=>{
            window.location.reload()
            window.scrollBy(0, window.innerHeight)
        },[1000])
    }
    return(
        <>
            <section className="create_case_section flex flex-col justify-center items-center" >
                <h1 className=" mt-10 font-bold text-6xl font-ruqaa vsm2:text-5xl">الأجندة القضائية</h1>
                <div className="w-4/5 m-20 vsm2:m-16 bg-white bg-opacity-30 backdrop-blur-md p-10 shadow-2xl rounded-3xl">
                <p><span className="text-blue-700 pl-2">تاريخ الصفحة:</span>{date_id}</p>
                    <form className="flex flex-wrap my-10">
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="case_number"
                        placeholder="رقم القضية"
                        onChange={(e)=>dispatch(setNumber(e.target.value))}
                        value={number}
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="the_year"
                        placeholder="لسنة"
                        onChange={(e)=>dispatch(setTheYear(e.target.value))}
                        value={theYear}
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="plaintiff"
                        placeholder="اسم المدعى"
                        onChange={(e)=>dispatch(setPlaintiff(e.target.value))}
                        value={plaintiff}
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="defendant"
                        placeholder="اسم المدعى عليه"
                        onChange={(e)=>dispatch(setDefendant(e.target.value))}
                        value={defendant}
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="type_case"
                        placeholder="نوع الدعوى"
                        onChange={(e)=>dispatch(setTypeCase( e.target.value))}
                        value={typeCase}
                        />
                        <input
                        className=" before:content-[attr(placeholder)] mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="date"
                        id="from_session"
                        placeholder="من جلسة"
                        onChange={(e)=>dispatch(setFromSession(e.target.value))}
                        value={fromSession}
                        />
                        <input
                        className=" before:content-[attr(placeholder)] mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="date"
                        id="to_session"
                        placeholder="إلى جلسة"
                        onChange={(e)=>dispatch(setToSession(e.target.value))}
                        value={toSession}
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="decision"
                        placeholder="القرار"
                        onChange={(e)=>dispatch(setDecision(e.target.value))}
                        value={decision}
                        />
                    </form>
                    <div>
                        <button 
                        className="ml-3 mt-2 rounded-xl text-white px-10 py-1 text-xl bg-sky-400 hover:bg-opacity-80 duration-150 shadow-2xl"
                        onClick={(e)=>handleCreate(e)}
                        >إنشاء
                        </button>
                        <button 
                        className="ml-3 mt-2 rounded-xl text-white px-10 py-1 text-xl bg-sky-400 hover:bg-opacity-80 duration-150 shadow-2xl"
                        onClick={()=>handleUpdate()}
                        disabled = {Object.keys(item).length <= 0 ? true : false}
                        style={Object.keys(item).length <= 0 ? {cursor:"no-drop"}:{cursor: "pointer"}}
                        >تعديل
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CreateCase)

