import { useNavigate } from "react-router-dom"


const ShowDayCases = ()=>{
    const navigate = useNavigate()
    const data = [
        {
            _id: 1,
            caseNumber: "1514/2023",
            plaintiff: "عزمي على محمود",
            defendant: "ممدوح على محمود",
            typeCase: "صحة توقيع",
            fromSession: "15-7-2023",
            toSession: "20-9-2023",
            decision: "لاعادة الاعلان"
        },
        {
            _id: 2,
            caseNumber: "3125/2023",
            plaintiff: "عبد اللطيف محمد أحمد",
            defendant: "كريم عزت خليل",
            typeCase: "صحة توقيع",
            fromSession: "31-7-2023",
            toSession: "12-9-2023",
            decision: "لاعادة الاعلان"
        },
    ]
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
                    <tbody>

                        {
                            data.map((item)=>
                                <tr className="grid grid-cols-8" key={item._id}>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.caseNumber}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.plaintiff}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.defendant}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.typeCase}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.fromSession}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.toSession}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5">{item.decision}</td>
                                    <td className="py-2 px-1 bg-white  rounded m-1 sm:m-0.5 vsm:text-xs vsm:px-0.5 flex flex-col">
                                        <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 mb-1 rounded p-0.5" onClick={()=>navigate(`${item._id}`)}>عرض</button>
                                        <button className="bg-amber-100  hover:bg-amber-200  text-amber-700 mb-1 rounded p-0.5">تعديل</button>
                                        <button className="bg-rose-100   hover:bg-rose-200   text-rose-700 mb-1 rounded p-0.5">حذف</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default ShowDayCases