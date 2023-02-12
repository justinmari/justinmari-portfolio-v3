import React, { Component, useState } from 'react';
import Divider from '../Divider/Divider';
import './ProjectCarouselProject.scss';

function ProjectCarouselProject(props) {
  function generateLanguageList() {

    const numberOfLanguages = props.programmingLanguages.length;
    let languages = '';
    for (let i = 0; i < numberOfLanguages; i++) {
      languages += props.programmingLanguages[i] + (i === numberOfLanguages - 1 ? '' : ', ');
    }
    return languages;
  }

  function handleClick() {
    props.handleClick(props);
  }

  return (
    <div className={'ProjectCarouselProject'} onClick={handleClick}>
      <div className='ProjectCarouselProject-top-content'>
        <img className='ProjectCarouselProject-img' src={props.base64Image} alt={props.title} />
        <div className='ProjectCarouselProject-title'>
          <h3>{props.title}</h3>
          <h6>{generateLanguageList()}</h6>
        </div>
      </div>
    </div>
  )
};

export default ProjectCarouselProject;
