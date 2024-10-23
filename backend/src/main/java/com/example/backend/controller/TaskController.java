package com.example.backend.controller;

import com.example.backend.model.TaskJob;
import com.example.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskJob> createProduct(@RequestBody TaskJob product) {
        return ResponseEntity.ok(taskService.createProduct(product));
    }

    @GetMapping
    public ResponseEntity<List<TaskJob>> getAllProducts() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TaskJob> deleteProduct(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

}
