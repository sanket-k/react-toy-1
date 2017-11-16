import React, { Component } from 'react';
import One from './1'
import Two from './2'
import Three from './3'
import Four from './4'

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <h1> heading (component from Project) </h1>
        <One name="this is a prop"/>
        <Two name="this is a prop for 2" isDefault={false}/>
        <Three />
        <Four />
      </div>
    );
  }
}

export default Project;
