import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => {
        setTodos(data.map(item => ({
          id: item.id,
          text: item.title,
          done: item.completed
        })));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('데이터 불러오기 실패');
        setLoading(false);
      });
  }, []);

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

  const toggleTheme = () => setDarkMode(!darkMode);

  if (loading) return <p style={{ textAlign: 'center' }}>로딩 중...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : '#fff',
      color: darkMode ? '#eee' : '#000',
      minHeight: '100vh',
      padding: '30px',
      transition: '0.3s'
      }}
    >
      <h1>API 할 일 목록</h1>
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: darkMode ? '#444' : '#ddd',
          color: darkMode ? '#eee' : '#000',
          border: 'none',
          cursor: 'pointer'
        }}
      >   
        {darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      <button
        onClick={() => setTodos([])}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '8px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        🗑️ 전체 삭제
      </button>
    </div>
  );
}

export default App;
