/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// describe('describe outer', () => {
//   console.log('describe outer-a');

//   describe('describe inner 1', () => {
//     console.log('describe inner 1');

//     test('test 1', () => console.log('test 1'));
//   });

//   console.log('describe outer-b');

//   test('test 2', () => console.log('test 2'));

//   describe('describe inner 2', () => {
//     console.log('describe inner 2');

//     test('test 3', () => console.log('test 3'));
//   });

//   console.log('describe outer-c');
// });

beforeAll(() => console.log('connection setup'));
beforeAll(() => console.log('database setup'));

afterAll(() => console.log('database teardown'));
afterAll(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});