package com.example.backend.service;

import com.example.backend.model.TaskJob;
import com.example.backend.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TaskServiceImpl implements TaskService{

    private final TaskRepository taskRepository;

    @Override
    public TaskJob createProduct(TaskJob product) {
        return taskRepository.save(product);
    }

    @Override
    public List<TaskJob> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(long id) {
        taskRepository.deleteById(id);
    }
}

