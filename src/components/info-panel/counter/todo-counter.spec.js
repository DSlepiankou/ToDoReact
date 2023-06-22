import ToDoCounter from "./todo-counter";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import {render, screen}  from '@testing-library/react';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList: {
        elements: [
            {content:"test item 1", completed: false, id: 1},
            {content:"test item 2", completed: false, id: 2},
            {content:"test item 3", completed: true, id: 3}]
    }
})

describe('Shapshot counter testing', () => {

    const todoCounter = render(
        <Provider store={testStore}>
            <ToDoCounter />
        </Provider>,)


    it('Correct display of the number of todo items', () => {
        const todosAmount = screen.getByText('2 more to do');

        expect(todosAmount).toBeInTheDocument()
    })

    it('renders properly', () => {
        expect(todoCounter).toMatchSnapshot()
    })
});