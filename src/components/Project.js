import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer'

export default class Project extends Component{
  constructor(){
    super();
    this.state={
      projects: []
    }
  }

componentDidMount(){
  fetch('/project').then(response => response.json()).then(result=>{
      this.setState({
        projects: result.projects
      })
    })
}

  render(){
    return(
      <div>
      <h2 className="text-center header"> Projects</h2>
        <ProjectContainer projects={this.state.projects}/>
      </div>
    )
  }

}