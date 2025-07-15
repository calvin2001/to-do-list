import { useState } from 'react';
import TodoItem from './TodoItem';

let nextId = 1;

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault(); // ❗ form 제출 시 새로고침 방지
    if (text.trim() === '') return;
    const newTodo = {
      id: nextId++,
      text,
      done: false
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>📝 할 일 목록 (form 처리)</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          추가
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

