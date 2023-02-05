import React, { Component } from 'react';
import Project from '../Project/Project';
import './ProjectGrid.scss';
import { v4 as uuidv4 } from 'uuid';

class ProjectGrid extends Component {
  static defaultProps = {
    projects: []
  }

  generateProjects() {
    let projects = [];
    for (let i = 0; i < this.props.projects.length; i++) {
      projects.push(
        <Project
          key={uuidv4()}
          id={this.props.projects[i].id}
          base64Image={this.props.projects[i].base64Image}
          title={this.props.projects[i].title}
          descriptions={this.props.projects[i].descriptions}
          programmingLanguages={this.props.projects[i].programmingLanguages}
          technologies={this.props.projects[i].technologies}
          isOpen={false}
        />
      );
    }
    return projects;
  }

  render() {
    return (
      <div className="ProjectGrid">
        {this.generateProjects()}
      </div>
    )
  }
};

export default ProjectGrid;
