import React, { Component } from 'react';
import './ProjectsPage.scss';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';

class ProjectsPage extends Component {
  static defaultProps = {
    projects: []
  }

  render() {
    return (
      <div className="ProjectsPage">
        <ProjectGrid projects={this.props.projects}/>
      </div>
    )
  }
};

export default ProjectsPage;
