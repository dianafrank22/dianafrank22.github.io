import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink} from 'react-router'



export default class Nav extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<div className='nav'>
				<IndexLink to='/'><p> About</p></IndexLink>
				<IndexLink to='/work'><p>Previous Work</p></IndexLink>
				<IndexLink to='/contact'><p>Contact</p></IndexLink>
				<IndexLink to='/experience'><p>Experience</p></IndexLink>
			</div>
		)
	}

}