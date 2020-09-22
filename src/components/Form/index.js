import React from 'react';
import { Forms, Input, Button, ContainerSel, Select } from './Form.styles';

const Form = ({ inputText, setInputText, setTodos, todos, setStatus}) => {
    // {inputText,setInputText, todos, setTodos}
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText ,completed : false ,id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return ( 
        <Forms>
            <Input value={inputText} onChange={inputTextHandler}></Input>
            <Button onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </Button>
            <ContainerSel>
                <Select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </Select>
            </ContainerSel>
        </Forms>
     );
}
 
export default Form;