import React, { Component } from 'react';

class Four extends Component{
  constructor(){
    super();
    this.state = {
      value: 1
    }
    this._addByOne = this._addByOne.bind(this)
  }

  _addByOne(){
    console.log('click')
    this.setState({
      value: this.state.value + 1
    })
  }

  render(){
    return(
      <div>
        4-
        <button onClick={this._addByOne}> click </button>
        => {this.state.value}
      </div>
    );
  }
}

export default Four;
// Binding
// click event
