import React from 'react';
import Project from '../Project/Project';
import './ProjectGrid.scss';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function ProjectGrid(props) {
  ProjectGrid.defaultProps = {
    projects: []
  };

  const navigate = useNavigate();

  function handleClick(project) {
    navigate(`/projects/${project.id}`);
  }

  function generateProjects() {
    let projectsList = [];
    for (let i = 0; i < props.projects.length; i++) {
      projectsList.push(
        <div className='ProjectGrid-project' key={uuidv4()}>
          <Project
            id={props.projects[i].id}
            base64Image={props.projects[i].base64Image}
            title={props.projects[i].title}
            descriptions={props.projects[i].descriptions}
            programmingLanguages={props.projects[i].programmingLanguages}
            technologies={props.projects[i].technologies}
            isOpen={false}
            handleClick={handleClick}
          />
        </div>
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
