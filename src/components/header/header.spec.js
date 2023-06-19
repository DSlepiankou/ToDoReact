import Enzyme, { shallow } from "enzyme"
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Header from "./header";

Enzyme.configure({ adapter: new Adapter() });

describe('Snapshot header testing', () => {

    const header = shallow(<Header />)

    it('Header component contains h1 tag', () => {
        expect(header.find('h1')).toHaveLength(1)
    })

    it('renders message', () => {
        expect(header.find('h1').text()).toEqual('ToDo List');
    })

    it('renders properly', () => {
        expect(header).toMatchSnapshot()
    })
});