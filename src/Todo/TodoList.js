import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {connect} from 'react-redux';
import {remove} from './actions';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed}) => (
   <div className="todo-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem key = {todo.id} todo={todo} onRemovePressed={onRemovePressed} />)}
</div>

    )
    const mapStateToProps = state =>({
        todos: state.todos,
    });
    const mapDispatchToProps = dispatch => ({
        onRemovePressed: text=> dispatch(remove(text)),
    });

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)