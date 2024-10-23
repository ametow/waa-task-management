import React, { useEffect, useState } from 'react';
import {deleteTask, getTasks} from "../api/service/taskService";
import {Task} from "../Task";
 // API functions



function ListTasksComponent() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch tasks when component mounts
        const fetchTasks = async () => {
            try {
                const response = await getTasks();
                setTasks(response.data);
            } catch (err) {
                setError('Failed to fetch tasks');
            }
        };
        fetchTasks();
    }, []);

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);  // Delete task via API
            setTasks(tasks.filter(task => task.id !== id));  // Remove task from state
        } catch (err) {
            setError('Failed to delete task');
        }
    };

    return (
        <div>
            <h3>Task List</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h4>{task.name}</h4>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListTasksComponent;
