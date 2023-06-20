import React from "react";
import App from "./app";
import {render}  from '@testing-library/react';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList: {
        elements: [{}, {}, {}]
    }
})

it('App component contains nested components', ()=> {
    
    const todoCounter = render(
        <Provider store={testStore}>
            <App />
        </Provider>)
    
    expect(todoCounter).toMatchSnapshot();
})