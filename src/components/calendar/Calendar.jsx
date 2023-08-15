import { useSelector } from "react-redux"
import DatePicker  from "react-datepicker"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logOut } from "../../redux/reducers/authReducer"
import "./Calendar.css"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"


const Calendar =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state)=>state.authReducer)
    const [selectDate, setSelectDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState()
    const [currentMonth, setCurrentMonth] = useState()
    const [currentYear, setCurrentYear] = useState()

    const setDateValue = (date)=>{
        setSelectDate(date)
        setCurrentDay(date.getDate())
        setCurrentMonth(date.getMonth() + 1)
        setCurrentYear(date.getFullYear())
    }

    const handleSelectedDay =()=>{
        if(currentDay){
            navigate(`/${currentDay}-${currentMonth}-${currentYear}`)
        }else{
            navigate("/")
            toast.warn("حدد اليوم أولا")
        }
    }
    return(
        <>
                <div className="main_container_react_date_picker flex flex-col items-center">
                    <div className="user_info w-full flex justify-around items-center">
                        <div>
                            <h1 className="font-bold text-7xl font-ruqaa vsm2:text-5xl">الأجندة القضائية</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="user_personal_image h-16 w-16 overflow-hidden rounded-full m-2 hover:opacity-80">
                                <img src={currentUser.user.picture} alt="" className="w-full"/>
                            </div>
                            <h6 className="text-dark">{currentUser.user.name}</h6>
                        </div>
                    </div>
                    <div>
                        <DatePicker 
                        selected={selectDate} 
                        onChange={(date)=> setDateValue(date) }
                        inline
                        dateFormat="dd/MM/yyyy"
                        placeholderText="العثور على اليوم عن طريق البحث"
                        className="header_date_picker"
                        calendarClassName="body_date_picker"
                        >
                            <button onClick={()=>handleSelectedDay()} className="text-white text-2xl bg-sky-500 font-bold py-1 px-11 shadow-lg rounded-md hover:bg-sky-600 duration-300">تــم</button>
                        </DatePicker>
                        <button className="text-sky-600 text-xl m-2 bg-sky-100  py-1 px-8 shadow-lg rounded-md hover:bg-sky-200 duration-300 " onClick={()=>dispatch(logOut())}>تسجيل الخروج</button>
                        <button className="text-sky-600 text-xl m-2 bg-sky-100  py-1 px-8 shadow-lg rounded-md hover:bg-sky-200 duration-300 " onClick={()=>dispatch(logOut())}>إلغاء الحساب</button>
                    </div>
                </div>
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
        </>
    )
}

export default Calendar