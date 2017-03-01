import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='contact-container center'>
			<h3 className="text-center header"> Contact Me </h3>
			<h4><i>Email:</i> diana.frank22@gmail.com</h4>
      <h3 className="text-center header"> Connect </h3>
			<h4><i>linkedin</i></h4>
			<h4><i>Twitter</i></h4>
			<h4><i>Github</i></h4>
			<h4><i>bitbucket</i></h4>
			</div>
		)
	}

}