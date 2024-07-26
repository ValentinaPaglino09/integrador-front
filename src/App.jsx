import { Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Users from "./components/Users/Users"
import CreateUser from "./components/CreateUser/CreateUser"
import UpdateUser from "./components/UpdateUser/UpdateUser"


function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/createUser" element={<CreateUser/>}/>
    <Route path="/updateUser" element={<UpdateUser/>}/>
    <Route path="/users" element={<Users/>}/>
   </Routes>
  )
}

export default App
