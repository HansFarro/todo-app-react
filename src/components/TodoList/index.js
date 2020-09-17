import React from 'react';
import { TodoContainer, TodoListLi } from './TodoList.styles';
import Todo from '../Todo';

const TodoList = ({todos}) => {
    return ( 
    <TodoContainer>
        <TodoListLi>
        {todos.map(todo => (
            <Todo />
        ))}
        </TodoListLi>
    </TodoContainer>
    );
}
 
export default TodoList;