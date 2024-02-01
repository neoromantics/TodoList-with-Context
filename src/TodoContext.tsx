import React, { ReactNode, useContext, useState } from 'react';
import { Todo } from './TodoList';

interface TodoContextType {
  todos: Todo[];
  addTodo: (inputValue: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}

interface Props {
  children: ReactNode;
}

const TodoContext = React.createContext<TodoContextType>({} as TodoContextType);
const TodoContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const editTodo = (id: string, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (inputValue: string) => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: new Date().toDateString() + Math.random() * 10,
          text: inputValue.trim(),
        },
      ]);
    }
  };
  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        addTodo: addTodo,
        editTodo: editTodo,
        deleteTodo: deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoContext, useTodo };
export default TodoContextProvider;
