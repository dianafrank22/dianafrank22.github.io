import React, { Component } from 'react';

const Projectcard= props =>(
    <div className="card-container padding-5">
        <img className="project-image border-shadow" src={'../../public/img/'+props.photo} alt={props.title}/>
      <div className="project-info text-center"> 
          <h2 className="project-title header">{props.title}</h2>
          <p className="project-description"> {props.description}</p>
          <h4> <i> {props.skills}</i></h4>
         <a className="project-link" href={props.website}> <button className="project-btn shadow-thin">Check it out </button></a> 
      </div>
    </div>
  )

export default Projectcard;