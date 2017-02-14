import React, { PropTypes, Component } from 'react';

export default class Project extends React.component{
	constructor(props){
		super();
		this.getProjects()
	}

	getProjects(){
		fetch('/project').then(response => response.json()).then(result=>{
			console.log(result)
			this.setState({
				projects: result
			})
		})
	}

	render(){
		return(
			<div className="projects">
				<h3> Projects </h3>
			</div>
		)
	}

}