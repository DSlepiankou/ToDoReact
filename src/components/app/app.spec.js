import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from "./app";

Enzyme.configure({ adapter: new Adapter() });

it('App component contains nested components', ()=> {

    const appComponent = shallow(<App/>)
    
    expect(appComponent.find('Header')).toHaveLength(1)
    expect(appComponent.find('ItemAddForm')).toHaveLength(1)
    expect(appComponent.find('ItemsList')).toHaveLength(1)
    expect(appComponent.find('InfoPanel')).toHaveLength(1)
})