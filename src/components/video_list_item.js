import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  const videoDate = new Date(video.snippet.publishedAt);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
  const videoDateFormatted = new Intl.DateTimeFormat('en-US', dateOptions).format(videoDate);

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
        <div className="media-date">{videoDateFormatted}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
