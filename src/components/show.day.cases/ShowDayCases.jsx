import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines} from "react-loader-spinner"
import { memo, useEffect, useState } from "react"
import { deleteCase, getCases } from "../../redux/actions/casesAction"

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ShowDayCases = ({getItemValue})=>{
    const [showCaseRender, setShowCaseRender] = useState(false)
    const navigate = useNavigate()
    const {casesByDate} = useSelector((state)=>state.casesSlice)
    const {casesByDateLoading} = useSelector((state)=>state.casesSlice)
    const {date_id} = useParams()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state)=>state.authReducer)
    
    useEffect(()=>{
        setShowCaseRender(true)
        const GetCasesByDate = ()=>{
            dispatch(getCases({date: date_id, token: currentUser.token}))
        }
        return()=>GetCasesByDate()
    },[currentUser.token, date_id, dispatch, showCaseRender])

    // handle delet th case
    const handleDeleteCase = (id)=>{
        dispatch(deleteCase({id: id, token: currentUser.token}))
        setTimeout(()=>{
            window.location.reload()
        },[1000])
        window.scrollBy(0, window.innerHeight)
    } 
    return(
        <>
            <section className="flex justify-center">
                <table className="bg-white bg-opacity-40 backdrop-blur-md font-normal my-10 w-11/12 md2:text-sm vsm2:font-light shadow-2xl">
                    <thead>
                        <tr className="grid grid-cols-8 -translate-y-6">
                            <th className="py-2 px-1 bg-purple-700 text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">رقم القضية</th>
                            <th className="py-2 px-1 bg-amber-400  text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">المدعى</th>
                            <th className="py-2 px-1 bg-blue-700   text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">المدعى عليه</th>
                            <th className="py-2 px-1 bg-pink-500   text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">نوع الدعوى</th>
                            <th className="py-2 px-1 bg-sky-500    text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">من جلسة</th>
                            <th className="py-2 px-1 bg-green-500  text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">إلى جلسة</th>
                            <th className="py-2 px-1 bg-rose-500   text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">القرار</th>
                            <th className="py-2 px-1 bg-violet-900 text-white  rounded m-1 whitespace-nowrap sm:m-0.5  sm:font-light sm:whitespace-normal vsm2:text-xs">تعديل</th>
                        </tr>
                    </thead>
                    {casesByDateLoading ? 
                    <tfoot className="p-5 flex items-center justify-center">
                        <tr>
                            <td>
                            <RotatingLines
                            strokeColor="#4285F4"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            height="96"
                            visible={true}
                            />
                            </td>
                        </tr>
                    </tfoot>
                    : <tbody>    
                        {Array.from(casesByDate).length < 1 ? <tr className="flex justify-center items-center p-4"><td>لا توجد قضايا مسجلة في هذا اليوم</td></tr>
                                :Array.from(casesByDate).map((item)=>
                                <tr className="grid grid-cols-8" key={item._id}>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5 flex">{`${item.number} لسنة ${item.theYear}`}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.plaintiff}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.defendant}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.typeCase}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.fromSession}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.toSession}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.decision}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5 flex flex-col">
                                        <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 mb-1 rounded p-0.5" onClick={()=>navigate(`${item._id}`)}>عرض</button>
                                        <button className="bg-amber-100  hover:bg-amber-200  text-amber-700 mb-1 rounded p-0.5" onClick={()=>getItemValue(item)}>تعديل</button>
                                        <button className="bg-rose-100   hover:bg-rose-200   text-rose-700 mb-1 rounded p-0.5" onClick={()=>handleDeleteCase(item._id)}>حذف</button>
                                    </td>
                                </tr>)}
                    </tbody>}
                </table>
            </section>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ShowDayCases)