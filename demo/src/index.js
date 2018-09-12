import React, {Component} from 'react'
import {render} from 'react-dom'

import Viztein from '../../src'

class Demo extends React.Component {
  render() {
    const viewportStyle = {
      width: '300px',
      height: '300px',
    };

    const data = [{
      filename: 'https://files.rcsb.org/download/4hhb.pdb',
      config: [{
        type: 'addRepresentation',
        input: ['cartoon', {color: 'orange'}]
      }]
    }, {
      filename: 'https://files.rcsb.org/download/3PQR.pdb',
      config: [{
        type: 'addRepresentation',
        input: ['cartoon', {color: 'green'}]
      }]
    }]

    return (
        <Viztein
         data={data}
         viewportStyle={viewportStyle}
        />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
