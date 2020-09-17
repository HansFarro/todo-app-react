import React from 'react';
import { TodoDiv, TodoItem, CheckButton, TrashButton } from './Todo.styles';

const Todo = () => {
    return ( 
        <TodoDiv>
            <TodoItem>Hey</TodoItem>
            <CheckButton>
                <i class="fas fa-check"></i>
            </CheckButton>
            <TrashButton>
                <i class="fas fa-trash"></i>
            </TrashButton>
        </TodoDiv>
     );
}
 
export default Todo;