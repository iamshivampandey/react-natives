import List from './List'
import renderer from 'react-test-renderer';

describe('This is List component',() => {
  it('Render component',() => {
    const wrapper = renderer.create(<List />)
  })
})