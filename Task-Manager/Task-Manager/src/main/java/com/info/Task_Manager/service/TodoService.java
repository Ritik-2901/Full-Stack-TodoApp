package com.info.Task_Manager.service;

import com.info.Task_Manager.entity.Todo;
import com.info.Task_Manager.repo.TodoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> getAll() {
        return repository.findAll();
    }

    public Todo getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found "));
    }

    public Todo save(Todo todo) {
        return repository.save(todo);
    }


    public void delete(int id) {
        repository.deleteById(id);
    }
}