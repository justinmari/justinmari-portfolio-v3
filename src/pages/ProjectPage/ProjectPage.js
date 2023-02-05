import React, { Component } from 'react';
import './ProjectPage.scss';

class ProjectPage extends Component {
  static defaultProps = {
    id: 'noId',
    base64Image: '',
    title: 'default project title',
    descriptions: 'default project description',
    programmingLanguages: ['J#', 'Python'],
    technologies: ['program1', 'library2', 'framework3']
  }

  render() {
    return (
      <div className="ProjectPage">
        <h1>{this.props.title} page!</h1>
      </div>
    )
  }
};

export default ProjectPage;
