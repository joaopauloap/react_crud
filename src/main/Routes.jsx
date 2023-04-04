import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import UserCrud from "../pages/User/UserCrud";

export default props =>(
<Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/users' element={<UserCrud/>}></Route>
</Routes>
);