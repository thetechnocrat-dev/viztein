import React, {Component} from 'react'
import {render} from 'react-dom'

import Viztein from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Viztein Demo</h1>
        <Viztein
         data={{ filename: "https://files.rcsb.org/download/4OO8.pdb" }}
         viewportId="viewport-1"
        />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
