import React, { useState } from "react";
import { use } from "react";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Apprendre React", completed: false },
        { id: 2, text: "Faire les courses", completed: true },
    ]);


    const addTodo = (todo) => {
       setTodos((prev) => [{id:Date.now(), ...todo},...prev,]);
    };
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleCompleted = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
            )
        );
    };


    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
      }, []); 

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]
    );
    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => toggleCompleted(todo.id)}>✔</button>
                        <button onClick={() => deleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
