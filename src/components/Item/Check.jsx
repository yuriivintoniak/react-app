import React from 'react';
import cn from 'classnames';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isCompleted }) => {
  return (
    <div className={cn('border-2 rounded-lg border-pink-400 w-5 h-5 mr-3 flex items-center justify-center', 
      {'bg-pink-400': isCompleted},
    )}>
      {isCompleted &&
        <BsCheck size={24} className='text-gray-900' />
      }
    </div>
  )
}

export default Check;
