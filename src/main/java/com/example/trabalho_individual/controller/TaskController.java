package com.example.trabalho_individual.controller;

import com.example.trabalho_individual.model.Task;
import com.example.trabalho_individual.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*") // Importante para o React conseguir acessar
public class TaskController {

    @Autowired
    private TaskRepository repository;

    // REQUISITO: Endpoint GET
    @GetMapping
    public List<Task> listar() {
        return repository.findAll();
    }

    // REQUISITO: Endpoint POST
    @PostMapping
    public Task salvar(@RequestBody Task task) {
        return repository.save(task);
    }
}
