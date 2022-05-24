import React, { useState } from 'react';
import './NewTodoForm.css';
import {connect} from 'react-redux';

const NewTodoForm = ({todos}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='new-todo-form'>
            <input
            className='new-todo-input'
            type= "text"
            value={inputValue}
            placeholder='Type the todo task'
            onChange= {e=> setInputValue(e.target.value)} />
            <button className='new-todo-button'>Create Todo</button>
            
        </div>
    );
};
const mapStatetoProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch =>({
    onCreatePressed: text => dispatch(createTodo(text)),
});
export default  connect (mapStatetoProps,mapDispatchToProps)(NewTodoForm);