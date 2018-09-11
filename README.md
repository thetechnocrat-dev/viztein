# Viztein

Viztein is a React library component for **vi**suali**z**ing **tein**s and other macromolecules. The code is a light wrapper around [NGL](https://github.com/arose/ngl) which uses [WebGL](https://get.webgl.org/) for rendering graphics.

[![npm version](https://badge.fury.io/js/viztein.svg)](https://badge.fury.io/js/viztein)

## Examples
[Basic Example](https://jsfiddle.net/mcmenemy/usq4216m/)

## Quickstart

```
$ npm install viztein
```

```
import { Viztein } from 'viztein';

class Example extends React.Component {  
  render() {
    return (
      <Viztein data={{ filename: "https://files.rcsb.org/download/4hhb.pdb" }} />
    );
  }
};
```

## Installation

### NPM

```
# latest stable
$ npm install viztein
```

### CDN
```html
<script src="https://unpkg.com/viztein@0.1.4/umd/viztein.js"></script>
```

### Dev Build

```
$ git clone https://github.com/mcmenemy/viztein.git
$ cd viztein
$ npm install
$ npm start
```