import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Viztein from 'src/';

describe('Component', () => {
  let node;

  let VizteinDidMountMocked = class extends Viztein {
    componentDidMount() {
      // Webgl does not work with phantom JS
      // TODO figure out how to test Webgl portion
    }
  };

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders with default config', () => {
    render(<VizteinDidMountMocked data={{ filename: './4hhb.pdb' }} />, node);
    expect(true).toExist();
  });
});
