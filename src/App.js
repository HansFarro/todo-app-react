import React,{Fragment,useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);

  return (
    <Fragment>
      <header>
        <h1>TODO List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos}/>
    </Fragment>
  );
}

export default App;
