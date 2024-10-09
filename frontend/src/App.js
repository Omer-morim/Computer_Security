// fronted/src/App.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Resetpassword from './Resetpassword.js';
import Continureset from './Continureset.js';
import HomePage from './HomePage.js';
import Changepass from './Changepass.js';
import ShowUsers from './ShowUsers.js';
import validation2 from './ValidationFolder/SignupValidation.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/resetpassword' element={<Resetpassword />}></Route>
                <Route path='/continureset' element={<Continureset />}></Route>
                <Route path='/homePage' element={<HomePage />}></Route>
                <Route path='/changepass' element={<Changepass />}></Route>
                <Route path='/showUsers' element={<ShowUsers />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
