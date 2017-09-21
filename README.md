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


