import  configureStore  from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import ItemsList from './items-list';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList:{
        elements:[
            {content:"test item 1", completed: false, id: 1},
            {content:"test item 2", completed: true, id: 2},
            {content:"test item 3", completed: false, id: 3}]
    }
})

describe('Item list component testing', () => {

    const itemsListComponent = render(
        <Provider store={testStore}>
            <ItemsList/>
        </Provider>
    )

    it('renders properly', () => {
        expect(itemsListComponent).toMatchSnapshot()
    });

});