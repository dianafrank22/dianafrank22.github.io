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
				  <li><IndexLink to='/'><p> About</p></IndexLink></li>
				  <li><IndexLink to='/work'><p>Previous Work</p></IndexLink></li>
          <li><h1> Diana Frank Development</h1></li>
				  <li><IndexLink to='/contact'><p>Contact</p></IndexLink></li>
				  <li><IndexLink to='/experience'><p>Experience</p></IndexLink></li>
				</ul>
			</div>
			</header>
		)
	}

}