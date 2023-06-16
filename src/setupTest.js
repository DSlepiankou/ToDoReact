import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

console.error = message =>{
    throw new Error(message)
}
