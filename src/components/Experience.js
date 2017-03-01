import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Experience extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
		<div className='experience center'>
       <h2 className="header text-center">Work</h2>
         <h4>Komeeda <b>February 2017 - Present</b></h4> 
         <p> <b> Developer Intern</b> description</p>
         <h4>Nimblestack <b>April 2016 - October 2016</b></h4>
         <p> <b>Fullstack Developer</b>  description</p>
         <h4>Eden House <b> August 2014- May 2015</b></h4>
         <p> <b>Position</b> description</p>
      <h2 className="header text-center">Skills </h2>
        <h3>I have experience with working with some of the following... </h3>
        <p>React, Redux, Javascript, Mocha, Chai, Node.js, Express, Ruby, Rails, Sinatra, JSON, jQuery, SVG</p>
      <h2 className="header text-center">Education</h2>
      <h5>General Assemblys WDI</h5>
      <h5> Tulane University</h5> 
      <h2 className="header text-center">Other</h2>
        <h4>hackathon - brewhacks</h4>
        <h4>hackathon - disrupt tech crunch</h4>
        <h4>speaking</h4>
        <h4>hackathon - comedyhackday</h4>
    </div>
		  
			 
		)
	}

}