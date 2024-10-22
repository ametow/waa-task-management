package com.example.backend.repository;

import com.example.backend.model.TaskJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TaskRepository extends JpaRepository<TaskJob, Long> {
}
