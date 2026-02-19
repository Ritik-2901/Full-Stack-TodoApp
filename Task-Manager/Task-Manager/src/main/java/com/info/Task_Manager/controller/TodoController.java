package com.info.Task_Manager.controller;

import com.info.Task_Manager.entity.Todo;
import com.info.Task_Manager.dto.TodoDTO;
import com.info.Task_Manager.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    private final TodoService service;
    public TodoController(TodoService service) {
        this.service = service;
    }


    @GetMapping
    public List<Todo> listAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Todo getOne(@PathVariable int id) {
        return service.getById(id);
    }


    @PostMapping
    public Todo add(@RequestBody Todo todo) {
        return service.save(todo);
    }


    @PutMapping("/{id}")
    public Todo update(@PathVariable int id, @RequestBody Todo todo) {
        todo.setId(id);
        return service.save(todo);
    }


    @DeleteMapping("/{id}")
    public void remove(@PathVariable int id) {
        service.delete(id);
    }
}
