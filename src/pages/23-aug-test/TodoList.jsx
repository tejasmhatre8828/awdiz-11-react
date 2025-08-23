import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = () => {
        if (!todo.trim()) {
            toast.error("Please enter a todo");
            return;
        }

        setTodos([...todos, { text: todo, completed: false }]);
        toast.success("Todo added!");
        setTodo("");
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setTodos(updatedTodos);
    };

    return (
        <div style={{ padding: "20px" }}>
            <ToastContainer />
            <div>
                <h3>Todo List:</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {todos.map((item, index) => (
                        <li key={index} style={{ marginBottom: "8px" }}>
                            <input
                                id={`todo-${index}`}
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleComplete(index)}
                            />
                            <label
                                htmlFor={`todo-${index}`}
                                style={{
                                    marginLeft: "8px",
                                    textDecoration: item.completed ? "line-through" : "none",
                                    cursor: "pointer"
                                }}
                            >
                                {item.text}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Enter todo"
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default TodoList;