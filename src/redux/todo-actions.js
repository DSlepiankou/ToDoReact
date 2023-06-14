import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    elements: [],
    filter: "all",
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
        }
      },
  
      deleteElement: (state, action) => {
        const id = action.payload;
        state.elements = state.elements.filter((el) => el.id !== id);
      },
  
    //   deleteAllCompleted: (state) => {
    //     state.elements = state.elements.filter((el) => !el.completed);
    //     saveElements(state.elements);
    //   },
  
      checkCompleted: (state, action) => {
        const id = action.payload;
        const index = state.elements.findIndex((el) => el.id === id);
        state.elements[index].completed = !state.elements[index].completed;
      },
  
    //   changeFilter: (state, action) => {
    //     const filter = action.payload;
    //     state.filter = filter;
  
    //     saveFilter(filter);
    //   },
  
    //   reorderElements: (state, action) => {
    //     const result = action.payload;
    //     if (!result.destination) return;
  
    //     const [reorderedEl] = state.elements.splice(result.source.index, 1);
    //     state.elements.splice(result.destination.index, 0, reorderedEl);
  
    //     saveElements(state.elements);
    //   },
    },
  });
  
  export const {
    addElement,
    deleteElement,
    checkCompleted,
    // deleteAllCompleted,
    // changeFilter,
    // reorderElements,
  } = toDoListSlice.actions;
  
  export default toDoListSlice.reducer;