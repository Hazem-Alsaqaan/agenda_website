import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./SingleRow.css";
import { Pagination } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { deleteCase, getCases } from '../../redux/actions/casesAction';
import { RotatingLines } from 'react-loader-spinner';


// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const SingleRow = ({getItemValue})=>{
    const navigate = useNavigate()
    const {casesByDate} = useSelector((state)=>state.casesSlice)
    const {casesByDateLoading} = useSelector((state)=>state.casesSlice)
    const {date_id} = useParams()
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state)=>state.authReducer)
    
    useEffect(()=>{
        const GetCasesByDate = ()=>{
            dispatch(getCases({date: date_id, token: currentUser.token}))
        }
        return()=>GetCasesByDate()
    },[currentUser.token, date_id, dispatch])

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
        {casesByDateLoading ? 
            <RotatingLines
            strokeColor="#4285F4"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            height="96"
            visible={true}
            />: Array.from(casesByDate).length < 1 
            ? <div className="flex justify-center items-center p-4"><h4>لا توجد قضايا مسجلة في هذا اليوم</h4></div>
            :Array.from(casesByDate).map((item)=>
            <Swiper
            key={item._id}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={5}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <h4 className="bg-purple-700">رقم القضية</h4>
                    <p>{`${item.number} لسنة ${item.theYear}`}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-amber-400">المدعى</h4>
                    <p>{item.plaintiff}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-blue-700">المدعى عليه</h4>
                    <p>{item.defendant}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-pink-500">نوع الدعوى</h4>
                    <p>{item.typeCase}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-sky-500">من جلسة</h4>
                    <p>{item.fromSession}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-green-500">إلى جلسة</h4>
                    <p>{item.toSession}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-rose-500 ">القرار</h4>
                    <p>{item.decision}</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h4 className="bg-violet-900">إعدادات</h4>
                    <div className="config">
                        <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 mb-1 rounded p-0.5" onClick={()=>navigate(`${item._id}`)}>عرض</button>
                        <button className="bg-amber-100  hover:bg-amber-200  text-amber-700 mb-1 rounded p-0.5" onClick={()=>getItemValue(item)}>تعديل</button>
                        <button className="bg-rose-100   hover:bg-rose-200   text-rose-700 mb-1 rounded p-0.5" onClick={()=>handleDeleteCase(item._id)}>حذف</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            )}
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SingleRow)