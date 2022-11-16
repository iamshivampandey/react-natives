import renderer from 'react-test-renderer';
import Link from './Link';

// it('changes the class when hovered', () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com" children="beta" />,
//   );
//   console.log(component.toJSON)
//   tree = component.toJSON();
//   expect(tree).toMatchInlineSnapshot(`
//     <View>
//       <Text
//         className="normal"
//         href="http://www.facebook.com"
//       >
//         shivam 
//         beta
//          account
//       </Text>
//     </View>
//   `);

//   // expect(tree).toMatchSnapshot();

//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// });
describe('',() => {
  test("returns undefined by default", () => {
  const mock = jest.fn();
  let result = mock("foo");
  console.log(mock.mock)
  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
})})
