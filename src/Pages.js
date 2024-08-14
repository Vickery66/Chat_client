import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import React from 'react';
import {useQuery,gql} from '@apollo/client'; 
import { Login_com } from './Login_com';
import { Hello } from './Hello';
import { Navigation } from './Navigation';
import { Home } from './Home';
import { Chat } from './Chat';
export const Pages=()=>{
    return (
        <Router>
                <Routes>
                    <Route exact path='/' element={<Hello/>}/>
                    <Route exact path="/Login" element={<Login_com/>}/>
                    <Route exact path='/Home/*' element={<Home/>}>
                        <Route exact path='Chat' element={<Chat/>}/>
                    </Route>
                </Routes>
        </Router>
    );
};