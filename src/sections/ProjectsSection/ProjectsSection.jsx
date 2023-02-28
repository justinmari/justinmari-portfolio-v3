import React from 'react';
import './ProjectsSection.scss';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';

function ProjectsSection(props) {
  ProjectsSection.defaultProps = {
    projects: []
  }

  return (
    <div className="ProjectsSection container-fluid">
      <ProjectGrid projects={props.projects} />
    </div>
  )
};

export default ProjectsSection;
