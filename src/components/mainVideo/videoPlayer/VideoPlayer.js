import React from 'react';

const VideoPlayer = () => {
    return (
        <div>
            <iframe
                width="100%"
                className="aspect-video"
                src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
                title="Some video title"
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;