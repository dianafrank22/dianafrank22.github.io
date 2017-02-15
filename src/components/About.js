import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className="about">
			<h3> About </h3>
			<p> about me</p>
			// image
			name, age, education, new york, new orleans
			<p> what i've done </p>
			worked with react, node, express, see more of my work here, see more about my experiences here
			<p> when i'm not coding </p>
			hanging with my dogs, traveling, enjoy making travel videos, reading a crime thriller, searching for the best moscow mule in manhattan,  
			</div>
		)
	}

}