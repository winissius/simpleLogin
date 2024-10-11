import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from './pages/Contacts/index';
import Register from './pages/Register/index';
import Login from './pages/Login/index';
import NotFound from './pages/NotFound/index';
import MyAccount from "./pages/MyAccount/index";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Rotas;
