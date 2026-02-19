import axios from 'axios';

function TodoTable({ todos, fetchTodos, setSelectedTodo }) {
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then(() => fetchTodos());
  };

  return (
    <table className='table mt-3'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.task}</td>
            <td>{t.priority}</td>
            <td>{t.dueDate}</td>
            <td>
              <button className='btn btn-warning ' onClick={() => setSelectedTodo(t)}>Edit</button>
              <button className='btn btn-danger ms-2 ' onClick={() => deleteTodo(t.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;