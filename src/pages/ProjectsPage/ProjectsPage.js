import React, { Component } from 'react';
import './ProjectsPage.scss';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';

function ProjectsPage(props) {
  ProjectsPage.defaultProps = {
    projects: []
  }

  return (
    <div className="ProjectsPage">
      <ProjectGrid projects={props.projects} />
    </div>
  )
};

export default ProjectsPage;
