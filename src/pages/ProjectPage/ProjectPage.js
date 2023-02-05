import React, { Component } from 'react';
import './ProjectPage.scss';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams } from 'react-router-dom';
import Divider from '../../components/Divider/Divider';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';

function ProjectPage({ projects }) {
  const { id } = useParams();
  const [project] = getProject();
  const hasYoutubeEmbedLink = !!project.youtubeEmbedLink;

  function getProject() {
    return projects.filter(project => id === project.id);
  }

  function generateDescriptions() {
    const descriptions = [];
    for (let i = 0; i < project.descriptions.length; i++) {
      descriptions.push(<p key={uuidv4()}>{project.descriptions[i]}</p>);
    }
    return descriptions;
  }

  function generateLanguageList() {
    const languages = [];
    for (let i = 0; i < project.programmingLanguages.length; i++) {
      languages.push(<p key={uuidv4()}>{project.programmingLanguages[i]}</p>);
    }
    return languages;
  }

  function generateTechnologyList() {
    const technologies = [];
    for (let i = 0; i < project.technologies.length; i++) {
      technologies.push(<p key={uuidv4()}>{project.technologies[i]}</p>);
    }
    return technologies;
  }

  return (
    <div className={`ProjectPage${hasYoutubeEmbedLink ? ' has-video' : ''}`}>
      <div className='ProjectPage-header'>
        {
          hasYoutubeEmbedLink
            ? <YoutubeEmbed youtubeEmbedLink={project.youtubeEmbedLink}/>
            : <img className='ProjectPage-img' src={project.base64Image} alt={project.title + ' image'} />
        }
        <div className='ProjectPage-title'>
          <h1>{project.title}</h1>
        </div>

      </div>

      <Divider />

      <div className='ProjectPage-details'>
        <div className='ProjectPage-languages'>
          <h6>Languages</h6>
          {generateLanguageList()}
        </div>
        <div className='ProjectPage-technologies'>
          <h6>Technologies</h6>
          {generateTechnologyList()}
        </div>
        <div className='ProjectPage-date'>
          <h6>Date</h6>
          <p>{project.startDate} - {project.endDate ? project.endDate : 'Present'}</p>
        </div>
      </div>

      <Divider />

      <div className='ProjectPage-description'>
        {generateDescriptions()}
      </div>
    </div>
  )
};

export default ProjectPage;
