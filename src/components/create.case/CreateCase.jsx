import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CreateCase = ()=>{
    const {date_id} = useParams()
    const handleCreate = (e)=>{
        e.preventDefault()
        toast.success("تم بنجاح")
        window.scrollBy(0, window.innerHeight)
    }
    return(
        <>
            <section className="create_case_section flex flex-col justify-center items-center" >
                <h1 className=" mt-10 font-bold text-6xl font-ruqaa vsm2:text-5xl">الأجندة القضائية</h1>
                <div className="w-4/5 m-20 vsm2:m-16 bg-white bg-opacity-30 backdrop-blur-md p-10 shadow-2xl rounded-3xl">
                <p>{date_id}</p>
                    <form className="flex flex-wrap my-10">
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="case_number"
                        placeholder="رقم القضية"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="plaintiff"
                        placeholder="اسم المدعى"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="defendant"
                        placeholder="اسم المدعى عليه"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="type_case"
                        placeholder="نوع الدعوى"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="from_session"
                        placeholder="من جلسة"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="to_session"
                        placeholder="إلى جلسة"
                        />
                        <input
                        className="mb-4 placeholder:text-gray-700 rounded-xl ml-2 bg-white bg-opacity-40 p-2 focus:outline-none shadow-sm border-b-2 border-solid border-b-slate-200"
                        type="text"
                        id="decision"
                        placeholder="القرار"
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
                        >تعديل
                        </button>
                    </div>
                </div>
            </section>
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

export default CreateCase

// style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845786/judicial_agenda/30923410_abstract1_01_h02olt.jpg)"}}