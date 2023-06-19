import  configureStore  from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemAddForm from './item-add-form';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList:{
        elements:[]
    }
})

describe('Item add form testing', () => {

    const itemAddPanelComponent = render(
        <Provider store={testStore}>
            <ItemAddForm/>
        </Provider>
    )

    it('renders properly', () => {
        expect(itemAddPanelComponent).toMatchSnapshot()
    });

});