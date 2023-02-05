import React, { Component } from 'react';
import Project from '../Project/Project';
import './ProjectGrid.scss';
import { v4 as uuidv4 } from 'uuid';

function ProjectGrid(props) {
  ProjectGrid.defaultProps = {
    projects: []
  };

  function generateProjects() {
    let projectsList = [];
    for (let i = 0; i < props.projects.length; i++) {
      projectsList.push(
        <Project
          key={uuidv4()}
          id={props.projects[i].id}
          base64Image={props.projects[i].base64Image}
          title={props.projects[i].title}
          descriptions={props.projects[i].descriptions}
          programmingLanguages={props.projects[i].programmingLanguages}
          technologies={props.projects[i].technologies}
          isOpen={false}
        />
      );
    }
    return projectsList;
  }

  return (
    <div className="ProjectGrid">
      {generateProjects()}
    </div>
  )
};

export default ProjectGrid;
