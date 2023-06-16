import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { saveElements, getElements, saveFilter, getFilter } from "../repository/repository";

const initialState = {
  elements: getElements(),
  filtering: getFilter(),
};


export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addElement: (state, action) => {
      const input = action.payload;

      if (input !== "") {
        const newElement = {
          content: input,
          completed: false,
          id: uuidv4(),
        };

        state.elements.push(newElement);
        saveElements(state.elements);
      }
    },

    deleteElement: (state, action) => {
      const id = action.payload;
      state.elements = state.elements.filter((el) => el.id !== id);
      saveElements(state.elements);
    },

    deleteAllCompleted: (state) => {
      console.log(state);
      state.elements = state.elements.filter((el) => !el.completed);
      saveElements(state.elements);
    },

    checkCompleted: (state, action) => {
      const id = action.payload;
      const index = state.elements.findIndex((el) => el.id === id);
      state.elements[index].completed = !state.elements[index].completed;
      saveElements(state.elements);
    },

    changeFilter: (state, action) => {
      const filter = action.payload;
      state.filtering = filter;
      saveFilter(filter);
    }
  },
});

export const {
  addElement,
  deleteElement,
  checkCompleted,
  deleteAllCompleted,
  changeFilter,
} = toDoListSlice.actions;

export default toDoListSlice.reducer;