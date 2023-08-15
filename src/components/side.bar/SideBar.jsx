import { useSelector } from "react-redux"


const SideBar = ()=>{
    const {currentUser} = useSelector((state)=>state.authReducer)
    return(
        <>
        <section className="bg-white w-56 flex-1 flex flex-col items-end relative">
            <div className="bg-neutral-800 min-h-full w-full">

                
               
            </div>
        </section>
        </>
    )
}

export default SideBar