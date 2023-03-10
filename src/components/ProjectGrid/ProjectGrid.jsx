import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.scss';
import { v4 as uuidv4 } from 'uuid';

function ProjectGrid(props) {
  ProjectGrid.defaultProps = {
    projects: []
  };

  // const navigate = useNavigate();

  function handleClick(project) {
    console.log("clicked");
    // navigate(`/projects/${project.id}`);
  }

  function generateProjects() {
    let projectsList = [];
    for (let i = 0; i < props.projects.length; i++) {
      projectsList.push(
        <div className='ProjectGrid-project col-4' key={uuidv4()}>
          <ProjectCard
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
    <div className="ProjectGrid container-fluid row">
      {generateProjects()}
    </div>
  )
};

export default ProjectGrid;
