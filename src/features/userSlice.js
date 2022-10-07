import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:'',
    surname:'',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setName: (state,action) => {
            state.name = action.payload;
        },
        setSurname: (state,action) => {
            state.surname = action.payload;
        },
    }
})

export const {setName,setSurname} = userSlice.actions;
export default userSlice.reducer;