
import renderer from 'react-test-renderer';
import Link from './Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // expect(tree).toMatchSnapshot();

  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});