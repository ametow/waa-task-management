import {Navigate, Route, BrowserRouter as Router, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import ProtectedRoute from "./Components/ProtectedRoute";
import {useState} from "react";

export type User = {
    username: string
    token: string
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const login = (user:User) => {
        setUser(user);
        setIsAuthenticated(true); // Set authentication to true on successful login
    };

    const logout = () => {
        setIsAuthenticated(false); // Set authentication to false on logout
        setUser(null);
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login login={login}/>}/>
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Dashboard logout={logout} user={user}/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/dashboard"/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
