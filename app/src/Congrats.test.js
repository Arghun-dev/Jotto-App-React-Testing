import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './helpers/test';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  
});

test('renders no text when `success` props is false', () => {

});

test('renders non-empty congrats message when success prop is true', () => {

})