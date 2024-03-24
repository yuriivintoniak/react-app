import React from 'react';
import { useState } from 'react';

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos(prev => [
      {
        id: new Date(),
        title: title,
        isCompleted: false
      },
      ...prev
    ]);
    setTitle('');
  }

  return (
    <div className='flex items-center justify-between mt-10 mb-4 
      px-5 py-3 rounded-2xl border-zinc-800 border-2 w-full'>
      <input 
        type="text"
        placeholder='Add a task' 
        onChange={e => setTitle(e.target.value)} 
        value={title} 
        onKeyDown={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
      />
    </div>
  )
}

export default CreateTodo;
