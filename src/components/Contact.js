import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div>
			<h3> Contact </h3>
			email, cell, linkedin, twitter, github, bitbucket
			</div>
		)
	}

}