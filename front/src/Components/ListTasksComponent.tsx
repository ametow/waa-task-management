// ListTasksComponent.tsx
import React from 'react';
import { Task } from '../Task';
import {deleteTask} from "../api/service/taskService"; // Import your Task type


interface ListTasksComponentProps {
    tasks: Task[]; // Array of Task objects
    onTaskDeleted: (id: number) => void; // Function to call when a task is deleted
}

const ListTasksComponent: React.FC<ListTasksComponentProps> = ({ tasks, onTaskDeleted }) => {
    const handleDeleteTask = async (id: number) => {
        await deleteTask(id); // Call the service to delete the task
        onTaskDeleted(id); // Notify the parent that the task has been deleted
    };

    return (
        <div>
            <h3>Task List</h3>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>

                            <p>{task.name}</p>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListTasksComponent;
