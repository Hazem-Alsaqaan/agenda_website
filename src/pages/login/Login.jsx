import {useGoogleLogin} from "@react-oauth/google"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import {FcGoogle} from "react-icons/fc"
import { useDispatch } from "react-redux"
import { loginFulfilled, loginPending, loginRejected } from "../../redux/reducers/authReducer"
import {ToastContainer, toast} from "react-toastify"

const Login = ()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const redirectPath = location.state?.path  || "/"
    const navigate = useNavigate()
    // handle login with google
    const handleLogin = useGoogleLogin({
        onSuccess: async(tokenResponse)=>{
            dispatch(loginPending())
            try{
                const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })
                const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/login`,
                {
                    name: userInfo.data.name,
                    email: userInfo.data.email,
                    picture: userInfo.data.picture
                })
                window.localStorage.setItem("currentUser", JSON.stringify(userLoginInfo.data))
                dispatch(loginFulfilled(userLoginInfo.data))
                navigate(redirectPath, {replace: true})
            }catch(err){
                if(err.message === "Network Error"){
                    toast.error("تأكد من اتصالك بالانترنت")
                }else if(err.response.data.error_description){
                    toast.error(err.response.data.error_description)
                }else if (err.response.data.message) {
                    toast.error(err.response.data.message)
                }else{
                    toast.error(err.response.data)
                }
                dispatch(loginRejected())
            }
        }
    })

    return(
        <>
        <section className="login_page min-h-screen  flex flex-col items-center py-12" style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg)"}}>
            <section className="login_landing flex flex-col items-center  px-5 flex-1">
                <h1 className="font-bold text-5xl mb-10 font-ruqaa whitespace-nowrap vsm:text-4xl">الأجندة القضائية</h1>
                <div className="login_img_container overflow-hidden max-w-sm">
                    <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1693519037/judicial_agenda/ebook_4488441_jlhpor.png" alt=""/>
                </div>
            </section>

            <section className="login_form  flex-1 px-5">
                <div className="border-gray-300 flex flex-col items-center">
                    <p className="whitespace-nowrap text-lg text-sky-500">سجل الدخول باستخدام بريدك الإلكترونى</p>
                    <div>
                        <button onClick={()=>handleLogin()} className=" bg-blue-500 shadow-2xl p-1 w-60 font-light text-white text-xlg  rounded-lg mt-5 mb-3 hover:bg-blue-600 duration-300 flex items-center justify-end cursor-pointer">
                            <span className="flex-1 justify-center font-Roboto text-3xl vsm:text-2xl">Google</span>
                            <FcGoogle className="bg-white p-1 mr-2 text-5xl vsm:text-4xl"/>
                            </button>
                    </div>
                <Link to="/register">ليس لديك حساب ؟ <span className="text-sky-500">حساب جديد</span></Link>
                </div>
            </section>
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

export default Login

