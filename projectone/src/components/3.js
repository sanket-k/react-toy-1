import React, {Component} from "react";

class Three extends Component{
  constructor (){
    super();

    this.state = {
      value: 1
    }
  }

  componentDidMount(){
    this.setState({
      value: this.state.value + 29
    })
  }

  render(){
    return(
    <div>
      <l1>3 - Line form three (component-3) </l1>
      <br />
      3 -state value = {this.state.value}
    </div>
  );
  }
}

export default Three;
// state
