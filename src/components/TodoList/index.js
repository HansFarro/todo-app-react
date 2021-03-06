import React from 'react';
import { TodoContainer, TodoListLi } from './TodoList.styles';
import Todo from '../Todo';

const TodoList = ({todos, setTodos, filterTodos}) => {
    return ( 
    <TodoContainer>
        <TodoListLi>
            {filterTodos.map(todo => (
                <Todo 
                    text={todo.text} 
                    setTodos={setTodos} 
                    todos={todos}
                    todo={todo} 
                    key={todo.id} 
                />
            ))}
        </TodoListLi>
    </TodoContainer>
    );
}
 
export default TodoList;