import React, {useState} from 'react';
import {createTask} from "../api/service/taskService";



function CreateTaskComponent() {
    const [name, setName] = useState([]);
    const [error, setError] = useState(null);

    const handleCreateTask = async (e) => {
        e.preventDefault();
        try {
            const newTask = {
                name,
                done: false,
            };
            const response = await createTask(newTask);
            console.log(response);

            setName('aaaaa');
        } catch (err) {
            setError('Failed to create task');
        }
    };

    return (
        <form onSubmit={handleCreateTask}>
            <h3>Create New Task</h3>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Title"
                required
            />
            <button type="submit">Create Task</button>
        </form>
    );
}

export default CreateTaskComponent;
