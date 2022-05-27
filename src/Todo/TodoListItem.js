import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed }) => (
    <div className='todoitem-container'>
        <h3>{todo.text}</h3>
        <div className='button-container'>
            <button className='mark-complete'> MArk as Completed</button>
            <button className='remove'
            onClick={()=>onRemovePressed(todo.text)}
            >Remove</button>
        </div>

    </div>
);

export default TodoListItem;