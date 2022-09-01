import React from 'react';

const VideoPlayer = ({ video = {} }) => {
    const { link, title } = video;
    return (
        <div>
            <iframe
                width="100%"
                className="aspect-video"
                src={link}
                title={title}
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;