import React from 'react';
import { TodoDiv, TodoItem, TodoLine , CheckButton, TrashButton } from './Todo.styles';

const Todo = ({text, todo, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed:!item.completed
                }
            }
            return item
        }))
    };

    return ( 
        <TodoDiv>
            {!todo.completed ? <TodoItem >{text}</TodoItem> : <TodoLine >{text}</TodoLine>}
            <CheckButton onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </CheckButton>
            <TrashButton onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </TrashButton>
        </TodoDiv>
     );
}
 
export default Todo;