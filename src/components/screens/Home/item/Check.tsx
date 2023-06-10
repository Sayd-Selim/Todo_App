import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";

interface CheckProps {
  todo: {
    id: number;
    completed: boolean;
  };
  changeTodo: (id: number) => void;
}

export const Check: React.FC<CheckProps> = ({ todo, changeTodo }) => {
  return (
    <button className='mr-4'>
        <BsFillPatchCheckFill onClick={() => changeTodo(todo.id)} color={todo.completed ? '#0ea5e9' : undefined} size={21}/>
    </button>
  )
}