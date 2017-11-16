import React, { Component } from 'react';
import PropTypes from 'prop-types';

class One extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
    this.state = { count: 0};
    this.click = this.click.bind(this);
  }

  click(){
    alert("clicked");
    console.log(this);
  }

  render() {
    return (
      <div onClick= {this.click} className="one">

        <l1>1 -  This is One {this.props.name} (component-1)</l1>
      </div>
    );
  }
}

One.defaultProps = {name: "this is default prop"}

One.propTypes = {
  name: PropTypes.string
}

export default One;



//Props
//Deafult Props
//setting prop types
//state
