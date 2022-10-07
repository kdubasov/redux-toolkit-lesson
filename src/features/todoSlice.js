import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            state.todos.push(action.payload);
        },
        toggleComplited:(state,action) => {
            const toggleToDo = state.todos.find(todo => todo.id === action.payload);
            toggleToDo.completed = !toggleToDo.completed;
        },
        deleteTodo:(state,action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        }
    },
})

export const {addTodo,toggleComplited,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
