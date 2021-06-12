import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './helpers/test';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => shallow(<Congrats {...props} />);

test('renders component without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('do not show congrats message if congrats props is true', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('')
});

test('show congrats message if congrats props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
})