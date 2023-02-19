import React, { Component } from 'react';
import './ProjectPage.scss';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams } from 'react-router-dom';
import Divider from '../../components/Divider/Divider';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import ListCard from '../../components/ListCard/ListCard';
import InfoCard from '../../components/InfoCard/InfoCard';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';

function ProjectPage({ projects }) {
  const { id } = useParams();
  const [project] = getProject();

  function getProject() {
    return projects.filter(project => id === project.id);
  }

  return (
    <div className='ProjectPage'>

      <ProjectHeader
        title={project.title}
        youtubeEmbedLink={project.youtubeEmbedLink}
        base64Image={project.base64Image}
      />

      <div className='ProjectPage-content container-fluid'>
        <Divider />

        <div className='ProjectPage-details row'>
          <div className='ProjectPage-languages col-4'>
            <ListCard title='Languages' list={project.programmingLanguages} />
          </div>
          <div className='ProjectPage-technologies col-4'>
            <ListCard title='Skills' list={project.skills} />
          </div>
          <div className='ProjectPage-date col-4'>
            <InfoCard title='Date' text={`${project.startDate} - ${project.endDate ? project.endDate : 'Present'}`} />
          </div>
        </div>
        <Divider />

        <div className='ProjectPage-description'>
          <DescriptionCard descriptions={project.descriptions} />
        </div>

      </div>
    </div>
  )
};

export default ProjectPage;
