import React, {Component} from 'react'
import {render} from 'react-dom'

import Viztein from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Viztein Demo</h1>
        <Viztein
         data={{ filename: "http://files.rcsb.org/download/4hhb.pdb" }}
         viewportId="viewport-1"
        />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
