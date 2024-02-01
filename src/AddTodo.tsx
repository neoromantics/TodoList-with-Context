import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodo } from './TodoContext';

interface AddTodo {
  onAddTodo: (text: string) => void;
}

const AddTodo = () => {
  const { addTodo } = useTodo();
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>
        <input
          type="text"
          value={inputValue}
          placeholder="add a todo"
          onChange={(event) => onChange(event)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
