import React from 'react';
import cn from 'classnames';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='flex items-center justify-between mb-4 p-5 
      rounded-2xl bg-zinc-800 w-full'>
      <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} /> 
        <span className={cn({'line-through': todo.isCompleted})}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash size={22} className='text-gray-500 hover:text-white 
          transition-colors ease-in-out duration-300' 
        />
      </button>
    </div>
  )
}

export default TodoItem;
