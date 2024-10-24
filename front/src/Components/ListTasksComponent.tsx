import React, {useEffect, useState, FC} from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {fetchTasks, deleteTaskThunk, updateTaskThunk, selectTasks, Task} from '../features/tasks/taskSlice';

const ListTasksComponent: FC = () => {
    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectTasks);
    const loading = useAppSelector((state) => state.tasks.loading);
    const error = useAppSelector((state) => state.tasks.error);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleTaskDeleted = (id: number) => {
        dispatch(deleteTaskThunk(id));
    };

    const handleTaskEdited = (task: Task) => {
        const newName = prompt('Edit task name', task.name);
        if (newName) {
            dispatch(updateTaskThunk({ ...task, name: newName }));
        }
    };

    const handleTaskToggled = (task:Task) => {
        dispatch(updateTaskThunk({ ...task, done: !task.done }));
    };

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchTasks(search));
        }, 500);
        return () => clearTimeout(timer);
    }, [dispatch, search]);

    return (
        <div>
            <h3>Task List</h3>

            <input type="text" placeholder="Search tasks" onChange={handleSearchChange} value={search} />

            {loading && <p>Loading tasks...</p>}
            {error && <p>Error: {error}</p>}

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
                                <button onClick={() => handleTaskEdited(task)}>Edit</button>
                                <button onClick={() => handleTaskDeleted(task.id)}>Delete</button>
                                <button onClick={() => handleTaskToggled(task)}>Toggle</button>
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
