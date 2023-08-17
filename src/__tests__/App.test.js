import renderer from 'react-test-renderer';

import App from '../App.jsx';

describe('App', () => {
  it('renders App component', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
