const TodoList = ({ item, onDelete, onEdit, onToggle }) => (
  <li className={`task ${item.completed ? 'done' : ''}`}>
    <label>
      <input checked={item.completed} onChange={onToggle} type="checkbox" />
      <span>{item.title}</span>
    </label>
    <div className="task-actions">
      <button aria-label={`Edit ${item.title}`} onClick={onEdit} type="button">Edit</button>
      <button aria-label={`Delete ${item.title}`} className="delete" onClick={onDelete} type="button">Delete</button>
    </div>
  </li>
)

export default TodoList
