import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      columnData: [],
    }
  }

saveColumnData(event, key) {
  const value = event.target.value;
  let localColumnData = [...this.state.columnData];
  if(value) {
    localColumnData[key] = value;
    this.setState({
      columnData: localColumnData,
    })
  }
}

handleAddClick = () => {
  let localTable = [...this.state.tableData];
  _.map(localTable, (value, key) => {
    value.columns.push(this.state.columnData[key])
  })
  let columnRaw = _.map(this.state.tableData, (value) => {
    return ''
  })
  this.setState({
    tableData: localTable,
    columnData: columnRaw,
  })
}

handleClearClick = () => {
  let rawColumn = _.map(this.state.tableData, (value) => {
    return ''
  })
  this.setState({
    columnData: rawColumn,
  })
}

componentWillMount() {
  let columnRaw = _.map(this.props.heading, (value) => {
    return ''
  })
  this.setState({
    columnData: columnRaw,
  })
}

componentDidMount() {
  let rawTable = [...this.props.heading];
  rawTable = _.map(rawTable, (value) => {
    if(!value.columns){
      return {...value, columns: []};
    }else{
      return value;
    }
  })
  this.setState({
    tableData: rawTable,
  })
}

  render() {
    return (
      <div className="container">
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col-12" style={{textAlign: 'right'}}>
            <a className="deletebtn" onClick={this.handleAddClick}>Add</a> |
            <a className="deletebtn" onClick={this.handleClearClick}> Clear</a>
          </div>
        </div>
      <table className="table">
        <tbody>
        {
          _.map(this.state.tableData, (row, rowKey) => {
            return (
            <tr key={row.header}>
              <th>{row.header}</th>
              {
                _.map(row.columns, (column, key) => {
                  return (
                    <td key={column+key}>{column}</td>
                  )
                })
              }
              {
                this.props.editable &&
                <td>
                  <input type="text"onChange={(event) => this.saveColumnData(event,rowKey)} 
                  value={this.state.columnData[rowKey]}
                  />
                </td>
              }
            </tr>
            )
          })
        }
        </tbody>
      </table>
      </div>
    )
  }
}

App.propTypes = {
  heading: PropTypes.array,
  editable: PropTypes.bool,
}

App.defaultProps = {
  heading: [
    { header: 'first heading' },
    { header: 'second heading' },
    { header: 'third heading' }
  ],
  editable: true,
}

export default App;