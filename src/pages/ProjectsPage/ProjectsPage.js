import React, { Component } from 'react';
import './ProjectsPage.scss';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';

function ProjectsPage(props) {
  ProjectsPage.defaultProps = {
    projects: []
  }

  return (
    <div className="ProjectsPage">
      <ProjectCarousel projects={props.projects} />
    </div>
  )
};

export default ProjectsPage;
