import React, { Component } from 'react';
import Projectcard from './Projectcard'


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
			<div className='projects'>
			<h2 className="text-center header"> Projects</h2>
				<Projectcard projects= {this.state.projects} />
			</div>
		)
	}

}