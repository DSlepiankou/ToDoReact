import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import ToDoFilter from './todo-filter';
import '@testing-library/jest-dom';


const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList: {
        elements: []
    }
})

describe('Shapshot filtering test', () => {

    const todoFilter = render(
        <Provider store={testStore}>
            <ToDoFilter />
        </Provider>,)

    it('renders properly', () => {
        expect(todoFilter).toMatchSnapshot()
    });
});