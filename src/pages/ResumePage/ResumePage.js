import React, { Component } from 'react';
import Divider from '../../components/Divider/Divider';
import './ResumePage.scss';
import { v4 as uuidv4 } from 'uuid';

function ResumePage({ resumeData }) {

  const professionalExperienceList = resumeData.professionalExperiences;
  const [summary] = resumeData.summary;

  function generateProfessionalExperiences() {
    const professionalExperiences = [];
    for (let i = 0; i < professionalExperienceList.length; i++) {
      console.log(professionalExperienceList[i].companyName);
      professionalExperiences.push(<p key={uuidv4()}>{professionalExperienceList[i].companyName}</p>);
    }
    return professionalExperiences;
  }

  function generateSummary() {
    const descriptions = [];
    for (let i = 0; i < summary.descriptions.length; i++) {
      descriptions.push(<p key={uuidv4()}>{summary.descriptions[i]}</p>);
    }
    return descriptions;
  }

  return (
    <div className="ResumePage">
      <div className='ResumePage-summary'>
        <h1>Summary</h1>
        <Divider />
        {generateSummary()}
      </div>
      <div className='ResumePage-professional-experiences'>
        <h1>Professional Experiences</h1>
        <Divider />
        {generateProfessionalExperiences()}
      </div>
    </div>
  )
};

export default ResumePage;
