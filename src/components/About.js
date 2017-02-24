import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class About extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='about'>
			<h3 className="header text-center"> About </h3>
			<p> about me</p>
			// image
			name, age, education, new york, new orleans
			<p> what i've done </p>
			worked as a fullstack developer for almost a year now. Attended General Assmebly WDI from december - march. Got a job as a fullstack developer in april 2016 at a small startup. I worked there building
			an AI chatbot, and the frontend for user authentication. Since my departure in october, i have been building my own projects and working part time as a developer at a smallstartup Komeeda, working with rails. 
			worked with react, node, express, see more of my work here, see more about my experiences here
			<p> when i'm not coding </p>
			hanging with my dogs, traveling, enjoy making travel videos, cooking, reading a crime thriller, searching for the best moscow mule in manhattan,  
			</div>
		)
	}

}