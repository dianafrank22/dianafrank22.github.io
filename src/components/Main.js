import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import Footer from './Footer'
import Project from './Project';

export default class Main extends React.component{
	constructor(){
		super();
		this.state={}
	}

	render(){
		return(
			  //<Nav/>
			<Project />
			// <Footer />
		)
	}

}