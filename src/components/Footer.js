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
			<h3 className='header'>© 2017 Diana Frank Development</h3>
      <a href="https://github.com/dianafrank22"><img src='../../public/img/github2.png'/></a>
      <a href="https://www.linkedin.com/in/dianafrank"><img src='../../public/img/linkedin2.png'/></a>
      <a href="https://twitter.com/dianafrnk"><img src='../../public/img/twitter.png'/></a>
			</div>
		)
	}

}