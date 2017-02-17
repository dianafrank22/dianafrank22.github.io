import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Experience extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
		<div className='experience'>
    <h2> Experience </h2>
    <h5>See projects <i> here </i></h5>

       <h3>Work</h3>
         <h4>Komeeda <b>February 2017 - Present</b></h4> 
         <p> <b> Position</b> description</p>
         <h4>Nimblestack <b>April 2016 - October 2016</b></h4>
         <p> <b>Position</b>  description</p>
         <h4>Eden House <b> August 2014- May 2015</b></h4>
         <p> <b>Position</b> description</p>
      <h2>Skills </h2>
        <h3>I have experience with working with some of the following... </h3>
        <h4>React, Redux, Javascript, Mocha, Chai, Node.js, Express, Ruby, Rails, Sinatra, JSON, jQuery, SVG</h4>
      <h3>Education</h3>
      <h4>General Assemblys WDI</h4>
      <h4> Tulane University</h4> 
      <h3>Other</h3>
        <h4>speaking</h4>
        <h4>hackathon - brewhacks</h4>
        <h4>hackathon - comedyhackday</h4>
        <h4>hackathon - disrupt tech crunch</h4>
    </div>
		  
			 
		)
	}

}