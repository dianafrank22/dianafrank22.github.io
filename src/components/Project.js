import React, { PropTypes, Component } from 'react';
import Projectcard from './Projectcard'


export default class Project extends React.Component{
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
			// check out github
				<Projectcard projects= {this.state.projects} />
			</div>
		)
	}

}