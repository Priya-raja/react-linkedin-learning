export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE = 'REMOVE';

export const createTodo = text => ( {
    type: CREATE_TODO,
    payload: {text},
});

export const remove = text => ({
    type: REMOVE,
    payload: {text},
});