import React from 'react';
import { useState } from 'react';
import TodoItem from './Item/TodoItem';
import CreateTodo from './CreateTodo/CreateTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const changeTodo = (id) => {
    const copyTodos = [...todos];
    const currentTodo = copyTodos.find(item => item.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copyTodos);
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(item => item.id !== id));
  }

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-center text-2xl font-bold mb-10'>
        Todo for junior
      </h1>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          changeTodo={changeTodo} 
          removeTodo={removeTodo} 
        />
      ))}
      <CreateTodo setTodos={setTodos} />
    </div>
  )
}

export default App;
