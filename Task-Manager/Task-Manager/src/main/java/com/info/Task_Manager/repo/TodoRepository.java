package com.info.Task_Manager.repo;

import com.info.Task_Manager.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Integer> {
}
