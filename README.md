# react-table-vertical-heading
A React component rendering a table with vertical heading with the ability to add new columns

# Examples
To try this component, clone this repo and run:
```
npm install
npm start
```

![Demo Image](https://github.com/elghali/react-table-vertical-heading/blob/master/public/images/demo1.png)

# Usage

```
import React, { Component } from 'react';
import VerticalTable from 'react-table-vertical-heading';

class VitalSigns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: [],
    }

  }

  componentDidMount() {
    const heading = [
      {
        header: 'first row',
        columns: ['first column', 'second column'],
      },
      {
        header: 'second row',
        columns: ['first column', 'second column'],
      },
      {
        header: 'third row',
        columns: ['first column', 'second column'],
      },
    ]
    

    this.setState({
      heading,
    })
  }


  render() {
    return(
            <VerticalTable 
              heading={this.state.heading}
              editable={true}
            />
    )
  }
}

# Props

Property | Type | Default | Description
---------|------|---------|------------
heading  |array | `[{ header: 'first heading' },{ header: 'second heading' },{ header: 'third heading' }]` | An array defining the headings, and if you want to define your own columns, you can add `columns` to every object as in the **Usage** section

editable | boolean | true | you can set `editable` to `true` to make the table editable and allow columns addition, otherwise the table will be generated with the `heading` array you pass to the component


