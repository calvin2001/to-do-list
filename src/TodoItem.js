function  TodoItem({key, todo, onToggle, onDelete}) {
    console.log('받은 todo:', todo);

    return(
        <li
            style={{
                marginBottom: '10px',
                padding: '6px 12px',
                fontSize: '18px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? 'gray' : 'black',
                ransition: '0.2s'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(todo.id);
                }}
                style={{
                    marginLeft: '10px',
                    color: 'white',
                    backgroundColor: 'red',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer'
                }}
            >
                삭제
            </button>
        </li>
    );
}

export default TodoItem;