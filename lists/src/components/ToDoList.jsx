import React, { useState } from 'react';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const updateTodo = (index, newValue) => {
        const newTodos = [...todos];
        newTodos[index] = newValue;
        setTodos(newTodos);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter text" 
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        <button onClick={() => {
                            const newValue = prompt('Enter new value:', todo);
                            if (newValue !== null) {
                                updateTodo(index, newValue);
                            }
                        }}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
