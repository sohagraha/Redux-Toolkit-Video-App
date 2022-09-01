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
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;