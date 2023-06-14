import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todo-actions";

export const store = configureStore({
    reducer: {
        toDoList: reducer,
    },
});