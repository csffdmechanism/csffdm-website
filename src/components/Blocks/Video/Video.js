import React from 'react';
import VideoPlayer from '../../Global/VideoPlayer/VideoPlayer';

function Video({ content, withContainer = false }) {
  const isExternalVideoUrl = (url) => {
    // Basic validation for external video URLs
    return /^(https?:\/\/)(www\.)?(youtube\.com|youtu\.be|vimeo\.com|player\.vimeo\.com|.*\.(mp4|webm|ogg))/.test(url);
  };
  return (
    <>
      {content?.video && (
        <div className={`${withContainer ? 'container' : ''}`}>
          <VideoPlayer video={content?.video} />
        </div>
      )}
      {!content?.video && content.local_video_url && (
        <iframe
          width="560"
          height="315"
          src={content.local_video_url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '100%' }}
        ></iframe>
      )}
      {!content?.video && isExternalVideoUrl(content.youtubeUrl) && (
        <iframe
          width="560"
          height="315"
          src={content.youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '100%' }}
        ></iframe>
      )}

      {!content?.video && !content.local_video_url && !isExternalVideoUrl(content.youtubeUrl) && (
        <p>No valid video source found.</p>
      )}
    </>
  );
}

export default Video;
