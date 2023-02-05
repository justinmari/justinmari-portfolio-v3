import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Project.scss';

class Project extends Component {
  static defaultProps = {
    id: 'noId',
    base64Image: '',
    title: 'default project title',
    descriptions: 'default project description',
    programmingLanguages: ['J#', 'Python'],
    technologies: ['program1', 'library2', 'framework3'],
  }

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  generateDescriptions() {
    const descriptions = [];
    for (let i = 0; i < this.props.descriptions.length; i++) {
      descriptions.push(<p key={uuidv4()}>{this.props.descriptions[i]}</p>);
    }
    return descriptions;
  }

  generateLanguagesList() {
    const languages = [];
    for (let i = 0; i < this.props.programmingLanguages.length; i++) {
      languages.push(<li key={uuidv4()}>{this.props.programmingLanguages[i]}</li>);
    }
    return languages;
  }

  generateTechnologiesList() {
    const technologies = [];
    for (let i = 0; i < this.props.technologies.length; i++) {
      technologies.push(<li key={uuidv4()}>{this.props.technologies[i]}</li>);
    }
    return technologies;
  }

  handleClick() {
    this.setState(oldState => {
      return {...oldState, isClicked: true}
    });
  }

  render() {
    return (
      <div className={'Project'} onClick={this.handleClick}>
        <div className='Project-wrapper'>
          <div className='Project-top-content'>
            <img className='Project-img' src={this.props.base64Image} alt={this.props.title} />
            <div className='Project-title'>
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
        {this.state.isClicked && <Navigate to={`/project/${this.props.id}`} replace={true}/>}
      </div>
    )
  }
};

export default Project;
