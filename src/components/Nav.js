import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink} from 'react-router'



export default class Nav extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
			<header>
      <img src="public/img/logo.png" className="logo"/>
			 <div className='nav'>
			   <ul>
				  <li className="nav-link"><IndexLink to='/' className="nav-a" activeClassName="active">About</IndexLink></li>
				  <li className="nav-link"><IndexLink to='/work' className="nav-a" activeClassName="active">Previous Work</IndexLink></li>
				  <li className="nav-link"><IndexLink to='/contact' className="nav-a" activeClassName="active">Contact</IndexLink></li>
				  <li className="nav-link"><IndexLink to='/experience' className="nav-a" activeClassName="active">Experience</IndexLink></li>
				</ul>
			</div>
			</header>
		)
	}

}