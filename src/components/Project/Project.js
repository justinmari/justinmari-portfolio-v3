import React, { Component, useState } from 'react';
import Divider from '../Divider/Divider';
import './Project.scss';

function Project(props) {
  Project.defaultProps = {
    id: 'noId',
    base64Image: '',
    title: 'default project title',
    date: '2000-02-03',
    descriptions: 'default project description',
    programmingLanguages: ['J#', 'Python'],
    technologies: ['program1', 'library2', 'framework3'],
  }

  function generateLanguageList() {
  
    const numberOfLanguages = props.programmingLanguages.length;
    let languages = '';
    for (let i = 0; i < numberOfLanguages; i++) {
      languages += props.programmingLanguages[i] + (i === numberOfLanguages-1 ? '' : ',');
    }
    return languages;
  }

  function handleClick() {
    props.handleClick(props);
  }

  return (
    <div className={'Project'} onClick={handleClick}>
      <div className='Project-wrapper'>
        <div className='Project-top-content'>
          <img className='Project-img' src={props.base64Image} alt={props.title} />
          <div className='Project-title'>
            <h3>{props.title}</h3>
            <h6>{generateLanguageList()}</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;
