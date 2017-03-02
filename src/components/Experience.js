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
            <h3>Komeeda</h3>
            <h4>February 2017 - Present</h4>
            <h5>Part Time Developer</h5> 
            <p>description</p>
                <hr className="line-style" />

            <h3> Nimblestack</h3>
            <h4>April 2016 - October 2016</h4>
            <h5> Fullstack Developer</h5>
            <p>description</p>
        <hr className="section-line" />
      <h2 className="header text-center">Skills </h2>
          <h3>I have experience with working with some of the following... </h3>
          <p>React, Redux, Javascript, Mocha, Chai, Node.js, Express, Ruby, Rails, Sinatra, JSON, jQuery, SVG</p>
        <hr className="section-line" />
      <h2 className="header text-center">Education</h2>
          <h3>General Assemblys WDI</h3>
          <h4> duration </h4>
          <p> description</p>
        <hr className="line-style" />
          <h3> Tulane University</h3> 
          <h4> duration </h4>
          <p> description</p>
    <hr className="section-line" />
  
      <h2 className="header text-center">Other</h2>
          <h3>hackathon - brewhacks</h3>
          <h4> date</h4>
          <h5>role</h5>
          <p> description </p>
      <hr className="line-style" />
          <h3>hackathon - disrupt tech crunch</h3>
          <h4> date</h4>
          <h5>role</h5>
          <p> description </p>
      <hr className="line-style" />
          <h3>speaking</h3>
          <h4> date</h4>
          <h5>role</h5>
          <p> description </p>
      <hr className="line-style" />
          <h3>hackathon - comedyhackday</h3>
          <h4> date</h4>
          <h5>role</h5>
          <p> description </p>
    </div>
		  
			 
		)
	}

}