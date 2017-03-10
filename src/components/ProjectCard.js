import React, { Component } from 'react';

const Projectcard= props =>(
  <div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/dashboard.png'} alt='dashboard'/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Daily Dashboard</h2>
      <p className="project-description"> A Dashboard to retrieve daily weather forcasts and news by connecting to weather and NYTimes apis. Uses NPM node-fetch to connect to the Node, Express API from the React frontend.</p>
      <h4> <i> React, Node, NPM node-fetch, Express, Flexbox, Sass, SVG, Heroku</i></h4>
      <a className="project-link" href='dashboard.heroku.com'> <button className="project-btn shadow-thin">Check it out </button></a> 
    </div>
</div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/battleship.png'} alt="battleship"/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Battleship</h2>
      <p className="project-description"> Starwars themed Battleship game built using a React frontend that uses NPM node-fetch to APIs to fulfill promises to connect to server side logic to process CPU ship selection.</p>
      <h4> <i> React, Node, Express, Javascript, Webpack, Babel, Heroku</i></h4>
      <a className="project-link" href="https://github.com/dianafrank22/battleShip"> <button className="project-btn shadow-thin">Check it out </button></a> 
    </div>
</div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/brewhacks.png'} alt="brewhacks"/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Brewhacks Brewbot</h2>
      <p className="project-description"> A beer recommendation, and delivery Facebook Chatbot. Built, and won first prize at the BrewHacks Hackathon, users can use this application to take a taste survey,
add their favorites, review recommendations, and create an order queue that is easily accessed by sending a 🍺emoji to BrewBot on Facebook Messenger. Using Facebooks geolocation services, Brewbot sends your location, and order to Delivery.com using the delivery.com API, and gets beer delivered to you in a couple simple steps. I built the front-end of the site, using HTML5, CSS3, Javascript, and jQuery.</p>
      <h4> <i> HTML5, CSS3, Bootstrap, jQuery</i></h4>
      <a className="project-link" href="brewhack.herokuapp.com"> <button className="project-btn shadow-thin">Check it out </button></a> 
    </div>
</div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/songshare.png'} alt="songshare"/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Song Share</h2>
      <p className="project-description"> A social music sharing application. Inspired by my love of music, and the social media site, Twitter, I decided to create an application in which users could share music directly with their followers with some descriptors, or tags on why they would like it. The site is connected to the Spotify API, using AJAX. Users can search for music through the tags, or descriptors associated with them, follow friends, and have CRUD capabilities to showcase their ‘Current Favorites’. 
</p>
      <h4> <i> Rails, ActiveRecord, PSQL, jQuery, AJAX, JSON, Bootstrap, CSS3, Spotify API</i></h4>
      <a className="project-link" href="https://github.com/dianafrank22/Songshare"> <button className="project-btn shadow-thin">Check it out </button></a> 
    </div>
</div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/attendance.png'} alt="attendance management photo"/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Attendance Management</h2>
      <p className="project-description"> The Attendance Management app provides a tracking system of students attendance in the different General Assembly courses.
As a student user, a student can view the dates in which they have been marked as late, or unexcused, as well as contact their producer, via Twilio. A student can text using Twilio, which will update the attendance page with their message, if they are running late or will be unexcused.
As an instructor, a page that lists their courses can be viewed, as well as updating the status of a student, for the current day, as well as any previous day.
A producer has access to all the cohorts they oversee, the corresponding attendance pages, as well as a list of students that need to be contacted, which is calculated based on if they have four or more absences.</p>
      <h4> <i> Rails, ActiveRecord, PSQL, jQuery, CSS, Twilio</i></h4>
      <a className="project-link" href="https://github.com/ldelamojr/attendance_management"> <button className="project-btn shadow-thin">Check it out </button></a> 
    </div>
</div>
<div className="card-container padding-5">
  <img className="project-image border-shadow" src={'../../public/img/brewbot.png'} alt="brewbot image"/>
    <div className="project-info text-center"> 
      <h2 className="project-title header">Brewbot</h2>
      <p className="project-description"> Inspired by the chatbot built at the BrewHacks hackathon, Brewbot was the real life version of Brewbot that I was in charge of building while working as a full stack developer at a small startup. Built using a React/Redux front-end, and a Node.js backend, this chatbot was built incorporating a variety of APIs including Google, Facebook, and Delivery.com. This bot allows users to quickly order beers to their location in a few simple steps. 
      </p>
      <h4> <i>React, Redux, ES6, Kube CSS, Node, Google API, Facebook API, Mocha, Chai, Sinon, Webpack</i></h4>
      <a className="project-link" href="https://www.facebook.com/getbrewbot/"> <button className="project-btn shadow-thin">Check it out </button></a>
    </div>
</div>
</div>
  )

export default Projectcard;