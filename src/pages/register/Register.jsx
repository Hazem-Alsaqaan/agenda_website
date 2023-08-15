import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { loginFulfilled, loginPending, loginRejected} from "../../redux/reducers/authReducer"
import { useDispatch } from "react-redux"


const Register = ()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const redirectPath = location.state?.path  || "/"
    const navigate = useNavigate()
    const handleSignUp = useGoogleLogin({
        onSuccess: async(tokenResponse)=>{
            const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            })
            dispatch(loginPending())
            try{
                const userLoginInfo = await axios.post(`http://localhost:4000/api/v1/users/register`,
                {
                    name: userInfo.data.name,
                    email: userInfo.data.email,
                    picture: userInfo.data.picture
                })
                window.localStorage.setItem("currentUser", JSON.stringify(userLoginInfo.data))
                dispatch(loginFulfilled(userLoginInfo.data))
                navigate(redirectPath, {replace: true})
            }catch(err){
                dispatch(loginRejected())
                console.log(err)
            }
        }
    })

    return(
        <>
            <section className="register_page min-h-screen  flex flex-col items-center py-12">
            <section className="login_landing flex flex-col items-center  px-5 flex-1">
                <h1 className="font-bold text-5xl mb-10 font-ruqaa whitespace-nowrap vsm:text-4xl">أهلا بك</h1>
                <div className="login_img_container overflow-hidden max-w-sm">
                    <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691628369/judicial_agenda/7249663_31051_hzqpuy.jpg" alt=""/>
                </div>
            </section>

            <section className="register_form  flex-1 px-5">
                <div className="border-gray-300 flex flex-col items-center">
                    <p className="whitespace-nowrap text-lg text-sky-500">قم بإنشاء حسابك باستخدام بريدك الالكترونى</p>
                    <div>
                        <button onClick={()=>handleSignUp()} className=" bg-blue-500 shadow-2xl p-1 w-60 font-light text-white text-xlg  rounded-lg mt-5 mb-3 hover:bg-blue-600 duration-300 flex items-center justify-end cursor-pointer">
                            <span className="flex-1 justify-center font-Roboto text-3xl vsm:text-2xl">Google</span>
                            <FcGoogle className="bg-white p-1 mr-2 text-5xl vsm:text-4xl"/>
                            </button>
                    </div>
                <Link to="/login">لديك حساب بالفعل ؟ <span className="text-sky-500">تسجيل الدخول</span></Link>
                </div>
            </section>
        </section>
        </>
    )
}

export default Register