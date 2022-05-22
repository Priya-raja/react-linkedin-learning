import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
const TodoList = ({ todos = [{ id: 1, 'text' : 'hello Arya'}] }) => (
   
    <div className="todo-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem key = {todo.id} todo={todo} />)}
</div>

    )

export default TodoList