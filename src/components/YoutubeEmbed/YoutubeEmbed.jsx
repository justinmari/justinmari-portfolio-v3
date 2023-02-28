import React from 'react';
import './YoutubeEmbed.scss';

function YoutubeEmbed({youtubeEmbedLink}) {
  return (
    <div className="YoutubeEmbed">
      <iframe
        src={youtubeEmbedLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
};

export default YoutubeEmbed;
