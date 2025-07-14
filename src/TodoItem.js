function  TodoItem({key, todo, onToggle, onDelete}) {
    console.log('받은 todo:', todo);

    return(
        <li
            style={{
                marginBottom: '10px',
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? 'gray' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // 클릭 이벤트 전파 막기
                    onDelete(todo.id);
                }}
                style={{ marginLeft: '10px', color: 'red' }}
            >
                삭제
            </button>
        </li>
    );
}

export default TodoItem;