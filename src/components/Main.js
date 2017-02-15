import React, { PropTypes, Component } from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink} from 'react-router'
import Project from './Project'
import About from './About'
import Notfound from './NotFound'
import Contact from './Contact'
import Experience from './Experience'
import Nav from './Nav'


export default class Main extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
				<IndexRoute component={About}/>
				<Route path='/projects' component={Project}/>
				<Route path='/contact' component={Contact}/>
				<Route path='/experience' component={Experience}/>
				<Route path='*' component={Notfound}/>
				</Route>
			</Router>
		)
	}

}
	const Container = (props) =>
	<div>
		<Nav/>
		{props.children}
	</div>
