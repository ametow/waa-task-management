package com.example.backend.service;

import com.example.backend.model.TaskJob;

import java.util.List;

public interface TaskService {
    TaskJob createProduct(TaskJob taskJob);
    List<TaskJob> getAllTasks();
    void deleteTask(long id);
}

