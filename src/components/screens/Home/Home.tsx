import React, { useState } from 'react'
import { Todoitem } from './item/Todoitem'
import { CreateTodo } from './Create-Todo-Field/CreateTodo'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

const initialTodos: Todo[] = []

export const Home: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [filter, setFilter] = useState<Filter>('all')

  const clearTodos = () => {
    setTodos([])
  }

  const countTodos = () => {
    return todos.filter(todo => !todo.completed).length
  }


  const changeTodo = (id: number) => {
    const copy = [...todos]
    const current = copy.find((todo: Todo) => todo.id === id)
    if (current) {
      current.completed = !current.completed
      setTodos(copy)
    }
  }

  const addTodo = (title: string) => {
    setTodos([
      {
        id: todos.length + 1,
        title: title,
        completed: false
      },
      ...todos
    ])
  }

  const removeTodo = (id: number) => {
    const copy = [...todos]
    const current = copy.filter((todo: Todo) => todo.id !== id)
    setTodos(current)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });

  return (
    <div className='text-2xl text-center text-white'>
      <h1 className='font-bold mb-10'>Список Задач</h1>

      <CreateTodo addTodo={addTodo} />
      <p>Оставшиеся задачи: {countTodos()}</p> {/* Счетчик задач */}
      {todos.length === 0 && <h1>Список задач пока-что пуст</h1>}
      {filteredTodos.map((todo: Todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <div className="mt-5 p-5 bg-gray-800 rounded">
        <button className="mx-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setFilter('all')}>Все</button>
        <button className="mx-2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700" onClick={() => setFilter('active')}>Активные</button>
        <button className="mx-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700" onClick={() => setFilter('completed')}>Завершённые</button>
        <button className="mx-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700" onClick={clearTodos}>Очистить все</button> {/* Кнопка для очистки */}
      </div>
    </div>
  )
}