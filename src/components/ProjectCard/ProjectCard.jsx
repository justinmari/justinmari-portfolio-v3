import React from 'react';
import './ProjectCard.scss';

function ProjectCard(props) {
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
    <div className='ProjectCard' onClick={handleClick}>
      <img className='ProjectCard-img' src={props.base64Image} alt={props.title} />
        <h1 className='ProjectCard-title'>{props.title}</h1>
        <h6 className='ProjectCard-languages'>{generateLanguageList()}</h6>
    </div>
  )
};

export default ProjectCard;
