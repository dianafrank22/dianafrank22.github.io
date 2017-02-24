import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Projectcard extends Component{
  constructor(props){
    super(props);
    this.state ={
    	projects: props.projects
    }
  }

  // @TODO has to be better to do this
	
  
	render(){
	let div ="";
	let eachProject = [];
	let projects = this.props.projects
	for(let i =0;i<projects.length; i++){
		let project = projects[i]
		  div =<a key={i} className="project-link" href={project.website}> 
      <div className="border-shadow card">
		    <img className="project-image" src={'../../public/img/'+project.photo_file_name} alt={project.title}/>
          <div className="padding-left-right-5 project-info">
		        <h3 className="text-center header">{project.title}</h3>
		        <p> {project.description}</p>
		        <h4> <i> {project.skills}</i></h4>
          </div>
      </div>
    </a>
		eachProject.push(div)
	}
		return(
		<div id='container'>
		 	{eachProject}
		</div>)
	}

}