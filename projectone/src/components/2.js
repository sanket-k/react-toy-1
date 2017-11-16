import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Two extends Component {
  render() {
    const isDefault = this.props.isDefault
    var displayValue = "this is default prop(from component-2)"
    if(!isDefault){
      displayValue = (<NewLine name={this.props.name} />)
    }
    console.log(isDefault);
    return (
      <div className="two">
        <span>2.1 - This is from two(component-2) {displayValue} </span>
      </div>
    );
  }
}

class NewLine extends Component{
  render(){
    return(
      <div className = "newLine">
        <span>2.2 - component 2-B {this.props.name} </span>
      </div>
    )
  }
}

export default Two;

Two.defaultProps = {name: "default prop(component-2)"}

Two.propTypes = {
  name: PropTypes.string,
  isDefault: PropTypes.bool
}
// demo for condition operators
