import { useState, useEffect } from 'react';
import axios from 'axios';

function TodoForm({ fetchTodos, selectedTodo, setSelectedTodo }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTask(selectedTodo.task);
      setPriority(selectedTodo.priority);
      setDueDate(selectedTodo.dueDate);
    }
  }, [selectedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { task, priority, dueDate, completed: false };

    if (selectedTodo) {
      axios.put(`http://localhost:8080/todos/${selectedTodo.id}`, data).then(() => reset());
    } else {
      axios.post("http://localhost:8080/todos", data).then(() => reset());
    }
  };

  const reset = () => {
    fetchTodos();
    setTask(""); setDueDate(""); setPriority("Low");
    setSelectedTodo(null);
  };

  return (
    <form   onSubmit={handleSubmit}>
      <input className='form-control ms-1 mb-2'  type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required />
      <select className='form-control ms-1 mb-2' value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input className='form-control ms-1 mb-2' type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button className ="btn btn-success" type="submit">{selectedTodo ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TodoForm;