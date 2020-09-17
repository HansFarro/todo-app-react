import React from 'react';
import { Forms, Input, Button, ContainerSel, Select } from './Form.styles';

const Form = ({ inputText, setInputText, setTodos, todos}) => {
    // {inputText,setInputText, todos, setTodos}
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: 'sth'}
        ]);
    };

    return ( 
        <Forms>
            <Input onChange={inputTextHandler}></Input>
            <Button onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </Button>
            <ContainerSel>
                <Select>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </Select>
            </ContainerSel>
        </Forms>
     );
}
 
export default Form;