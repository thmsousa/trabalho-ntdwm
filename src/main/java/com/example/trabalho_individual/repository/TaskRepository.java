package com.example.trabalho_individual.repository;

import com.example.trabalho_individual.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
