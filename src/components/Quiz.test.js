import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Quiz from './Quiz';
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Quiz />);
   });
});
