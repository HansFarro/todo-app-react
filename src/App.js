import React,{Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])
  // cada vez que hay un cambio en todo o status
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    filterHandler()
    saveLocalTodos()
  }
,[todos, status])

// guardar en local storage
const saveLocalTodos = () => {
  localStorage.setItem("todos",JSON.stringify(todos));
}

const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos",JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};  


  return (
    <Fragment>
      <header>
        <h1>TODO List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos}/>
    </Fragment>
  );
}

export default App;
