import React, { Component } from 'react';

const Projectcard= props =>(
    <div className="card-container padding-5">
        <img className="project-image" src={'../../public/img/'+props.photo} alt={props.title}/>
      <div className="project-info">
          <a className="project-link" href={props.website}>  
            <h3 className="text-center header">{props.title}</h3>
          </a> 
          <p> {props.description}</p>
          <h4> <i> {props.skills}</i></h4>
      </div>
    </div>
  )

export default Projectcard;