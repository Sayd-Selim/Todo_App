import React from 'react'
import { Check } from './Check'
import { RiChatDeleteFill } from 'react-icons/ri'

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  changeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const Todoitem: React.FC<TodoItemProps> = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className={`m-auto max-w-lg flex items-center justify-between mb-4 bg-gray-800 rounded-2xl p-3 ${
        todo.completed && 'line-through'
      }`}
    >
      <div className='flex items-center'>
        <Check todo={todo} changeTodo={changeTodo} />
        <label htmlFor=''>{todo.title}</label>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className='hover:text-pink-600'
      >
        <RiChatDeleteFill />
      </button>
    </div>
  )
}