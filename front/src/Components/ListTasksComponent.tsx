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

    function onEdit(task: Task) {

    }

    return (
        <div>
            <h3>Task List</h3>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.done ? 'Done' : 'Pending'}</td>
                            <td>
                                <button onClick={() => onEdit(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListTasksComponent;
