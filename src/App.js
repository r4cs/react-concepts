import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from "./components/login/SignUp";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { AuthProvider } from './contexts/AuthContext';
import AccountInfo from "./components/user/AccountInfo";
import PrivateRoute from './components/common/PrivateRoute'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {

    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <div className="App">
                        <NavBar />
                            <div className="content">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/sign-up" element={<SignUp />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/dashboard" element={<PrivateRoute />}>
                                        <Route path="" element={<Dashboard />} />
                                        <Route path="account" element={<AccountInfo />} />
                                    </Route>
                                </Routes>
                            </div>
                        <Footer />
                    </div>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;
