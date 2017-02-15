import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Project from './Project'

export default class Main extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className="projects_page">
			<Project/>
			</div>
		)
	}

}