import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateTaskComponent from './Components/CreateTaskComponent';
import ListTasksComponent from './Components/ListTasksComponent';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import { getTasks } from './api/service/taskService'
import {Task} from "./Task";


export type User = {
    username: string;
    token: string;
};



function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const [tasks, setTasks] = useState<Task[]>([]); // State to manage tasks

    const handleTaskCreated = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); // Add the new task
    };
    const handleTaskDeleted = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id)); // Remove the deleted task
    };
    // Fetch tasks from the backend when the component mounts
    useEffect(() => {
        if (isAuthenticated) {
            loadTasks();
        }
    }, [isAuthenticated]);

    const loadTasks = async () => {
        try {
            const response = await getTasks(); // API call to get tasks
            setTasks(response.data); // Assuming response.data is the list of tasks
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const login = (user: User) => {
        setUser(user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };



    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login login={login} />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <>
                                <Dashboard logout={logout} user={user} />
                                <CreateTaskComponent onTaskCreated={handleTaskCreated} />
                                <ListTasksComponent tasks={tasks} onTaskDeleted={handleTaskDeleted} />
                            </>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
