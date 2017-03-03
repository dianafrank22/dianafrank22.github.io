import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


export default class About extends Component{
  constructor(){
    super();
    this.state ={}
  }
  
	render(){
		return(
    <div>
    	<div className='about'>
            <div id="img" className="row">
                <img src="public/img/me3.png" className="me"/>
            </div>
            <div className="info">
                <h2 className="header"> Hello !</h2>
    			<p> I'm <strong className="pink two-em">Diana Frank</strong>, a <strong className="blue two-em"> fullstack developer</strong> from  
                <strong className="pink two-em"> New York, NY </strong>. <br/> 
                I enjoy building beautiful, responsive, test driven frontends and backends of websites. </p>
            </div>
            <div className="not-coding">
                <h2 className="header text-center"> When I'm not coding, you can find me... </h2>
                     <p className="list margin-left-2 hover-blue">hanging with my two dogs.............................</p>
                     <p className="list margin-right-2 hover-pink">...........................................traveling</p>
                     <p className="list margin-left-2 hover-blue">searching Manhattan for the best Moscow Mule.........</p>
                     <p className="list margin-right-2 hover-pink">................................making travel videos</p> 
                     <p className="list margin-left-2 hover-blue">cooking..............................................</p>
                     <p className="list margin-right-2 hover-pink">............................reading a crime thriller</p>
            </div>
         </div>
    </div>
		)
	}

}