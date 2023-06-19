import DelButton from "./delete-completed";
import  configureStore  from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList:{
        elements:[]
    }
})

describe('Delete all completed items button', () => {

    const deleteCompletedComponent = render(
        <Provider store={testStore}>
            <DelButton/>
        </Provider>
    )

    it('renders properly', () => {
        expect(deleteCompletedComponent).toMatchSnapshot()
    });

});