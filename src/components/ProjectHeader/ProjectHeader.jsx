import React from 'react';
import './ProjectHeader.scss';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

function ProjectHeader({ title, youtubeEmbedLink, base64Image }) {
  return (
    <div className={`ProjectHeader ${youtubeEmbedLink ? 'has-video' : 'no-video'}`}>
      {
        youtubeEmbedLink
          ? <YoutubeEmbed youtubeEmbedLink={youtubeEmbedLink} />
          : <img className='ProjectHeader-img' src={base64Image} alt={title + ' image'} />
      }
      <h1>{title}</h1>
    </div>
  )
};

export default ProjectHeader;
