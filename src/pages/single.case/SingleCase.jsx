import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleCase } from "../../redux/actions/casesAction"
import { RotatingLines } from "react-loader-spinner"
import { ToastContainer } from "react-toastify"


const SingleCase =()=>{
    const dispatch = useDispatch()
    const {case_id} = useParams()
    const {currentUser} = useSelector((state)=>state.authReducer)
    const {singleCase} = useSelector((state)=>state.casesSlice)
    const {singleCaseLoading} = useSelector((state)=>state.casesSlice)

    useEffect(()=>{
        const cleanGetSingleCase = ()=>{
            dispatch(getSingleCase({id: case_id, token: currentUser.token}))
        }
        return()=>cleanGetSingleCase()
    },[case_id, currentUser.token, dispatch])
    return(
        <>
        <div className=" min-h-screen bg-no-repeat bg-cover py-10 mx-0 flex flex-col items-center" style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg)"}}>
            <h1 className=" my-10 font-bold text-6xl font-ruqaa vsm2:text-5xl">الأجندة القضائية</h1>
            {singleCaseLoading ?
            <div className="flex justify-center items-center">
                <RotatingLines
                strokeColor="#4285F4"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                height="96"
                visible={true}
                />    
            </div> 
        :
            <section>
                <div className="my-4 flex items-center vsm2:flex-col">
                    <h2 className="bg-red-500 w-40  text-white p-2 text-xl vsm2:text-base  rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">رقم القضية</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{`${singleCase?.number} لسنة ${singleCase?.theYear}`}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-purple-700 w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">المدعى</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.plaintiff}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-amber-400 w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">المدعى عليه</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.defendant}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-sky-500 w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">نوع الدعوى</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.typeCase}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-green-500  w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">من جلسة</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.fromSession}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-pink-500 w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">إلى جلسة</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.toSession}</p>
                </div>
                <div className="my-4 flex items-center vsm2:flex-col ">
                    <h2 className="bg-blue-700 w-40 text-white p-2 text-xl vsm2:text-base rounded-r-md vsm2:rounded-md shadow-2xl drop-shadow-2xl flex items-center justify-center z-30">القرار</h2>
                    <p className="bg-white bg-opacity-30 vsm2:-translate-x-0 backdrop-blur text-lg vsm2:text-base py-2 px-10 flex items-center rounded-full translate-x-3 z-20">{singleCase?.decision}</p>
                </div>
            </section>
            }
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

export default SingleCase