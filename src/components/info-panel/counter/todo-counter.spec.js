import ToDoCounter from "./todo-counter";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList: {
        elements: [{}, {}, {}]
    }
})

describe('Shapshot counter testing', () => {

    const todoCounter = render(
        <Provider store={testStore}>
            <ToDoCounter />
        </Provider>,)


    it('Correct display of the number of todo items', () => {
        const todosAmount = screen.getByText('3 more to do')

        expect(todosAmount).toBeInTheDocument();
    })

    it('renders properly', () => {
        expect(todoCounter).toMatchSnapshot()
    })
});