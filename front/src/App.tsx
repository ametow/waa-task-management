import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import CreateTaskComponent from './Components/CreateTaskComponent';
import ListTasksComponent from './Components/ListTasksComponent';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import {Provider} from "react-redux";
import {store} from "./app/store";


export type User = {
    username: string;
    token: string;
};

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         dispatch(fetchTasks());
    //     }
    // }, [dispatch, isAuthenticated]);

    const login = (user: User) => {
        setUser(user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login login={login}/>}/>
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <>
                                    <Dashboard logout={logout} user={user}/>
                                    <CreateTaskComponent/>
                                    <ListTasksComponent/>
                                </>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
