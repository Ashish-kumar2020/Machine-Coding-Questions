import { useEffect, useMemo, useState } from 'react'
import TodoList from './TodoList'

const STORAGE_KEY = 'todo-items'

const readTodos = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const Todo = () => {
  const [todos, setTodos] = useState(readTodos)
  const [task, setTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const visibleTodos = useMemo(
    () => todos.filter((todo) => filter === 'all' || (filter === 'active' ? !todo.completed : todo.completed)),
    [todos, filter],
  )

  const submitTask = (event) => {
    event.preventDefault()
    const value = task.trim()
    if (!value) return

    if (editingId) {
      setTodos((current) => current.map((todo) => (todo.id === editingId ? { ...todo, title: value } : todo)))
      setEditingId(null)
    } else {
      setTodos((current) => [{ id: crypto.randomUUID(), title: value, completed: false }, ...current])
    }
    setTask('')
  }

  const startEdit = (todo) => {
    setTask(todo.title)
    setEditingId(todo.id)
  }

  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    <main className="todo-app">
      <section className="todo-card" aria-labelledby="todo-title">
        <p className="eyebrow">PERSONAL PLANNER</p>
        <h1 id="todo-title">Things to do</h1>
        <p className="subtitle">A calm place to keep your day moving.</p>

        <form className="task-form" onSubmit={submitTask}>
          <input
            aria-label="Task description"
            autoFocus
            onChange={(event) => setTask(event.target.value)}
            placeholder="What needs doing?"
            value={task}
          />
          <button type="submit">{editingId ? 'Save' : 'Add task'}</button>
        </form>

        {editingId && (
          <button className="cancel-edit" onClick={() => { setEditingId(null); setTask('') }} type="button">
            Cancel editing
          </button>
        )}

        <div className="toolbar">
          <div className="filters" aria-label="Filter tasks">
            {['all', 'active', 'completed'].map((option) => (
              <button
                className={filter === option ? 'selected' : ''}
                key={option}
                onClick={() => setFilter(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
          <span>{remaining} {remaining === 1 ? 'task' : 'tasks'} left</span>
        </div>

        <ul className="task-list">
          {visibleTodos.map((todo) => (
            <TodoList
              item={todo}
              key={todo.id}
              onDelete={() => setTodos((current) => current.filter((entry) => entry.id !== todo.id))}
              onEdit={() => startEdit(todo)}
              onToggle={() => setTodos((current) => current.map((entry) => entry.id === todo.id ? { ...entry, completed: !entry.completed } : entry))}
            />
          ))}
        </ul>

        {!visibleTodos.length && <p className="empty">Nothing here yet. Add a task to get started.</p>}
        {todos.some((todo) => todo.completed) && (
          <button className="clear" onClick={() => setTodos((current) => current.filter((todo) => !todo.completed))} type="button">
            Clear completed
          </button>
        )}
      </section>
    </main>
  )
}

export default Todo
