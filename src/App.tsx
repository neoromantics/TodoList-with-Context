import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoContextProvider from './TodoContext';

function App() {
  return (
    <>
      <TodoContextProvider>
        <h1>TODO LIST</h1>
        <AddTodo />
        <TodoList />
      </TodoContextProvider>
    </>
  );
}

export default App;
