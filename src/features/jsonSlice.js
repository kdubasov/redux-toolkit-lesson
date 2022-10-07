import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

const initialState = {
    json: [],
}

export const getJSON = createAsyncThunk(
    'posts/getJSON',
    async (_,{rejectWithValue,dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setJSON(res.data));
    }
)

export const jsonSlice = createSlice({
    name: "json",
    initialState,
    reducers: {
        setJSON: (state,action) => {
            state.json = action.payload
        }
    },
    extraReducers:{
        [getJSON.pending]: () => console.log('pending'),//ожидание результата
        [getJSON.fulfilled]: () => console.log('fulfilled'),//результат получен
        [getJSON.rejected]: () => console.log('rejected'),//ошибка
    }
})



export const {setJSON} = jsonSlice.actions;

export default jsonSlice.reducer;