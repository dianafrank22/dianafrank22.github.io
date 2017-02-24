import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='text-center footer'>
			<h3>© 2017 Diana Frank Development  </h3>
      <p> Links</p>
			</div>
		)
	}

}