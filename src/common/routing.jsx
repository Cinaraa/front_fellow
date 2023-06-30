import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from '../navbarItems/about'
import Login from '../user/login'
import Register from '../user/register'
import Principal from '../vistas/principal'
import Game from '../game/game'
import Instructions from '../navbarItems/instructions'


import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'
import Rooms from '../vistas/rooms'
import Partida from '../game/partida'

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
            <Route path={"/"} element={<App />}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/principal"} element={<Principal/>}></Route>
            <Route path={"/game"} element={<Game/>}></Route>
            <Route path={"/instructions"} element={<Instructions/>}></Route>
            <Route path={"/admincheck"} element={<AdminCheck />}/>
            <Route path={"/usercheck"} element={<UserCheck />}/>
            <Route path={"/rooms"} element={<Rooms/>}/>
            <Route exact path={"/game/:gameId"} element={<Partida/>}/>
            </Routes>
      </BrowserRouter>

    )
}
export default Routing
