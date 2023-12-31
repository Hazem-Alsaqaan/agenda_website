
import { ToastContainer } from "react-toastify"
import Calendar from "../../components/calendar/Calendar"

const Home = ()=>{

    return(
        <>
        <section className="home_page min-h-screen w-screen flex flex-col items-center justify-center bg-white bg-cover bg-no-repeat" 
        style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg)"}}>
                <Calendar/>
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
        </section>
        </>
    )
}

export default Home