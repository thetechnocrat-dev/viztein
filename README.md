# Viztein

Viztein is a React library component for **vi**suali**z**ing pro**tein**s and other macromolecules. The code is a light wrapper around [NGL](https://github.com/arose/ngl) which uses [WebGL](https://get.webgl.org/) for rendering graphics.

[![Build Status](https://travis-ci.org/McMenemy/viztein.svg?branch=master)](https://travis-ci.org/McMenemy/viztein)
[![npm version](https://badge.fury.io/js/viztein.svg)](https://badge.fury.io/js/viztein)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quickstart

```
$ npm install viztein
```

```
import Viztein from 'viztein';

class Example extends React.Component {
  render() {
    return (
      <Viztein data={{ filename: "https://files.rcsb.org/download/4hhb.pdb" }} />
    );
  }
};
```

[JSFiddle](https://jsfiddle.net/mcmenemy/usq4216m/)

## Examples

[Default with Custom Viewport Style](https://jsfiddle.net/mcmenemy/unf82t7p/)

[Ball and Stick](https://jsfiddle.net/mcmenemy/ho62qcwd/)

[Ball and Stick Custom Ratio](https://jsfiddle.net/mcmenemy/uk0easm9/)

[Custom Color](https://jsfiddle.net/mcmenemy/cvo3gq64/)

## Installation

### NPM

```
# latest stable
$ npm install viztein
```

### CDN

```html
<script src="https://unpkg.com/viztein@0.1.7/umd/viztein.js"></script>
```

## Component Properties

#### Data (Array or Array of objects) Required

The macromolecule source and display config data.

Requires a filename key which can be a file path or url path to the source data. Supported file types are mmCIF, PDB, PQR, GRO, SDF, MOL2, and MMTF. A config key can also be passed in to change the display options. Each config option contains a type and input. The type is the name of the NGL function to use and the input are the arguments to pass in. A list of display functions is found in the [NGL molecular display documentation](http://nglviewer.org/ngl/api/manual/molecular-representations.html).

data Prop Example:

```
[
  {
    filename: 'https://files.rcsb.org/download/4hhb.pdb',
    config: [
      {
        type: 'addRepresentation',
        input: ['ball+stick', { color: 'orange' }]
      }
    ]
  },
  {
    filename: 'https://files.rcsb.org/download/3PQR.pdb',
    config: [
      {
        type: 'addRepresentation',
        input: ['cartoon', { color: 'green' }]
      }
    ]
  }
];
```

#### ViewportId (string) optional

Id of the div element to render the graphic inside. When rendering multiple Viztein components on the same page, pass in an unique viewportId prop to each Viztein component.

viewportId Default

```
'viztein-viewport'
```

#### ViewportStyle (object) optional

CSS style of the viewport.

viewportStyle Default

```
{
  backgroundColor: 'black',
  width: '500px',
  height: '500px'
}
```

## Dev Build

```
$ git clone https://github.com/mcmenemy/viztein.git
$ cd viztein
$ npm install
$ npm start
```
