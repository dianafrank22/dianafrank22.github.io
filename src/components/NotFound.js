import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Notfound extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div class='no-style'>
			<h3> Not Found  <b> SAD!</b></h3>	
			</div>	)
	}

}