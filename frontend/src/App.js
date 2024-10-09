// fronted/src/App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Resetpassword from './Resetpassword.js';
import Continureset from './Continureset.js';
import HomePage from './HomePage.js';
import Changepass from './Changepass.js';
import ShowUsers from './ShowUsers.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Signup' element={<Signup />}></Route>
                <Route path='/Resetpassword' element={<Resetpassword />}></Route>
                <Route path='/Continureset' element={<Continureset />}></Route>
                <Route path='/HomePage' element={<HomePage />}></Route>
                <Route path='/Changepass' element={<Changepass />}></Route>
                <Route path='/ShowUsers' element={<ShowUsers />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
