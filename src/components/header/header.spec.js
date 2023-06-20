import Header from "./header";
import {render}  from '@testing-library/react';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList: {
        elements: [{}, {}, {}]
    }
})

describe('Snapshot header testing', () => {

    const headerComponent = render(
        <Provider store={testStore}>
            <Header/>
        </Provider>
    )

    it('renders properly', () => {
        expect(headerComponent).toMatchSnapshot()
    })
});