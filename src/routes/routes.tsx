import React from 'react';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';

export const Firebase = initializeApp(config.firebaseConfig);

export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element=
                    {<AuthRoute>
                        <HomePage />
                    </AuthRoute>
                    } />

                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;