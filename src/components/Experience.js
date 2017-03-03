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
            <h4>Part Time Developer</h4> 
            <h5>February 2017 - Present</h5>
            <p>• Collaborated with other members of the agile team to implement graphic designers designs<br/>
• Built new features using Rspec tested Rails, Bootstrap, jQuery, and Sass
</p>
          <hr className="line-style" />
            <h3> Nimblestack</h3>
            <h4> Fullstack Developer</h4>
            <h5>April 2016 - October 2016</h5>
            <p>•  Developed backend of consumer-facing AI Facebook messenger chatbot using Node.js and MongoDB<br/>
• Built responsive mobile friendly frontend using React.js, Redux, ES6, CSS3, and Webpack<br/>
• Modified product UX based on data from user tests and internal team discussions<br/>
• Wrote test driven code using Mocha, Chai, and Sinon<br/>
• Integrated Facebook, GoogleMaps, Delivery.com, and other AI APIs into products 
</p>
        <hr className="section-line" />
      <h2 className="header text-center">Skills </h2>
          <h3>I have experience with working with some of the following... </h3>
          <p>React, Redux, Javascript, Mocha, Chai, Node.js, Express, Ruby, Rails, Sinatra, JSON, jQuery, SVG</p>
        <hr className="section-line" />
      <h2 className="header text-center">Education</h2>
          <h3>General Assemblys WDI</h3>
          <h4> November 2015 - March 2016 </h4>
          <p> Full Stack Web Development Immersive (Ruby, Rails, JavaScript, jQuery, Bootstrap, and HTML5/CSS3)</p>
        <hr className="line-style" />
          <h3> Tulane University</h3> 
          <h4> May 2015 </h4>
          <p> Bachelor of Science, Psychology, Gender and Sexuality </p>
    <hr className="section-line" />
      <h2 className="header text-center">Other</h2>
          <h3>BrewHacks Hackathon</h3>
          <h4> April 2016</h4>
          <h5>Participant</h5>
          <p> • First place for Brewbot, a web app & Facebook Bot that explores, discovers, and orders new types of beer<br/>
Built responsive site using Bootstrap, HTML5, CSS3, and jQuery </p>
      <hr className="line-style" />
          <h3>Disrupt Tech Crunch</h3>
          <h4> May 2016</h4>
          <h5>Participant</h5>
          <p> • Developed a Node.js server that read and sent email through Office365 API for Mailbot, an email assistant bot<br/>
• Won prizes with Cisco for best use of cloud collaboration APIs and Microsoft for best use of Office 365 connectors
 </p>
      <hr className="line-style" />
          <h3>General Assembly Ladies WDI Meetup</h3>
          <h4> June 2016</h4>
          <h5>Speaker</h5>
          <p> Presented on post bootcamp life, participating and winning in Hackathons! </p>
    </div>
		  
			 
		)
	}

}