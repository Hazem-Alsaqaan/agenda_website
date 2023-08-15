import {Routes, Route} from "react-router-dom"
import './App.css'
import Login from './pages/login/Login'
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import RequireAuth from "./components/require.auth/RequireAuth"
import SelectedDayCases from "./pages/selected.day.cases/SelectedDayCases"
import SingleCase from "./pages/single.case/SingleCase"

function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="/:date_id" element={<RequireAuth><SelectedDayCases/></RequireAuth>}/>
        <Route path="/:date_id/:case_id" element={<RequireAuth><SingleCase/></RequireAuth>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
