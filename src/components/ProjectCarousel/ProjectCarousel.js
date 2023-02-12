import React from 'react';
import Project from '../Project/Project';
import './ProjectCarousel.scss';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import ProjectCarouselProject from '../ProjectCarouselProject/ProjectCarouselProject';

function ProjectCarousel(props) {
  ProjectCarousel.defaultProps = {
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
        <div className='ProjectCarousel-project' key={uuidv4()}>
          <ProjectCarouselProject
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
    <div className="ProjectCarousel">
      {generateProjects()}
    </div>
  )
};

export default ProjectCarousel;
