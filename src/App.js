import React,{Fragment,useState} from 'react';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("")
  // const [todos, setTodos] = useState([]);
  return (
    <Fragment>
      <header>
        <h1>TODO List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText}/>
      {/* todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} */}
    </Fragment>
  );
}

export default App;
