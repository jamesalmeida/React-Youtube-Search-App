import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const channelId = video.snippet.channelId;
  const channelUrl = `https://www.youtube.com/channel/${channelId}`;
  const videoDate = new Date(video.snippet.publishedAt);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
  const videoDateFormatted = new Intl.DateTimeFormat('en-US', dateOptions).format(videoDate);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="details">
        <div><h3>{video.snippet.title}</h3></div>
        <div><p>{video.snippet.description}</p></div>
        <div>Channel: <a href={channelUrl}>{video.snippet.channelTitle}</a></div>
        <div>Uploaded: {videoDateFormatted}</div>
        <div>Channel Id: {channelId}</div>
        <div>Video Id: {videoId}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
