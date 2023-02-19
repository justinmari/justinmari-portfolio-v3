import React, { Component, useState } from 'react';
import './InfoCard.scss';

function InfoCard({title, text}) {
  return (
    <div className='InfoCard'>
      <h6 className='InfoCard-title'>{title}</h6>
      <p>{text}</p>
    </div>
  )
};

export default InfoCard;
