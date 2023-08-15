import { memo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"


// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const RequireAuth = ({children})=>{
    const {currentUser} = useSelector((state)=>state.authReducer)
    const location = useLocation()

    if(!currentUser){
        return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
    }
    return children
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(RequireAuth)