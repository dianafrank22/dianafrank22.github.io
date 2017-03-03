import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='contact-container center text-center'>
			<h3 className="header"> Contact Me </h3>
			<h4><i>Email:</i> diana.frank22@gmail.com</h4>
      <h3 className="text-center header"> Connect </h3>
			<h4><a href="https://www.linkedin.com/in/dianafrank">LinkedIn</a></h4>
			<h4><a href="https://twitter.com/dianafrnk">Twitter</a></h4>
			<h4><a href="https://github.com/dianafrank22">Github</a></h4>
			<h4><a href="https://bitbucket.org/dianafrank22">BitBucket</a></h4>
			</div>
		)
	}

}