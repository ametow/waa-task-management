package com.example.backend.service;

import com.example.backend.model.TaskJob;
import com.example.backend.model.User;

import java.util.List;

public interface TaskService {
    TaskJob createProduct(TaskJob taskJob);

    List<TaskJob> getAllTasks();

    void deleteTask(long id);

    User assignTaskToUser(Long userId, Long taskId);

    TaskJob updateTask(long id, TaskJob taskJob);
}

