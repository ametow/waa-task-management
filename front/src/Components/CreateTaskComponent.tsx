// CreateTaskComponent.tsx
import React, { useState } from 'react';

import {NewTask, Task} from '../Task';
import {createTask} from "../api/service/taskService";  // Import the NewTask type

interface CreateTaskComponentProps {
    onTaskCreated: (newTask: Task) => void;
}

const CreateTaskComponent: React.FC<CreateTaskComponentProps> = ({ onTaskCreated }) => {
    const [name, setName] = useState('');

    const handleCreateTask = async (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: NewTask = { name, done: false };
        const response = await createTask(newTask);
        onTaskCreated(response.data);  // Now this task has an id
    };

    return (
        <form onSubmit={handleCreateTask}>
            <h3>Create Task</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Title"
            />

            <button type="submit">Create Task</button>
        </form>
    );
};

export default CreateTaskComponent;
