import React, { Component } from 'react';
import Projectcard from './ProjectCard'


const ProjectContainer = props =>{
// const allProjects = props.projects.map((project, i) => {
//     return (
//       <Projectcard
//         key={i}
//         title={project.title}
//         website={project.website}
//         photo={project.photo_file_name}
//         description={project.description}
//         skills={project.skills}
//       />
//     );
//   }); 


    return(
      <div className='project-container'>
        <Projectcard/>
      </div>
    )
}

export default ProjectContainer;