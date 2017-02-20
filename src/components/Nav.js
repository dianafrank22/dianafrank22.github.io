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
			<header>
			 <div className='nav'>
			   <ul>
				  <li><IndexLink to='/'>About</IndexLink></li>
				  <li><IndexLink to='/work'>Previous Work</IndexLink></li>
				  <li><IndexLink to='/contact'>Contact</IndexLink></li>
				  <li><IndexLink to='/experience'>Experience</IndexLink></li>
				</ul>
			</div>
			</header>
		)
	}

}