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
			<div>
				<IndexLink to='/'> About</IndexLink>
				<IndexLink to='/projects'>Projects</IndexLink>
				<IndexLink to='/contact'>Contact</IndexLink>
				<IndexLink to='/experience'>Experience</IndexLink>
			</div>
		)
	}

}