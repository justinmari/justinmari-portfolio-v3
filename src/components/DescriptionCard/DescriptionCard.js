import React, { Component, useState } from 'react';
import './DescriptionCard.scss';
import { v4 as uuidv4 } from 'uuid';

function DescriptionCard({descriptions}) {

  function generateDescriptions() {
    const descriptionItems = [];
    descriptions.forEach(description => {
      descriptionItems.push(<p key={uuidv4()}>{description}</p>);
    });
    return descriptionItems;
  }

  return (
    <div className='DescriptionCard'>
      {generateDescriptions()}
    </div>
  )
};

export default DescriptionCard;
