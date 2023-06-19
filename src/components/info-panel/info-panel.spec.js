import  configureStore  from 'redux-mock-store';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoPanel from './info-panel';

const mockStore = configureStore([]);

const testStore = mockStore({
    toDoList:{
        elements:[]
    }
})

describe('Info panel component testing', () => {

    const infoPanelComponent = render(
        <Provider store={testStore}>
            <InfoPanel/>
        </Provider>
    )

    it('renders properly', () => {
        expect(infoPanelComponent).toMatchSnapshot()
    });

});