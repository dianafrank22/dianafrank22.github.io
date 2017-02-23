import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Projectcard extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    	projects: props.projects
    }
  }
	
  
	render(){
	let div ="";
	let eachProject = [];
	let projects = this.props.projects
	for(let i =0;i<projects.length; i++){
		let project = projects[i]
		div = <div key={i} className="card">
		<img src={'../../public/img/'+project.photo_file_name} alt={project.title}/>
		<a href={project.website}><h3>{project.title}</h3></a>
		<p> {project.description}</p>
		<h4> <i> {project.skills}</i></h4>
		</div>
		eachProject.push(div)
	}
		return(
		<div id='container'>
		<h4> Projects</h4>
		 	{eachProject}
		</div>)
	}

}