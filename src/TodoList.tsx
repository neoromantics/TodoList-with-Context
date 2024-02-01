import { ChangeEvent, useState } from 'react';
import { useTodo } from './TodoContext';

export interface Todo {
  id: string;
  text: string;
}

const Todo = ({ id, text }: Todo) => {
  const { editTodo, deleteTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(text);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value.trim());
  };

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, editInput);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => deleteTodo(id);
  return (
    <>
      {!isEditing ? (
        <div>{text}</div>
      ) : (
        <input type="text" value={editInput} onChange={handleChange} />
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button disabled={isEditing} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

interface TodoList {
  todos: Todo[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <ul>
      {todos &&
        todos.map(({ id, text }) => {
          return <Todo key={id} id={id} text={text} />;
        })}
    </ul>
  );
};

export default TodoList;
