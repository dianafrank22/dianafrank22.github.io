import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'

const Container =(props) => 
			<div>
			<Nav/>
			{props.children}
			</div>
	