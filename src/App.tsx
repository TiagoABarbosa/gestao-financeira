import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './routes/AuthRoute';
import Footer from './components/Footer';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <HomePage />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    );
};

export default App;