import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (
    <div className='todoitem-container'>
        <h3>{todo.text}</h3>
        <div className='button-container'>
            <button className='mark-complete'> MArk as Completed</button>
            <button className='remove'>Remove</button>
        </div>

    </div>
);

export default TodoListItem;