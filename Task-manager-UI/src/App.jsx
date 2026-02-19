import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoTable from './components/TodoTable';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const fetchTodos = () => {
    axios.get("http://localhost:8080/todos").then(res => setTodos(res.data));
  };

  useEffect(() => { fetchTodos(); }, []);

  return (
    <div style={{ padding: '20px' }}>
      
        <h2 className='text-center'>Todo App</h2>
      <TodoForm fetchTodos={fetchTodos} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
      <br />
      <TodoTable todos={todos} fetchTodos={fetchTodos} setSelectedTodo={setSelectedTodo} />
    </div>
  );
}

export default App;