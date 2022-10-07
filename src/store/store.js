import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import todoSlice from "../features/todoSlice";
import jsonSlice from "../features/jsonSlice";

export const store = configureStore({
    reducer : {
        user:userSlice,
        todos:todoSlice,
        json:jsonSlice,
    },
})