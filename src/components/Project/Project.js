import React, { Component, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Project.scss';

function Project(props) {
  Project.defaultProps = {
    id: 'noId',
    base64Image: '',
    title: 'default project title',
    descriptions: 'default project description',
    programmingLanguages: ['J#', 'Python'],
    technologies: ['program1', 'library2', 'framework3'],
  }

  const [isClicked, setIsClicked] = useState(false);

  function generateDescriptions() {
    const descriptions = [];
    for (let i = 0; i < props.descriptions.length; i++) {
      descriptions.push(<p key={uuidv4()}>{this.props.descriptions[i]}</p>);
    }
    return descriptions;
  }

  function generateLanguagesList() {
    const languages = [];
    for (let i = 0; i < props.programmingLanguages.length; i++) {
      languages.push(<li key={uuidv4()}>{this.props.programmingLanguages[i]}</li>);
    }
    return languages;
  }

  function generateTechnologiesList() {
    const technologies = [];
    for (let i = 0; i < props.technologies.length; i++) {
      technologies.push(<li key={uuidv4()}>{this.props.technologies[i]}</li>);
    }
    return technologies;
  }

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className={'Project'} onClick={handleClick}>
      <div className='Project-wrapper'>
        <div className='Project-top-content'>
          <img className='Project-img' src={props.base64Image} alt={props.title} />
          <div className='Project-title'>
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
      {isClicked && <Navigate to={`/project/${props.id}`} replace={true} />}
    </div>
  )
};

export default Project;
