

import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
    },
    reducers: {
        addToDo: (state, action) => {
            let newTodoList = {
                id: Math.random(),
                content: action.payload.newContent
            }
            state.todoList.push(newTodoList);
        },
        deleteToDo: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.filter((item) =>
                item.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.map((item) =>
                item.id === action.payload.id ? action.payload : item);
        }
    },
})

export const sendListData = (todo) => {
    return (dispatch) => {

        fetch('https://todo-fetch-2e027-default-rtdb.firebaseio.com/todo.json', {
            method: 'PUT',
            body: JSON.stringify(todo)
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Sending todo list')
            }
        })
    }
}

export const getListData = (todo) => {
    return (dispatch) => {

        fetch('https://todo-fetch-2e027-default-rtdb.firebaseio.com/todo.json', {
            method: 'GET',
            // body: JSON.stringify(todo)
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Sending todo list Get')
            }
        })
    }
}

// export const { addToDo, deleteToDo, editTodo } = todoSlice.actions
export const { addToDo, deleteToDo, editTodo } = todoSlice.actions
export default todoSlice;