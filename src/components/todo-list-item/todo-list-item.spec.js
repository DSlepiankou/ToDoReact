import  configureStore  from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import TodoListItem from './todo-list-item';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList:{
        elements:[]
    }
})

describe('Todo list item component testing', () => {

    const todoListItem = render(
        <Provider store={testStore}>
            <TodoListItem/>
        </Provider>
    )

    it('renders properly', () => {
        expect(todoListItem).toMatchSnapshot()
    });

});